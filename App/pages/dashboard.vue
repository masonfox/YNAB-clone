<template>
    <div>
        <div class="max-w-6xl mx-auto ">
            <!-- <dashboard-stats /> -->
            <Budget />
        </div>
    </div>
</template>

<script>
import DashboardStats from '../components/DashboardStats.vue'
export default {
  components: { DashboardStats },
    layout: 'dashboard'
}
</script>

<style lang="scss">

</style>