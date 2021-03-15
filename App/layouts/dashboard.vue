<template>
    <div>
        <div class="h-screen flex overflow-hidden bg-white">
            <dashboard-side-nav />
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div class="lg:hidden">
                    <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                        </div>
                    </div>
                </div>
                <div class="flex-1 relative z-0 flex overflow-hidden">
                    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
                        <!-- Start main area-->
                        <Nuxt />
                        <!-- End main area -->
                    </main>
                    <aside class="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200">
                        <!-- Start secondary column (hidden on smaller screens) -->
                        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg"></div>
                        </div>
                        <!-- End secondary column -->
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardSideNav from '../components/DashboardSideNav.vue'
export default {

}
</script>

<style lang="scss">

<
DashboardSideNav/style>