<!--header components-->
<template>
    <header class="am-topbar am-topbar-inverse admin-header" style="margin-bottom:0rem;">
        <div class="am-topbar-brand">
           <a href="/"><strong>开课</strong></a>  <small>致力于个人用户</small>
        </div>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

        <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
                <li><a href="javascript:;"><span class="am-icon-envelope-o"></span> 收件箱 <span class="am-badge am-badge-warning">5</span></a></li>
                <li class="am-dropdown" data-am-dropdown>
                    <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                        <span class="am-icon-users"></span> 管理员 <span class="am-icon-caret-down"></span>
                    </a>
                    <ul class="am-dropdown-content">
                        <li><a href="#"><span class="am-icon-user"></span> 资料</a></li>
                        <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
                        <li><a href="#"><span class="am-icon-power-off"></span> 退出</a></li>
                    </ul>
                </li>
                <li class="am-hide-sm-only"><a href="javascript:;" id="admin-fullscreen"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>
            </ul>
        </div>
    </header>
</template>
<!--<script>-->
    <!--import store from '../store/store'-->
    <!--module.exports = {-->
        <!--data: function () {-->
            <!--return {-->
                <!--static_path: store.state.static_path,-->
                <!--api_path: store.state.api_path,-->
                <!--carts_key: store.state.carts_key,-->
                <!--navs: [],-->
                <!--word: ''-->
            <!--}-->
        <!--},-->
        <!--computed: {-->
            <!--id: function () {-->
                <!--return store.state.user.id-->
            <!--},-->
            <!--name: function () {-->
                <!--return store.state.user.name-->
            <!--},-->
            <!--cart_count: function(){-->
                <!--return store.state.cart_count-->
            <!--}-->
        <!--},-->
        <!--ready: function () {-->
            <!--this.getNavs()-->
            <!--this.getCartCount()-->
        <!--},-->
        <!--methods: {-->
            <!--//获取首页导航数据-->
            <!--getNavs: function () {-->
                <!--this.$http.get(this.api_path + '/website/navs/index')-->
                        <!--.success(function (data, status) {-->
                            <!--if (status === 200) {-->
                                <!--this.navs = data-->
                            <!--}-->
                        <!--})-->
            <!--},-->
            <!--search: function () {-->
                <!--//this.$route.router.go('/search')-->
            <!--},-->
            <!--logout: function () {-->
                <!--localStorage.removeItem('id')-->
                <!--localStorage.removeItem('name')-->
                <!--localStorage.removeItem('access_token')-->

                <!--//修改登录状态-->
                <!--store.actions.user('', '')-->

                <!--let redirect = decodeURIComponent(this.$route.query.redirect || '/login');-->
                <!--this.$route.router.go(redirect);-->
            <!--},-->
            <!--//统计购物车数量-->
            <!--getCartCount: function () {-->
                <!--store.actions.getCartCount()-->
            <!--},-->
            <!--search: function () {-->
                <!--this.$route.router.go('/courses?w=' + this.word)-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->