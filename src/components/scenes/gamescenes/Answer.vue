<template lang="pug">
.centering-container
    div A. {{ appState.getCurrentQuiz().answer }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Answer extends Vue {}
</script>

<style scoped lang="stylus">
.centering-container
    display: flex
    align-items: center
    justify-content: center
</style>
