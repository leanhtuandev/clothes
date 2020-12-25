<template>
  <div id="register">
        <div class="container">
            <div class="row register-form">
                <div>
                    <h2>Register</h2>
                    <p>Register</p>
                </div>
                <div class="col-md-6 img-register">
                    <img src="../components/public/img/register-logo.svg" alt="">
                </div>
                <form action="post" class="col-md-6 form-register">
                    <input type="email" placeholder="User name">
                    <input type="password" placeholder="Password">
                    <input type="password" placeholder="Re password">
                    <div class="submit">
                        <button>Register</button>
                    </div>
                    <div class="register-content">
                        <router-link to="/Login"><button>Login</button></router-link>
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

<style scoped>
#register {
    padding-top: 150px;
    text-align: center;
}
.register-form {
        border: 1px solid #00000045;
        border-radius: 15px;
        box-shadow: 2px 2px 4px 4px #00000045;
}
.register-form div{
    position: relative;
    padding: 30px 0;
}
.register-form p {
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
.img-register img {
    width: 400px;
    height: auto;
}
.form-register input {
    width: 60%;
    margin: 10px 10%;
    font-size: 18px;
    padding: 10px 10px;
    border-radius: 3px;
    border: 1px solid #4a4a4aa1;
}
.form-register input:hover,
.form-register input:focus,
.form-register input:active {
    border-radius: 3px;
    border: 1px solid #4a4a4aa1;
}
.form-register {
    padding-top: 50px;
}
.register-content button {
        padding: 10px 25px;
        font-size: 16px;
        text-transform: uppercase;
        border: 0;
        color: white;
        background-color: #35c10e;
        border-radius: 3px;
        width: 60%;
}
@media screen and (max-width: 576px) {
    .img-register img {
        width: 200px;
    }
    .register-form h2 {
        font-size: 50px;
    }
}
</style>
