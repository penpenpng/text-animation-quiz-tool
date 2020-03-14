<template lang="pug">
#app
    div(:is="scene()")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Startup from "./scenes/Startup.vue"
import Title from "./scenes/Title.vue"
import Game from "./scenes/Game.vue"
import Imprint from "./scenes/Imprint.vue"
import { capitalize } from "@/scripts/stringutils"

@Component({
    components: { Startup, Title, Game, Imprint},
})
export default class App extends Vue {
    created() {
        document.addEventListener("keydown", ev => {
            switch (ev.key) {
                case "Enter":
                    this.appState.goNextStep()
                    "".toUpperCase
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

    scene(): string {
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
