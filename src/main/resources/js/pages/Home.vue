<template>
    <div>
        <div v-if="!isAuthenticated">
            <Login/>
        </div>
        <div v-else>
            <Main/>
        </div>
    </div>
</template>

<script>
    import Main from "./Main.vue"
    import Login from "./Login.vue"

    export default {
        name: "Home",
        components: {Main, Login},
        computed: {
            isAuthenticated(){return true}
        }
    }
</script>

<style scoped>

</style>