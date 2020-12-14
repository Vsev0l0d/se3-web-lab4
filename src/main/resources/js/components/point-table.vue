<template>
    <div>
        <table>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>
            </tr>
            <tr v-for="point in POINTS" :key="point.id" :class="{'selected': point.selected}" @click="clickRow(point)">
                <td>{{point.x}}</td>
                <td>{{point.y}}</td>
                <td>{{point.r}}</td>
                <td>{{point.result}}</td>
            </tr>
        </table>
        <form>
            <button v-if="countSelectedPoints > 0" @click="deleteSelectedPoints">
                Delete {{countSelectedPoints}} selected points
            </button>
            <button v-else @click="CLEAR">Clear</button>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "point-table",
        data(){
            return {
                countSelectedPoints: 0
            }
        },
        methods: {
            ...mapActions(['GET_POINTS', 'CLEAR', 'DELETE_POINTS']),
            clickRow(point){
                point.selected = !point.selected

                if (point.selected) this.countSelectedPoints += 1
                else this.countSelectedPoints -= 1
            },
            deleteSelectedPoints(){
                let ids = []
                for (let i = 0; i < this.POINTS.length; i++){
                    if (this.POINTS[i].selected) ids.push(this.POINTS[i].id)
                }

                this.DELETE_POINTS(ids)
                this.countSelectedPoints = 0
            }
        },
        computed: {...mapGetters(["POINTS"])},
        mounted(){this.GET_POINTS()}
    }
</script>