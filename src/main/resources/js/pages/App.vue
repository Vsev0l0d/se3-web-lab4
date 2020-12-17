<template>
    <div id="app" class="app">
        <running-title/>
        <router-view/>
    </div>
</template>

<script>
    import runningTitle from '../components/running-title.vue'

    export default {
        name: "App",
        components: {runningTitle}
    };
</script>

<style>

</style>