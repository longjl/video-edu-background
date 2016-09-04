<template>
    <div class="app">
        <!--<c-header></c-header>-->
        <!-- main view -->
        <router-view
                keep-alive
                transition="fade"
                transition-mode="out-in">
        </router-view>
        <!--<c-footer></c-footer>-->

    </div>
</template>
<!--
<script>
    import store from './store/store'
    module.exports = {
        components: {
            'c-header': require('./components/c-header.vue'),
            'c-footer': require('./components/c-footer.vue')
        }
    }
</script>-->
