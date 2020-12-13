<template>
    <table>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Result</th>
        </tr>
        <tr v-for="(point, index) in POINTS" :key="index">
            <td>{{point.x}}</td>
            <td>{{point.y}}</td>
            <td>{{point.r}}</td>
            <td>{{point.result}}</td>
        </tr>
    </table>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "point-table",
        methods: {...mapActions(['GET_POINTS_FROM_API'])},
        computed: {...mapGetters(["POINTS"])},
        mounted(){this.GET_POINTS_FROM_API()}
    }
</script>