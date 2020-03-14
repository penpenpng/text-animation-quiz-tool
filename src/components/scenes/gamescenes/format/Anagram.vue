<template lang="pug">
div {{ appState.getCurrentQuiz().statement }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Anagram extends Vue {}
</script>

<style scoped lang="stylus"></style>
