<template>
    <div>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input id="username" v-model="user.username" type="text"
                       oninput="this.value=this.value.replace(/\s/,'')" maxlength="20"/>

            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" v-model="user.password" type="password" maxlength="20"/>
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
                if (this.user.username === '') this.messages.push("Enter username")
                else if (this.user.username.length < 3) this.messages.push("Username must be at least 3 characters")
                if (this.user.password === ''){this.messages.push("Enter password")}
                else if (this.user.password.length < 6) this.messages.push("Password must be at least 6 characters")
                return this.messages.length === 0
            },
            handleLogin(){
                if (this.checkForm()) {
                    this.login(this.user).then(
                        () => {
                            this.$router.push('/main')
                        },
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
                        (response) => {alert(response.message)},
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