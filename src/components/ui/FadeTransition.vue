<template lang="pug">
transition(name="fade"): slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class FadeTransition extends Vue {}
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active
    transition opacity .5s

.fade-enter, .fade-leave-to
    opacity 0
</style>
