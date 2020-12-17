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
    import {mapGetters} from "vuex"

    export default {
        name: "Main",
        components: {pointTable, pointForm, interactiveObject},
        computed: {...mapGetters(['isLoggedIn'])},
        created() {
            if (!this.isLoggedIn) {
                this.$router.push('/login')
            }
        },
    }
</script>

<style scoped>

</style>