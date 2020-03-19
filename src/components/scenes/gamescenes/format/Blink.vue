<template lang="pug">
SearchLight(:disable="!formatOption.searchLight" :discovered="isExposureScene")
    div.chars: div(ref="statement" v-for="(c, i) in appState.currentQuiz.statement" :key="i")
        SpinAnimation.char(ref="statement" :class="{visible: visibilities[i]}" :spin="formatOption.spin" :immidiate="!!formatOption.spin") {{ c }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { GameFormatMixin } from "@/scripts/mixins"
import FadeTransition from "@/components/ui/FadeTransition.vue"
import SpinAnimation from "@/components/ui/SpinAnimation.vue"
import SearchLight from "@/components/ui/SearchLight.vue"
import { update } from "@/scripts/array-utils"
import { randomIndex } from "@/scripts/random-utils"

@Component({
    components: { SpinAnimation, SearchLight, FadeTransition }
})
export default class Blink extends mixins(GameFormatMixin) {
    readonly $refs!: {statement: SpinAnimation[]}

    private visibilities: boolean[] = []

    private created() {
        for (let _ of this.appState.currentQuiz.statement)
            this.visibilities.push(false)

        this.$on("click", () => {
            if (this.appState.gameScene === "quiz") {
                let i = randomIndex(this.visibilities.length)
                update(this.visibilities, i, !this.visibilities[i])
            }
        })

        this.$on("expose", () => {
            for (let i = 0; i < this.visibilities.length; i++)
                update(this.visibilities, i, true)
        })
    }
}
</script>

<style scoped lang="stylus">
.chars
    max-width 80%
    display flex
    flex-direction row
    flex-wrap wrap

.char
    transition color 1s

    &.visible
        color black
    &:not(.visible)
        color transparent
</style>
