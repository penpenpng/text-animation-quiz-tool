<template lang="pug">
#quiz(@click.stop="onClick"): div(ref="quizDisplay" :is="format" :style="styleObject")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Anagram from "./format/Anagram.vue"
import Blink from "./format/Blink.vue"
import { capitalize } from "@/scripts/string-utils"

@Component({
    components: { Anagram, Blink }
})
export default class Quiz extends mixins(AppStateMixin) {
    readonly $refs!: {
        quizDisplay: Vue,
    }

    private get format(): string {
        return capitalize(this.appState.currentQuiz.format)
    }

    private get styleObject() {
        return {
            'font-size': `${this.appState.config.quizBodyFontSize}em`,
            'font-family': `'${this.appState.config.quizBodyFont}', monospace`,
        }
    }

    @Watch("appState.gameScene")
    private onChangeGameScene(scene: GameScene) {
        if (scene === "exposure")
            this.$refs.quizDisplay.$emit("expose")
    }

    private onClick() {
        this.$refs.quizDisplay.$emit("click")
    }
}
</script>

<style scoped lang="stylus">
#quiz > div
    margin 0
    width 100%
    height 100%
    
    display: flex
    align-items: center
    justify-content: center
    
    user-select none
</style>
