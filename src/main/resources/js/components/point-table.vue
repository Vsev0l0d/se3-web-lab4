<template>
    <div>
        <table>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>
            </tr>
            <tr v-for="point in paginatedPoints" :key="point.id" :class="{'selected': point.selected}" @click="clickRow(point)">
                <td>{{point.x}}</td>
                <td>{{point.y}}</td>
                <td>{{point.r}}</td>
                <td>{{point.result}}</td>
            </tr>
        </table>
        <div v-if="!POINTS.length">Table is empty</div>
        <div v-else>
            <button @click="pageNumber = 1"><<</button>
            <button @click="pageNumber -= 1"><</button>
            <button v-for="page in [pageNumber - 1, pageNumber, pageNumber + 1]"
                 :key="page" @click="pageClick(page)"
                 :class="{'selected': page === pageNumber}" v-if="page > 0 && page <= pages">
                {{page}}
            </button>
            <button @click="pageNumber += 1">></button>
            <button @click="pageNumber = pages">>></button>

            <button v-if="countSelectedPoints > 0" @click="deleteSelectedPoints">
                Delete {{countSelectedPoints}} selected points
            </button>
            <button v-else @click="clear">Clear</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "point-table",
        data(){
            return {
                countSelectedPoints: 0,
                numberOfRow: 10,
                pageNumber: 1
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
                if (this.pages < this.pageNumber) this.pageNumber = this.pages
            },
            pageClick(page){this.pageNumber = page},
            clear(){this.CLEAR(); this.pageNumber = 1}
        },
        watch: {
            pageNumber: function () {
                if (this.pageNumber < 1) this.pageNumber = 1
                const pages = Math.ceil(this.POINTS.length / this.numberOfRow)
                if (this.pageNumber > pages) this.pageNumber = pages
            }
        },
        computed: {
            ...mapGetters(['POINTS']),
            pages(){return Math.ceil(this.POINTS.length / this.numberOfRow)},
            paginatedPoints(){
                const from = (this.pageNumber - 1) * this.numberOfRow
                const to = from + this.numberOfRow
                return this.POINTS.slice(from, to)
            }
        },
        mounted(){this.GET_POINTS()}
    }
</script>