<template>
    <form @submit="onSubmit">
        <div id="x">
            <label for="x" :class="{'invalid': invalidX}">X:</label>
            <div v-for="(value, index) in values" :key="index">
                <label>
                    <input type="checkbox" :id="'x'+index" :value="value" v-model.number="selectedX">
                    {{value}}
                </label>
            </div>
        </div>

        <div id="y">
            <label for="y0" :class="{'invalid': invalidY.value}">Y:</label>
            <input type="text" id="y0" maxlength="8" v-model="selectedY">
            <div v-if="invalidY.value" class="invalid">{{invalidY.errorText}}</div>
        </div>

        <div id="r">
            <label for="r" :class="{'invalid': invalidR}">R:</label>
            <div v-for="(value, index) in values" :key="index">
                <label>
                    <input type="radio" :id="'r'+index"  v-model.number="selectedR" :value="value">
                    {{value}}
                </label>
            </div>
        </div>

        <button type="submit">Submit</button>
    </form>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "point-form",
        data(){
            return {
                selectedX: [],
                selectedY: null,
                selectedR: null,
                values: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2],
                invalidX: false,
                invalidY: {value: false, errorText: ""},
                invalidR: false
            }
        },
        watch: {
            selectedX: function () {this.checkX()},
            selectedY: function () {this.checkY()},
            selectedR: function () {this.checkR(); this.UPDATE_R(this.selectedR)}
        },
        methods: {
            ...mapActions(['POST_POINTS', 'UPDATE_R']),
            checkX(){this.invalidX = this.selectedX.length < 1},
            checkR(){this.invalidR = this.values.indexOf(this.selectedR) === -1},
            checkY(){
                let y = (this.selectedY != null) ? this.selectedY.trim().replace(",", ".") : ""
                this.invalidY = {value: false, errorText: ""}

                if (y === "") {
                    this.invalidY.value = true
                } else if (!isFinite(y)) {
                    this.invalidY = {value: true, errorText: "Y must be a number"}
                } else if (y < -3 || y > 3) {
                    this.invalidY = {value: true, errorText: "Y must be in the range -3 ... 3"}
                }
            },
            checkForm(){
                this.checkX(); this.checkR(); this.checkY()
                return !(this.invalidR || this.invalidY.value || this.invalidX)
            },
            onSubmit(evt) {
                evt.preventDefault()

                if (this.checkForm()){
                    const points = []
                    for (let i = 0; i < this.selectedX.length; i++){
                        points.push({
                            x: +this.selectedX[i],
                            y: +this.selectedY.trim().replace(",", "."),
                            r: +this.selectedR
                        })
                    }
                    this.POST_POINTS(points)
                }
            }
        }
    }
</script>

<style scoped>

</style>