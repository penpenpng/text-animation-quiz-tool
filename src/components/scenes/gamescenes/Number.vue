<template lang="pug">
.centering-container(:style="styleObject") Q. {{ appState.quizIndex + 1 }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Number extends mixins(AppStateMixin) {
    get styleObject() {
        return {
            'font-size': `${this.appState.config.quizNumberFontSize}em`,
            'font-family': `'${this.appState.config.quizNumberFont}', monospace`,
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

