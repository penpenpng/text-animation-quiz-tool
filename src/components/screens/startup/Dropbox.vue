<template lang="pug">
.dropbox
    span.dropbox-label ここに CSV をドラッグアンドドロップ
    ul
        li: a(href="#") [ヘルプ] CSV のフォーマット
        li: a(href="#") [ヘルプ] CSV のサンプル
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Dropbox extends Vue {}
</script>

<style scoped lang="stylus">
.dropbox
    background-color aliceblue
    border solid 0.5px lightgray
    padding 2em
    
    span.dropbox-label
        color gray
        font-weight bold

    ul
        margin-bottom 0
</style>
