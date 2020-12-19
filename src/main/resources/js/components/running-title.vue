<template>
    <header>
        <b-nav :class="['navbar', isDarkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-indigo-200']">
            <b-nav-text>Variant 31136, Kantorov Vsevolod, P3212</b-nav-text>
            <span class="secret">получается креатех закончился</span>
            <div v-if="isLoggedIn" class="atop">
                <b-button :variant="[isDarkTheme ? 'outline-secondary' : 'light']">Settings</b-button>
                <b-button @click="logout" :variant="[isDarkTheme ? 'outline-secondary' : 'light']">Logout</b-button>
            </div>
            <div class="atop">
                <b-button v-if="isDarkTheme" @click="changeTheme" variant="outline-secondary">Light theme</b-button>
                <b-button v-else @click="changeTheme" variant="light">Dark theme</b-button>
            </div>
        </b-nav>
    </header>
</template>

<script>
    import {mapActions, mapGetters} from "vuex"
    export default {
        name: "running-title",
        computed: {...mapGetters(['isLoggedIn', 'isDarkTheme'])},
        methods: {...mapActions(['logout', 'changeTheme'])}
    }
</script>

<style scoped>
    .secret{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        color: transparent;
    }
    .atop{
        z-index: 1;
    }
    .btn-light {
        color: #212529;
        background-color: #c29ffa;
        border-color: #212529;
    }
    .btn-light:focus {
        color: #212529;
        background-color: #c29ffa;
        border-color: #212529;
    }
    .btn-light:hover {
        color: #212529;
        background-color: #e0cffc;
        border-color: #212529;
    }
</style>
