<template lang="pug">
#startup
    h1 Text VQ Presenter
    h2 1. 問題読み込み
    section
        #step1-block
            #dropbox
                Dropbox
                ul
                    li: a(href="#") [ヘルプ] CSV のフォーマット
                    li: a(href="#") [ヘルプ] CSV のサンプル
            #or または
            Button(@click="loadSamples") サンプル問題を読み込む
        Button 読み込んだ問題を確認する
    h2 2. 表示の設定
    section
        Config
    hr
    section
        Button(@click="startGame" :disable="!appState.canStartGame()") クイズを始める
        a(href="#") [ヘルプ] 出題画面の操作方法
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Dropbox from "./startup/Dropbox.vue"
import Config from "./startup/Config.vue"
import Button from "@/components/ui/Button.vue"

@Component({
    components: { Dropbox, Config, Button },
})
export default class Startup extends Vue {
    startGame() {
        console.log("start game")
        this.appState.startGame()
    }

    loadSamples() {
        console.log("load samples")
        this.appState.loadSampleQuiz()
    }
}
</script>

<style scoped lang="stylus">
#startup
    padding 2em
    padding-top 1em
</style>
