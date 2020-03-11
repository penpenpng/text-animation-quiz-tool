<template lang="pug">
#config
    label(for="quiz-number-font") 問題番号のフォント
    input#quiz-number-font(v-model="appState.config.quizNumberFont")
    span.annotation 空欄の場合はブラウザのデフォルトフォント
    
    label(for="quiz-body-font") 問題本文のフォント
    input#quiz-body-font(v-model="appState.config.quizBodyFont")
    span.annotation 空欄の場合はブラウザのデフォルトフォント

    label(for="quiz-body-font-size") 問題本文のフォントサイズ
    input#quiz-body-font-size(type="number" step="0.1" v-model="appState.config.quizBodyFontSize")
    span.annotation デフォルトのフォントサイズを 1.0 とする相対値

    label(for="show-mouse-cursor") マウスカーソルを表示する
    input#show-mouse-cursor(type="checkbox" v-model="appState.config.showMouseCursor")
    span.annotation
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Config extends Vue {}
</script>

<style scoped lang="stylus">
#config
    display grid
    padding 1em
    grid-template-columns repeat(3, max-content)
    grid-row-gap 0.5em
    grid-column-gap 1em
    align-items center

label
    justify-self end

label:after
    content ": "

span.annotation
    color gray
    margin-left 1em
</style>
