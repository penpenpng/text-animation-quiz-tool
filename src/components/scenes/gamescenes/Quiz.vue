<template lang="pug">
div
    Anagram(v-if="appState.getCurrentQuiz().format === 'anagram'")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Anagram from "./format/Anagram.vue"

@Component({
    components: { Anagram }
})
export default class Quiz extends Vue {}
</script>

<style scoped lang="stylus"></style>
