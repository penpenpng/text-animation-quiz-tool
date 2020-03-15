<template lang="pug">
#app: div(:is="scene")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Startup from "./scenes/Startup.vue"
import Title from "./scenes/Title.vue"
import Game from "./scenes/Game.vue"
import Imprint from "./scenes/Imprint.vue"
import { capitalize } from "@/scripts/string-utils"

@Component({
    components: { Startup, Title, Game, Imprint},
})
export default class App extends mixins(AppStateMixin) {
    created() {
        document.addEventListener("keydown", ev => {
            if (this.appState.appScene === "startup")
                return

            switch (ev.key) {
                case "Enter":
                    this.appState.goNextStep()
                    break
                case " ":
                    if (ev.shiftKey)
                        this.appState.goPrevQuiz()
                    else
                        this.appState.goNextQuiz()
                    break
                case "Escape":
                    this.appState.exitGame()
                    break
                default: break
            }
        })
    }

    get scene(): string {
        return capitalize(this.appState.appScene)
    }
}
</script>

<style scoped lang="stylus">
#app
    margin 0
    padding 0
    box-sizing border-box

    & > *
        margin 0
</style>
