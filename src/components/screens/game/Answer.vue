<template lang="pug">
.centering-container A. {{ appState.getCurrentQuiz().answer }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Answer extends Vue {}
</script>

<style scoped lang="stylus" src="@/assets/styles/common.stylus"></style>
