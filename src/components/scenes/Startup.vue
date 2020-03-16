<template lang="pug">
#startup
    h1#header TAQT: Text Animation Quiz Tool
    #body
        #loader
            .option: Dropbox
            #or または
            .option: Button(@click="loadSamples") サンプル問題を読み込む
        FadeTransition: #after-loaded(v-show="appState.canStartGame")
            Button(@click="$refs.inspectorModal.show()" secondary) 読み込んだ問題を確認する
            Button(@click="$refs.configModal.show()" secondary) 表示設定を変更する
            Button(@click="startGame") 出題画面へ
            HelpButton.help(@click="$refs.helpModal.show()") 出題画面の操作方法
    #footer
        a(target="_blank" rel="noopener" :href="repositoryUrl" ) Github
        a(target="_blank" rel="noopener" href="https://twitter.com/penpen_png") Twitter
    
    Modal(ref="inspectorModal" title="TITLE") inspector
    Modal(ref="helpModal" title="TITLE") help
    Modal(ref="configModal" title="Config"): Config
</template>

<script lang="ts">
import packageJson from "@/../package.json"
import { Component, Vue, Watch } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Dropbox from "./startup/Dropbox.vue"
import Config from "./startup/Config.vue"
import Button from "@/components/ui/Button.vue"
import HelpButton from "@/components/ui/HelpButton.vue"
import Modal from "@/components/ui/Modal.vue"
import FadeTransition from "@/components/ui/FadeTransition.vue"

@Component({
    components: { Dropbox, Config, Button, HelpButton, Modal, FadeTransition },
})
export default class Startup extends mixins(AppStateMixin) {
    private readonly repositoryUrl: string = packageJson.repository.url
    readonly $refs!: {
        inspectorModal: Modal,
        helpModal: Modal,
        configModal: Modal,
    }
    
    private quizIsLoaded: boolean = false

    private startGame() {
        this.appState.startGame()
    }

    private loadSamples() {
        this.appState.loadSampleQuiz()
    }
}
</script>

<style scoped lang="stylus">
#startup
    min-height 100vh
    display flex
    flex-direction column
    align-items stretch

#header
    margin 0
    padding 0.5em 1em
    font-size 1.5em
    background-color cornflowerblue
    color white
    box-shadow: 0 0 4px black

#body
    display flex
    justify-content center
    flex-direction column
    align-items center
    padding 2em
    flex-grow 1

    #loader
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
    
    #after-loaded
        border-top 0.5px solid
        padding-top 2em
        display grid
        grid-template-columns repeat(3, max-content)
        grid-row-gap 0.5em
        grid-column-gap 1.5em
        align-items center
        justify-items center

        .help
            grid-row 2
            grid-column 3

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
