<template lang="pug">
.dropbox
    .dropbox-label ここに CSV をドラッグアンドドロップ
    .help #[i.far.fa-question-circle] CSV のフォーマット
    .help #[i.far.fa-question-circle] CSV のサンプル
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Dropbox extends Vue {}
</script>

<style scoped lang="stylus" src="@/assets/styles/common.stylus"></style>
<style scoped lang="stylus">
.dropbox
    background-color aliceblue
    border solid 0.5px lightgray
    padding 2em
    
    .dropbox-label
        color gray
        font-weight bold
        margin-bottom 0.5em
</style>
