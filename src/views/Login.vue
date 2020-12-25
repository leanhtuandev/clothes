<template>
    <div id="login">
        <div class="container">
            <div class="row login-form">
                <div>
                    <h2>LOGIN</h2>
                    <p>Login</p>
                </div>
                <div class="col-md-6 img-login">
                    <img src="../components/public/img/banner-login.svg" alt="">
                </div>
                <form action="post" class="col-md-6 form-login">
                    <input type="email" placeholder="User name">
                    <input type="password" placeholder="Password">
                    <div class="submit">
                        <button>login</button>
                    </div>
                    <div class="login-content">
                        <router-link to="/"><span>Quay lại trang chủ</span></router-link>
                        <router-link to="/Register"><button>Register</button></router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#login {
    padding-top: 150px;
    text-align: center;
}
.login-form {
    border: 1px solid #00000045;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 4px #00000045;
}
.login-form div{
    position: relative;
    padding: 30px 0;
}
.login-form p {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    position: absolute;
    top: 70px;
    font-size: 32px;
    font-weight: bold;
    color: #ff4700;
}
.img-login img {
    width: 400px;
    height: auto;
}
.form-login input {
    width: 60%;
    margin: 10px 10%;
    font-size: 18px;
    padding: 10px 10px;
    border-radius: 3px;
    border: 1px solid #4a4a4aa1;
}
.form-login input:hover,
.form-login input:focus,
.form-login input:active {
    border-radius: 3px;
    border: 1px solid #4a4a4aa1;
}
.form-login {
    padding-top: 50px;
}
.submit {
    text-align: center;
}
.submit button {
        padding: 10px 45px;
        font-size: 16px;
        text-transform: uppercase;
        border: 0;
        color: white;
        background-color: #ff4700;
        width: 60%;
        border-radius: 3px;
}

.submit button:hover {
    background-color: green;
}

.login-content {
    width: 60%;
    margin: 0 auto;
}
.login-content span {
    font-size: 18px;
    padding-right: 30px;
}

.login-content button {
        padding: 10px 25px;
        font-size: 16px;
        text-transform: uppercase;
        border: 0;
        color: white;
        background-color: #35c10e;
        border-radius: 3px;
}
@media screen and (max-width: 576px) {
    .login-content span:first-child {
        padding: 0 20px;
        font-size: 12px;
    }
    .img-login img {
        width: 200px;
    }
    .login-form h2 {
        font-size: 50px;
    }
}
</style>
