<template>
    <div class="login-wrapper">


        <div class="header-wrapper am-animation-fade">
            <div class="welcome-box">WELCOME(2)</div>
            <div class="avatar-box">
                <div class="avatar">
                    <img  src="../../app_img/user.png" class="acatar-img"  alt="" >
                </div>
            </div>

        </div>

        <div class="form-wrapper">
            <div class="form-box" >
                <input type="hidden" name="isRemberPwd" id="isRemberPwdId" checked="true" />
                <div class="form-group ">
                    <label for="email" class="form-label icon-bg-email"></label>
                        <div class="form-input"><input type="text"  autocomplete="off"  maxlength="18"  placeholder="email" name="email" id="email" ></div>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label icon-bg-password"></label>
                    <div class="form-input"><input type="password"  autocomplete="off"   placeholder="password" maxlength="18" name="password" class="password" id="password"></div>
                </div>

                <div class="btn-box">
                    <button type="buttom" class="btn" @click="testClick">测试跳转</button>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import index from './index.js'
    export default index
</script>
<style lang="less" scoped>
    @import './index.less';
</style>