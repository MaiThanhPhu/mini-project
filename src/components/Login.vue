<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" v-model="form.email" class="login-input" placeholder="Enter Email">
        <input type="password" v-model="form.password" class="login-input" placeholder="Enter Password">
        <p class="msg-error">{{ msgError }}</p>

        <button class="login-button" style="margin-top: 50px;" @click="Login">Login</button>
        <p class="btn-login" > 
                <router-link to = "/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            form:{
                email: '',
                password: ''
            },
            msgError: ''
        }
        
    },
    methods: {
        async Login(){
            let data=[]
            let result = await axios.get("http://localhost:3000/users");
            if (result.status ==200 && result.data.length>0){
                data = result.data.filter(item =>item.email == this.form.email && item.password==this.form.password);
                console.log(data);
                if(data.length>0){
                    localStorage.setItem('userLogin', JSON.stringify(data));
                    this.$router.push({
                        name: 'Home'
                    })
               } else{
                    this.msgError='Email and pasword is invalid';
               }
            }
            
        }
    }
}
</script>
