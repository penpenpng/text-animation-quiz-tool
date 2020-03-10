<template lang="pug">
#app
    Startup(v-if="appState.appPhase === 'startup'")
    Game.fixed(v-if="appState.appPhase === 'game'")
    Imprint.fixed(v-if="appState.appPhase === 'imprint'")
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
}
</script>

<style scoped lang="stylus">
#app
    margin 0
    padding 0
    box-sizing border-box

    & > *
        margin 0

    & > .fixed
        height 100vh
</style>
