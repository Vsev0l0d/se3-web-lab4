<template>
    <div id="app" class="app">
        <nav>
            <span>Variant 31136</span>
            <span style="position: absolute;transform: translateX(-50%); left: 50%;color: transparent">получается креатех закончился</span>
            <span>Kantorov Vsevolod, P3212</span>
            <button v-if="isLoggedIn" @click="logout">Logout</button>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "App",
        computed: {...mapGetters(['isLoggedIn'])},
        methods: {...mapActions(['logout'])}
    };
</script>

<style>

</style>