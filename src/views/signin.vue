<template>
        <div class="center-block w-xxl w-auto-xs p-y-md">
            <div class="navbar">
                <div class="pull-center">
                    <!-- brand -->
                    <a class="navbar-brand">
                        <img src="/assets/images/logo.png" alt="." class="show">
                        <!--<span class="hidden-folded inline">edu</span>-->
                    </a>
                    <!-- / brand -->
                </div>
            </div>
            <div class="p-a-md box-color r box-shadow-z1 text-color m-a">
                <div class="m-b text-sm">
                    Sign in with your Flatkit Account
                </div>
                <form name="form">
                    <div class="md-form-group">
                        <input type="email" class="md-input" v-model="user.email" value="demo@test.com" required>
                        <label>Email</label>
                    </div>
                    <div class="md-form-group">
                        <input type="password" class="md-input" v-model="user.password" value="123456" required>
                        <label>Password</label>
                    </div>
                    <div class="m-b-md">
                        <label class="md-check">
                            <input type="checkbox"><i class="primary"></i> Keep me signed in
                        </label>
                    </div>
                    <button type="submit" class="btn primary btn-block p-x-md" v-link="{name:'Dashboard'}" >Sign in</button>
                </form>
            </div>

            <div class="p-v-lg text-center">
                <div class="m-b"><a  href="#/access/forgot-password"
                                    class="text-primary _600">Forgot password?</a></div>
                <div>Do not have an account? <a  v-link="{name:'Dashboard'}"
                                                class="text-primary _600">Sign up</a></div>
            </div>
        </div>
</template>