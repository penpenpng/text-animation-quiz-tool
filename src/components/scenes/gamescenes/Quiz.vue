<template lang="pug">
div: div(:is="format()")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import Anagram from "./format/Anagram.vue"
import { capitalize } from "@/scripts/string-utils"

@Component({
    components: { Anagram }
})
export default class Quiz extends mixins(AppStateMixin) {
    format(): string {
        return capitalize(this.appState.currentQuiz.format)
    }
}
</script>

<style scoped lang="stylus"></style>
