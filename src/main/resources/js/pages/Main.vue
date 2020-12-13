<template>
    <div>
        <point-form/>
        <point-table/>
    </div>
</template>

<script>
    import pointTable from '../components/point-table.vue'
    import pointForm from '../components/point-form.vue'

    export default {
        name: "Main",
        components: {pointTable, pointForm}
    }
</script>

<style scoped>

</style>