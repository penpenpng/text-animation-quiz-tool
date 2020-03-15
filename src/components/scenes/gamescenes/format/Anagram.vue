<template lang="pug">
div {{ appState.currentQuiz.statement }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Anagram extends mixins(AppStateMixin) {}
</script>

<style scoped lang="stylus"></style>
