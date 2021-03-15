<template>
    <ul class="divide-y border-t divide-gray-200">
        <li class="flex items-center px-4 py-1 bg-gray-100">
            <input name="selectAllCategories" type="checkbox" class="h-4 mr-5">
            <div class="w-1/2">
                <button @click="toggleCategoryVisibility" class="focus:outline-none">
                    <fa :icon="(categoryVisibile) ? 'caret-down' : 'caret-right'" class="mr-0.5" style="width: .5rem;" />
                    <span class="font-semibold">Category Name</span>
                </button>
                <button class="focus:outline-none hidden">
                    <fa icon="plus-circle" />
                </button>
            </div>
            <span class="text-right font-semibold w-1/6">$1,000</span>
            <span class="text-right font-semibold w-1/6">$1,000</span>
            <span class="text-right font-semibold w-1/6">$0</span>
        </li>
        <li v-for="(n, index) in 4" :key="index" class="flex items-center py-1 px-4" v-show="categoryVisibile">
            <input name="selectAllCategories" type="checkbox" class="h-4 mr-5">
            <span class="w-1/2">Hello World</span>
            <span class="text-right w-1/6">$1,000</span>
            <span class="text-right w-1/6">$1,000</span>
            <span class="text-right w-1/6">$0</span>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            categoryVisibile: true
        }
    },
    methods: {
        toggleCategoryVisibility () {
            this.categoryVisibile = !this.categoryVisibile
        }
    }
}
</script>

<style lang="scss">
    
</style>