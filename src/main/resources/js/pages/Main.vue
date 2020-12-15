<template>
    <div>
        <interactive-object/>
        <point-form/>
        <point-table/>
    </div>
</template>

<script>
    import pointTable from '../components/point-table.vue'
    import pointForm from '../components/point-form.vue'
    import interactiveObject from '../components/interactive-object.vue'

    export default {
        name: "Main",
        components: {pointTable, pointForm, interactiveObject}
    }
</script>

<style scoped>

</style>