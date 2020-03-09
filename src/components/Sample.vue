<template lang="pug">
div
    div
        | data:
        | {{ appState }}
    input(v-model="appState.config.quizBodyFont")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Sample extends Vue {}
</script>

<style scoped lang="stylus"></style>
