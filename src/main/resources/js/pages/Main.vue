<template>
    <div>
        <div v-if="isLoggedIn">
            <interactive-object/>
            <point-form/>
            <point-table/>
        </div>
        <div v-else>
            <router-link to="/login">Log in</router-link>
        </div>
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
        computed: {...mapGetters(['isLoggedIn'])}
    }
</script>

<style scoped>

</style>