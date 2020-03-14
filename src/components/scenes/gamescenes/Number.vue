<template lang="pug">
.centering-container
    div Q. {{ appState.quizIndex + 1 }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Number extends Vue {}
</script>

<style scoped lang="stylus">
.centering-container
    display: flex
    align-items: center
    justify-content: center
</style>

