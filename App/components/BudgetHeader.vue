<template>
    <!-- Page title & actions -->
    <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div class="flex items-center min-w-0">

            <!-- This example requires Tailwind CSS v2.0+ -->
            <!--
            Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
            to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
            in the near future, but in the mean time we recommend these reference guides when building your implementation:

            https://www.w3.org/TR/wai-aria-practices/#Listbox
            https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
            -->
            <div>
                <div class="relative mr-4">

                    <button type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-64 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm" @click="toggleBudgetSelector">
                    <span class="inline-flex truncate">
                        <span class="truncate">
                            Q1 2021 Budget
                        </span>
                    </span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <!-- Heroicon name: solid/selector -->
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>

                <!--
                Select popover, show/hide based on select state.

                Entering: ""
                    From: ""
                    To: ""
                Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <div class="absolute mt-1 w-64 rounded-md bg-white shadow-lg" v-show="budgetSelectorVisible">
                <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                    Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
                    -->
                    <li id="listbox-item-0" role="option" class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                    <div class="flex">
                        <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                        <span class="font-normal truncate">
                        Wade Cooper
                        </span>
                        <!-- Highlighted: "text-indigo-200", Not Highlighted: "text-gray-500" -->
                        <span class="ml-2 text-gray-500 truncate">
                        @wadecooper
                        </span>
                    </div>

                    <!--
                        Checkmark, only display for selected option.

                        Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                    -->
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                        <!-- Heroicon name: solid/check -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    </li>

                    <!-- More items... -->
                </ul>
                </div>
            </div>
            </div>
            <!-- Month selector -->
            <span class="month-selector text-center">
                <button type="button" class="rounded-l-md">
                    <fa icon="chevron-left" class="text-sm" />
                </button>
                <button type="button" class="month-display w-32 font-medium border-l-0">
                    <span class="text-gray-600 mr-.05">March 2021</span>
                    <fa icon="caret-down" />
                </button>
                <button type="button" class="rounded-r-md">
                    <fa icon="chevron-right" class="text-sm" />
                </button>
            </span>
        </div>
        <div class="mt-4 flex sm:mt-0 sm:ml-4">
          <button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
            Create
          </button>
        </div>
      </div>
</template>

<script>
export default {
    data () {
        return {
            budgetSelectorVisible: false
        }
    },
    methods: {
        toggleBudgetSelector () {
            this.budgetSelectorVisible = !this.budgetSelectorVisible
        }
    }
}
</script>

<style lang="scss">
    .month-selector {
        @apply relative z-0 inline-flex shadow-sm rounded-md;

        button {
            @apply relative px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none;
        }

        button.month-display {
            border-left: 0;
            border-right: 0;
        }
    }
</style>