<template lang="pug">
div: transition-group.chars(name="anagram" tag="div")
    Animation(v-for="i in charIndice" :key="i" name="spin" :ref="i") {{ statement[i] }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import Animation from "@/components/ui/Animation.vue"
import { GameFormatMixin } from "@/scripts/mixins"
import { iota, update } from "@/scripts/array-utils"
import { randomIndex, fisherYateShuffleInPlace } from "@/scripts/random-utils"

@Component({
    components: { Animation }
})
export default class Anagram extends mixins(GameFormatMixin) {
    private statement: string = ""
    private charIndice: number[] = []
    private wrongIndice: [number, number][] = []  // [right possiton, current position]

    created() {
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
            this.charIndice = iota(this.statement.length)
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

.spin-active
    animation spin 2s infinite

@keyframes spin {
    from {
        transform rotate(0deg)
    }
    to {
        transform rotate(360deg)
    }
}
</style>
