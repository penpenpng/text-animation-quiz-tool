<template lang="pug">
div
    Anagram(v-if="appState.currentQuiz.format === 'anagram'")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Anagram from "./format/Anagram.vue"

@Component({
    components: { Anagram }
})
export default class Quiz extends mixins(AppStateMixin) {}
</script>

<style scoped lang="stylus"></style>
