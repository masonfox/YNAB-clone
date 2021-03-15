<template>
    <ul class="divide-y border-t divide-gray-200">
        <li class="category-item flex items-center px-4 py-1 bg-gray-100" @click.right.prevent="clickEditCategory">
            <input name="selectAllCategories" type="checkbox" class="h-4 mr-1.5">
            <div class="w-1/2">
                <button @click="toggleCategoryVisibility" class="focus:outline-none">
                    <fa :icon="(categoryVisibile) ? 'caret-down' : 'caret-right'" class="mr-0.5" style="width: .5rem;" />
                    <span class="font-semibold">Category Name</span>
                </button>
                <div class="hidden-buttons hidden">
                    <button class="focus:outline-none text-indigo-400 hover:text-indigo-600 ml-2" @click="clickEditCategory">
                        <fa icon="edit" />
                    </button>
                    <button class="focus:outline-none text-indigo-400 hover:text-indigo-600 ml-2" @click="clickAddCategory">
                        <fa icon="plus-circle" />
                    </button>
                </div>
            </div>
            <span class="text-right font-semibold ml-4 w-1/6">$1,000.00</span> <!-- TODO: why do this need the ml-4? -->
            <span class="text-right font-semibold w-1/6">$1,000.00</span>
            <span class="text-right font-semibold w-1/6">$0.00</span>
        </li>
        <li v-for="(n, index) in 4" :key="index" class="flex items-center py-1 px-4" v-show="categoryVisibile">
            <!-- Checkbox -->
            <input name="selectAllCategories" type="checkbox" class="h-4 mr-5">
            <!-- Budget item name -->
            <span class="w-1/2">Hello World</span>
            <!-- Budget display/input -->
            <span class="text-right w-1/6">
                <span>{{ tempValue | currency }}</span>
                <!-- <input type="text" name="budget-item-value" id="" step="0.01" class="text-right w-24 focus:ring-indigo-500 outline-none focus:ring-2 focus:border-indigo-300 rounded-md px-2" v-model="tempValue"> -->
            </span>
            <!-- Activity -->
            <span class="text-right w-1/6">$1,000.00</span>
            <!-- Available -->
            <span class="text-right w-1/6">
                <!-- Only display badge when the user has a goal active for this budget item -->
                <button @click="toggleMoveMoneyPopover" tabindex="-1" class="badge green focus:outline-none">
                    <fa icon="check-circle" />
                    <span class="px-1.5 text-black font-medium">$0.00</span>
                </button>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            categoryVisibile: true,
            moveMoneyPopoverVisibile: false,
            tempValue: 1000.00
        }
    },
    methods: {
        toggleCategoryVisibility () {
            this.categoryVisibile = !this.categoryVisibile
        },
        clickAddCategory () {
            alert('add a category prompt')
        },
        clickEditCategory () {
            alert('edit a category prompt')
        },
        toggleMoveMoneyPopover () {
            alert('toggle pop-over for this item')
        }
    }
}
</script>

<style lang="scss">
    .category-item {

        &:hover .hidden-buttons {
            display: inline-block;
        }
    }

    .badge {
        @apply inline-flex items-center px-1 py-0.5 rounded-full text-sm font-medium; // relative -right-2.5

        &.green {
            @apply bg-green-300;

            svg { @apply text-green-600; }
        }

        &.blue {
            @apply bg-blue-300;

            svg { @apply text-blue-500; }
        }

        &.gray {
            @apply bg-gray-200;
        }
    }
</style>