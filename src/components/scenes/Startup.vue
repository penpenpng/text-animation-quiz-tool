<template lang="pug">
div
    h1#header TAQT: Text Animation Quiz Tool
    #body
        // --------------------------------------------------------------------
        .step-header
            span.step-number 1
            span.step-explanation 問題データを入力してください
        section.step
            #step1-options
                .option: Dropbox
                #or または
                .option: Button(@click="loadSamples") サンプル問題を読み込む
            Button(@click="showInspectorModal" :disable="appState.quizzes.length <= 0") 読み込んだ問題を確認する
        // --------------------------------------------------------------------
        .step-header
            span.step-number 2
            span.step-explanation [任意] 表示オプションを設定してください
        section.step
            Config
        // --------------------------------------------------------------------
        hr
        section.step
            Button#start-game-button(@click="startGame" :disable="!appState.canStartGame()") 出題画面へ
            HelpButton(@click="showHelpModal") 出題画面の操作方法
    #footer
        a(target="_blank" rel="noopener" :href="repositoryUrl" ) Github
        a(target="_blank" rel="noopener" href="https://twitter.com/penpen_png") Twitter
    
    Modal(ref="inspectorModal") inspector
    Modal(ref="helpModal") help
</template>

<script lang="ts">
import packageJson from "@/../package.json"
import { Component, Vue } from "vue-property-decorator"
import Dropbox from "./startup/Dropbox.vue"
import Config from "./startup/Config.vue"
import Button from "@/components/ui/Button.vue"
import HelpButton from "@/components/ui/HelpButton.vue"
import Modal from "@/components/ui/Modal.vue"

@Component({
    components: { Dropbox, Config, Button, HelpButton, Modal },
})
export default class Startup extends Vue {
    readonly repositoryUrl: string = packageJson.repository.url

    readonly $refs!: {
        inspectorModal: Modal,
        helpModal: Modal,
    }

    startGame() {
        this.appState.startGame()
    }

    loadSamples() {
        this.appState.loadSampleQuiz()
    }

    showInspectorModal() {
        this.$refs.inspectorModal.show()
    }

    showHelpModal() {
        this.$refs.helpModal.show()
    }
}
</script>

<style scoped lang="stylus">
#header
    margin 0
    padding 0.5em 1em
    font-size 1.5em
    background-color cornflowerblue
    color white
    box-shadow: 0 0 4px black

#body
    padding 2em

.step-header
    span.step-number
        font-size 2em

        &:after
            content ". "

    span.step-explanation
        font-size 1.5em

section.step
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-bottom 3em

#step1-options
    display flex
    flex-direction row
    justify-content center
    align-items stretch
    margin-bottom 2em

    .option
        display flex
        justify-content center
        align-items center
        padding 1em

    #or
        align-self center
        margin 3em

hr
    border-color ghostwhite
    margin 1em

#start-game-button
    margin-bottom 2em

#footer
    margin 0
    padding 1em
    background-color cornflowerblue
    color white
    box-shadow: 0 0 4px black
    text-align right

    a
        margin-left 1em

    a:visited
        color white
</style>
