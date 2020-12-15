<template>
    <div>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input id="username" v-model="user.username" type="text"
                       oninput="this.value=this.value.replace(/\s/,'')"/>

            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" v-model="user.password" type="password"/>
            </div>

            <div>
                <button @click="handleLogin">Sign in</button>
                <button @click="handleRegistration">Sign up</button>
            </div>
            <div v-for="message in messages" class="invalid">{{message}}</div>
        </form>
    </div>
</template>

<script>
    import User from '../auth/user'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
                user: new User('', ''),
                messages: []
            };
        },
        computed: {
            ...mapGetters(['isLoggedIn'])
        },
        created() {
            if (this.isLoggedIn) {
                this.$router.push('/main')
            }
        },
        methods: {
            ...mapActions(['login', 'register']),
            checkForm(){
                this.messages = []
                if (this.user.username === ''){this.messages.push("Enter username")}
                if (this.user.password === ''){this.messages.push("Enter password")}
                return this.messages.length
            },
            handleLogin(){
                    if (this.checkForm()) {
                        this.login(this.user).then(
                            () => {this.$router.push('/main')},
                            error => {
                                this.messages.push(
                                    (error.response && error.response.data && error.response.data.message) ||
                                    error.message ||
                                    error.toString()
                                )
                            }
                        )
                    }
            },
            handleRegistration(){
                if (this.checkForm()) {
                    this.register(this.user).then(
                        (response) => {alert(response)},
                        error => {
                            this.messages.push(
                                (error.response && error.response.data && error.response.data.message) ||
                                error.message ||
                                error.toString()
                            )
                        }
                    )
                }
            }
        }
    }
</script>

<style scoped>

</style>