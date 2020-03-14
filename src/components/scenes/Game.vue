<template lang="pug">
#game
    div(:is="scene()")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Number from "./gamescenes/Number.vue"
import Countdown from "./gamescenes/Countdown.vue"
import Quiz from "./gamescenes/Quiz.vue"
import Answer from "./gamescenes/Answer.vue"
import { capitalize } from "@/scripts/stringutils"
import { ThrowDirtyStateError } from "@/scripts/errors"

@Component({
    components: { Number, Countdown, Quiz, Answer }
})
export default class Game extends Vue {
    scene() {
        if (this.appState.gameScene === null)
            ThrowDirtyStateError()

        if (this.appState.gameScene === "exposure")
            return "Quiz"

        return capitalize(this.appState.gameScene)
    }
}
</script>

<style scoped lang="stylus">
#game
    height 100vh

    & > *
        width 100%
        height 100%
        margin 0
</style>
