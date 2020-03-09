<template lang="pug">
div A. {{ appState.getCurrentQuiz().answer }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Answer extends Vue {}
</script>

<style scoped lang="stylus"></style>
