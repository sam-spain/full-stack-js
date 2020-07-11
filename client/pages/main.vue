<template>
    <div>
        <router-link to="/auth/register">Register</router-link>
        <router-link to="/auth/login">Login</router-link>
        <h1 class="text-center">The Main Component!</h1>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'MainComponent'
}
</script>
