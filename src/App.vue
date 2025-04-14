<script setup>
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
h1 {
  text-align: center;
  margin-bottom: 15px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.signup-form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  max-width: 90%;
}

.register-button, .login-button, .add-button {
  text-align: center;
  width: 320px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: 1px solid skyblue;
  background: skyblue;
}

.register-input, .login-input, .add-input, .add-textarea {
  width: 300px;
  height: 40px;
  display: block;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.add-textarea {
  height: auto !important;
}

.btn-login {
  text-align: center;
}

.list-post {
  margin-top: 5px;
}

.signup-form label {
  display: block;
  margin-bottom: 5px;
}

.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"] {
  width: calc(100% - 12px);
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.signup-form button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
}

.login {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-bottom: 15px;
}

.login-button {
  text-align: center;
  width: 320px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: 1px solid skyblue;
  background: skyblue;
  color: white; /* Thêm màu chữ trắng cho dễ nhìn */
  cursor: pointer; /* Thêm con trỏ tay khi di chuột vào nút */
}

.login-input {
  width: 300px;
  height: 40px;
  display: block;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd; /* Thêm border cho input */
  border-radius: 3px; /* Thêm bo tròn góc cho input */
}

.btn-login {
  text-align: center;
  margin-top: 20px; /* Thêm khoảng cách giữa nút Login và liên kết Sign Up */
}

.btn-login a {
  color: blue; /* Thêm màu xanh dương cho liên kết */
  text-decoration: none; /* Loại bỏ gạch chân mặc định */
}

.btn-login a:hover {
  text-decoration: underline; /* Thêm gạch chân khi di chuột qua liên kết */
}
</style>