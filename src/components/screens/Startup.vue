<template lang="pug">
div
    | startup
    button(@click="startGame") start
    button(@click="loadSamples") load
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Startup extends Vue {
    startGame() {
        this.appState.startGame()
    }

    loadSamples() {
        this.appState.loadSampleQuiz()
    }
}
</script>

<style scoped lang="stylus"></style>
