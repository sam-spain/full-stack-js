<template>
    <div>
        <div class="h-2 w-full bg-blue-400"></div>
        <div class="w-full h-12 flex items-center justify-between px-6">
            <div class="text-blue-400">MEVN</div>
            <div>
                <router-link class="no-underline text-blue-700" to="/auth/login"
                    >Sign In</router-link
                >
                <router-link
                    class="no-underline text-blue-700 border-2 p-1 rounded-full border-blue-400 ml-3"
                    to="/auth/register"
                    >Join Now</router-link
                >
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'MainComponent'
}
</script>
