<template>
    <div v-on:click="redirect">
    {{category.name}}
    </div>
</template>

<script>
    export default {
        props: {
            category: {
                type: Object,
            },
        },

        methods: {
            redirect() {
                this.$router.push(this.category.path);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>