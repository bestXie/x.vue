<template>
    <div class="register-wrapper am-animation-fade">
        <div class="ui-loading-block"  v-if="loading">
            <div class="ui-loading-cnt"><i class="ui-loading-bright"></i>
                <p>加载中...</p></div>
        </div>
        <div class="header-wrapper">
            <div class="back-box">
                <div class="back" @click="back">
                    <div class="back-icon">返回</div>
                </div>
            </div>
            <div class="avatar-box"  v-if="showHeader">
                <div class="avatar">
                    <img v-if="user.avatar" :src="user.avatar" class="acatar-img" onerror="this.style.display='none'">
                </div>
            </div>
            <div class="user-box">
                <div class="user-name" v-html="user.fullname"  v-if="user.fullname"></div>
                <div class="user-email"  v-html="user.email"  v-if="user.email"></div>
                <div class="user-mobile" v-html="user.mobile1"  v-if="user.mobile1"></div>
            </div>
        </div>

        <div class="form-wrapper">

            <form class="form-box"  @submit.prevent="submitPrevent">
                <div class="form-group ">
                    <label for="password" class="form-label icon-password-re"></label>
                    <div class="form-input"><input type="password"  autocomplete="off" v-model="user.password" @focus="inputFocus"  @keyup.enter="submit"  placeholder="输入密码" maxlength="18" name="password"
                                                   id="password"></div>
                </div>

                <div class="form-group">
                    <label for="pass_again" class="form-label icon-password-ret"></label>
                    <div class="form-input"><input type="password"  autocomplete="off"  v-model="user.password_again" @focus="inputFocus"  @keyup.enter="submit"  placeholder="确认密码" maxlength="18"
                                                   name="password_again" id="pass_again"></div>
                </div>

                <div class="btn-box">
                    <button type="submit" class="btn" @click="submit">账号初始化</button>
                </div>
            </form>
        </div>

    </div>
</template>
<script>
    import index from './index.js'
    export default index
</script>