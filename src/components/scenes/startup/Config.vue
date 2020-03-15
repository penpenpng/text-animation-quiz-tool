<template lang="pug">
#config
    h2.header 一般
    
    label(for="title") タイトル
    input#title(v-model="appState.config.title")

    label(for="show-mouse-cursor") マウスカーソルを表示する
    input#show-mouse-cursor(type="checkbox" v-model="appState.config.showMouseCursor")

    h2.header フォント #[span.annotation 空欄の場合はブラウザのデフォルト等幅フォント]
    
    label(for="quiz-title-font") タイトル
    input#quiz-title-font(v-model="appState.config.titleFont")

    label(for="quiz-number-font") 問題番号
    input#quiz-number-font(v-model="appState.config.quizNumberFont")
    
    label(for="quiz-body-font") 問題本文
    input#quiz-body-font(v-model="appState.config.quizBodyFont")

    label(for="quiz-answer-font") 答え
    input#quiz-answer-font(v-model="appState.config.quizAnswerFont")

    h2.header フォントサイズ #[span.annotation この説明文のフォントサイズを 1.0 とする相対値]

    label(for="quiz-title-font-size") タイトル
    input#quiz-title-font-size(type="number" step="0.1" v-model="appState.config.titleFontSize")

    label(for="quiz-number-font-size") 問題番号
    input#quiz-body-number-size(type="number" step="0.1" v-model="appState.config.quizNumberFontSize")

    label(for="quiz-body-font-size") 問題本文
    input#quiz-body-font-size(type="number" step="0.1" v-model="appState.config.quizBodyFontSize")

    label(for="quiz-answer-font-size") 答え
    input#quiz-answer-font-size(type="number" step="0.1" v-model="appState.config.quizAnswerFontSize")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Config extends mixins(AppStateMixin) {}
</script>

<style scoped lang="stylus">
#config
    padding 1em
    display grid
    grid-template-columns repeat(2, auto)
    grid-row-gap 0.5em
    grid-column-gap 1em
    align-items center
    overflow-y scroll
    max-height 60vh

    label
        justify-self end

    label:after
        content ": "
    
    h2.header
        display inline-block
        margin 0
        font-size 1.2rem
        grid-column 1 / span 2

        &:not(:first-child)
            margin-top 0.5em
    
        .annotation
            font-size 1rem
            font-weight normal
            color gray
</style>
