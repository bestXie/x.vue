<template>
    <div class="login-wrapper">
        <div class="ui-loading-block" v-if="loading">
            <div class="ui-loading-cnt"><i class="ui-loading-bright"></i>

                <p>加载中...</p></div>
        </div>

        <div class="header-wrapper am-animation-fade">
            <div class="welcome-box">WELCOME</div>
            <div class="avatar-box" v-if="showHeader">
                <div class="avatar">
                    <img  v-if="user.avatar" :src="user.avatar" class="acatar-img"  alt="" onerror="this.style.display='none'">
                </div>
            </div>
        </div>

        <div class="form-wrapper">
            <form class="form-box"  @submit.prevent="submitPrevent">
                <input type="hidden" name="isRemberPwd" id="isRemberPwdId" checked="true" />
                <div class="form-group ">
                    <label for="email" class="form-label icon-bg-email"></label>
                        <div class="form-input"><input type="text"  autocomplete="off" v-model="user.email" @focus="inputFocus"  @keyup.enter="submit"  maxlength="18"  placeholder="email" name="email" id="email" :disabled="user.disabled"></div>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label icon-bg-password"></label>
                    <div class="form-input"><input type="password"  autocomplete="off"  @focus="inputFocus" v-model="user.password"  @keyup.enter="submit"   placeholder="password" maxlength="18" name="password" class="password" id="password"></div>
                </div>

                <div class="btn-box">
                    <button type="submit" class="btn" @click="submit">登 录</button>
                </div>

                <div class="register-box" v-if="showRegister">
                    <div class="register" @click="register">首次登录</div>
                </div>
            </form>
        </div>

    </div>
</template>
<script>
    import index from './index.js'
    export default index
</script>