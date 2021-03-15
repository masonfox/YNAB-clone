<template>
<main class="flex-1 relative z-0 focus:outline-none" tabindex="0">
        <BudgetHeader />
        <DashboardStats />
        <!-- Budget -->
        <div class="flex items-center border-b border-gray-200 border-t px-4 py-2">
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