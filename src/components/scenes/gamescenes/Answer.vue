<template lang="pug">
.centering-container(:style="styleObject") A. {{ appState.currentQuiz.answer }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Answer extends mixins(AppStateMixin) {
    get styleObject() {
        return {
            'font-size': `${this.appState.config.quizAnswerFontSize}em`,
            'font-family': `'${this.appState.config.quizAnswerFont}', monospace`,
        }
    }
}
</script>

<style scoped lang="stylus">
.centering-container
    display: flex
    align-items: center
    justify-content: center
</style>
