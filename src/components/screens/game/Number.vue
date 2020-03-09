<template lang="pug">
div Q. {{ appState.quizIndex + 1 }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Number extends Vue {}
</script>

<style scoped lang="stylus"></style>
