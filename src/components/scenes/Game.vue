<template lang="pug">
#game: div(:is="gameScene")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Number from "./gamescenes/Number.vue"
import Countdown from "./gamescenes/Countdown.vue"
import Quiz from "./gamescenes/Quiz.vue"
import Answer from "./gamescenes/Answer.vue"
import { capitalize } from "@/scripts/string-utils"
import { ThrowDirtyStateError } from "@/scripts/errors"

@Component({
    components: { Number, Countdown, Quiz, Answer }
})
export default class Game extends mixins(AppStateMixin) {
    get gameScene(): string {
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
