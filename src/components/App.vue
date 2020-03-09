<template lang="pug">
#app
    Startup(v-if="appState.appPhase === 'startup'")
    Game(v-if="appState.appPhase === 'game'")
    Imprint(v-if="appState.appPhase === 'imprint'")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Startup from "./screens/Startup.vue"
import Game from "./screens/Game.vue"
import Imprint from "./screens/Imprint.vue"

@Component({
    components: { Startup, Game, Imprint },
})
export default class App extends Vue {
    created() {
        document.addEventListener("keydown", ev => {
            switch (ev.key) {
                case "Enter":
                    this.appState.goNextStep()
                    break
                case "Space":
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
}
</script>

<style scoped lang="stylus">
#app
    width 100vw
    height 100vh
    margin 0
    padding 0
    box-sizing border-box

    & > *
        width 100%
        height 100%
        margin 0
</style>
