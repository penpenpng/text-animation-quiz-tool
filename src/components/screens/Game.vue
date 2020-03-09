<template lang="pug">
div
    Number(v-if="appState.gamePhase === 'number'")
    Countdown(v-if="appState.gamePhase === 'countdown'")
    Quiz(v-if="appState.gamePhase === 'quiz' || appState.gamePhase === 'exposure'")
    Answer(v-if="appState.gamePhase === 'answer'")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import Number from "./game/Number.vue"
import Countdown from "./game/Countdown.vue"
import Quiz from "./game/Quiz.vue"
import Answer from "./game/Answer.vue"

@Component({
    components: { Number, Countdown, Quiz, Answer }
})
export default class Game extends Vue {}
</script>

<style scoped lang="stylus"></style>
