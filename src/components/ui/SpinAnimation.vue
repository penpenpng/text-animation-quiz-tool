<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import Animation from "@/components/ui/Animation.vue"
import { randomChoice } from "@/scripts/random-utils"
import { ThrowNotImplementedError } from "@/scripts/errors"

@Component({
    components: { Animation }
})
export default class SpinAnimation extends Animation {
    @Prop()
    readonly spin?: SpinParameters

    protected get styleVariables() {
        return {
            "--sec-per-round": (() => {
                if (!this.spin) return "2s"

                const s = this.spin.secPerRound
                const e = this.spin.secPerRoundEpsilon
                const t = s - e + Math.random() * 2 * e

                return `${t}s`
            })(),
            "--direction": (() => {
                if (!this.spin) return "normal"

                switch (this.spin.direction) {
                    case "right": return "normal"
                    case "left": return "reverse"
                    case "random": return randomChoice(["normal", "reverse"])
                    default: ThrowNotImplementedError()
                }
            })(),
            "--ease-function": (() => {
                if (!this.spin) return "linear"

                return this.spin.easeFunction
            })(),
        }
    }
}
</script>

<style scoped lang="stylus">
.v-active
    animation spin var(--ease-function) var(--sec-per-round) infinite var(--direction)

@keyframes spin {
    from {
        transform rotate(0deg)
    }
    to {
        transform rotate(360deg)
    }
}
</style>
