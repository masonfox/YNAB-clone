<template>
<main class="flex-1 relative z-0 focus:outline-none" tabindex="0">
        <BudgetHeader />
        <DashboardStats />
        <!-- Budget -->
        <div class="flex items-center border-gray-200 border-t px-2 py-1 gap-1">
            <button class="flex items-center text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-md focus:outline-none hover:text-indigo-700 text-sm" tabindex="-1">
                <fa icon="plus-circle" class="mr-1.5" />
                Add Category
            </button>
            <button class="flex items-center text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-md focus:outline-none hover:text-indigo-700 text-sm" tabindex="-1">
                <fa icon="undo" class="mr-1.5 text-xs" />
                Undo
            </button>
            <button class="flex items-center text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-md focus:outline-none hover:text-indigo-700 text-sm" tabindex="-1">
                <fa icon="redo" class="mr-1.5 text-xs" />
                Redo
            </button>
        </div>
        <div class="flex items-center border-gray-200 border-t px-4 py-2">
            <!-- Budget Header -->
            <input name="selectAllCategories" type="checkbox" class="h-4 mr-5">
            <span class="budget-header w-1/2">Category</span>
            <span class="budget-header text-right w-1/6">Budgeted</span>
            <span class="budget-header text-right w-1/6">Activity</span>
            <span class="budget-header text-right w-1/6">Available</span>
        </div>
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <!-- Budget Categories -->
            <BudgetCategoryItem v-for="(n, index) in 5" :key="index" />
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .budget-header {
        @apply text-gray-500 text-xs font-medium uppercase tracking-wide;
    }
</style>