<template>
    <div>
      <div class="signup-form">
        <h1>Sign Up</h1>
        <input type="text" v-model="form.name" placeholder="Enter Name" />
        <p class="msg-error" v-if="errors.name">{{ errors.name }}</p>
  
        <input type="text" v-model="form.email" placeholder="Enter Mail" />
        <p class="msg-error" v-if="errors.email">{{ errors.email }}</p>
  
        <input type="password" v-model="form.password" placeholder="Enter Password" />
        <p class="msg-error" v-if="errors.password">{{ errors.password }}</p>
  
        <button @click="SignUp()" :disabled="loading">
          {{ loading ? 'Signing Up...' : 'Sign Up' }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import bcrypt from 'bcryptjs'; // Import bcrypt
  
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
        },
        errors: {},
        loading: false, // Thêm trạng thái loading
      };
    },
    methods: {
      async SignUp() {
        if (this.validateUser()) {
          this.loading = true; // Bắt đầu loading
  
          try {
            // Mã hóa mật khẩu
            const hashedPassword = await bcrypt.hash(this.form.password, 10);
  
            let userItem = {
              name: this.form.name,
              email: this.form.email,
              password: hashedPassword, // Lưu mật khẩu đã mã hóa
            };
  
            let result = await axios.post('http://localhost:3000/users', userItem);
  
            if (result.status === 201) {
              Swal.fire({
                title: 'Success!',
                text: 'Data Inserted',
                icon: 'success',
                timer: 2000,
              }).then(() => {
                this.$router.push({ name: 'Home' });
              });
            }
          } catch (error) {
            console.error('Error during signup:', error);
            let errorMessage = 'An error occurred during signup.';
            if (error.response && error.response.status === 409) {
              errorMessage = 'Email already exists.';
            } else if (error.code === 'ERR_NETWORK') {
                errorMessage = 'Network Error. Please check your internet connection.';
            }
            Swal.fire({
              title: 'Error!',
              text: errorMessage,
              icon: 'error',
            });
          } finally {
            this.loading = false; // Kết thúc loading
          }
        }
      },
      validateUser() {
        const errors = {};
  
        if (!this.form.name) {
          errors.name = 'Name is required!';
        }
  
        if (!this.form.password) {
          errors.password = 'Password is required!';
        } else if (this.form.password.length < 6) {
          errors.password = 'Password must be at least 6 characters.';
        }
  
        if (!this.form.email) {
          errors.email = 'Email is required!';
        } else if (!this.validEmail(this.form.email)) {
          errors.email = 'Valid Email is required!';
        }
  
        this.errors = errors;
  
        return Object.keys(errors).length === 0;
      },
      validEmail(email) {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(email);
      },
    },
  };
  </script>