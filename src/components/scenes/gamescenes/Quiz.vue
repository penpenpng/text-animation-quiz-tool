<template lang="pug">
#quiz(@click.stop="onClick"): div(:is="format" ref="quizDisplay")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Anagram from "./format/Anagram.vue"
import { capitalize } from "@/scripts/string-utils"

@Component({
    components: { Anagram }
})
export default class Quiz extends mixins(AppStateMixin) {
    readonly $refs!: {
        quizDisplay: Vue,
    }

    get format(): string {
        return capitalize(this.appState.currentQuiz.format)
    }

    @Watch("appState.gameScene")
    onChangeGameScene(scene: GameScene) {
        if (scene === "exposure")
            this.$refs.quizDisplay.$emit("expose")
    }

    onClick() {
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
