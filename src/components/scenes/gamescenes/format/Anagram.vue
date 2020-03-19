<template lang="pug">
SearchLight(:disable="!formatOption.searchLight" :discovered="isExposureScene")
    transition-group.chars(name="anagram" tag="div")
        div(v-for="i in charIndice" :key="i")
            SpinAnimation(ref="statement" :spin="formatOption.spin" :immidiate="!!formatOption.spin") {{ statement[i] }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { GameFormatMixin } from "@/scripts/mixins"
import SpinAnimation from "@/components/ui/SpinAnimation.vue"
import SearchLight from "@/components/ui/SearchLight.vue"
import { iota, update } from "@/scripts/array-utils"
import { randomIndex, fisherYateShuffleInPlace } from "@/scripts/random-utils"

@Component({
    components: { SpinAnimation, SearchLight }
})
export default class Anagram extends mixins(GameFormatMixin) {
    private statement: string = ""
    private charIndice: number[] = []
    private wrongIndice: [number, number][] = []  // [right possiton, current position]

    readonly $refs!: {statement: SpinAnimation[]}

    private created() {
        this.statement = this.appState.currentQuiz.statement
        this.charIndice = (() => {
            const indices: number[] = iota(this.statement.length)
            fisherYateShuffleInPlace(indices)
            return indices
        })()

        this.$on("click", () => {
            this.swap()
        })

        this.$on("expose", () => {
            console.log(this.$refs)
            this.charIndice = iota(this.statement.length)
            for (let c of this.$refs.statement)
                c.requestStopAnimationOnNextIteration()
        })
    }

    private swap() {
        if (this.wrongIndice.length <= 0) return

        const i = randomIndex(this.wrongIndice.length)
        const [right, wrong] = this.wrongIndice[i]

        const e = this.charIndice[wrong]
        update(this.charIndice, wrong, this.charIndice[right])
        update(this.charIndice, right, e)
    }

    @Watch("charIndice")
    private updateWrongIndice() {
        const wrongIndice: [number, number][] = []
        for (let i = 0; i < this.charIndice.length; i++)
            if (this.charIndice[i] !== i)
                wrongIndice.push([this.charIndice[i], i])
        
        this.wrongIndice = wrongIndice

        if (this.wrongIndice.length <= 0)
            this.expose()
    }
}
</script>

<style scoped lang="stylus">
.chars
    max-width 80%
    display flex
    flex-direction row
    flex-wrap wrap

.anagram-move
    transition transform 1s linear
</style>
