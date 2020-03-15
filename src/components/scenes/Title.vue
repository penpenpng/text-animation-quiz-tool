<template lang="pug">
#title(:style="styleObject") {{ appState.config.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Title extends mixins(AppStateMixin) {
    get styleObject() {
        return {
            cursor: this.appState.config.showMouseCursor ? "default" : "none"
        }
    }
}
</script>

<style scoped lang="stylus">
#title
    height 100vh
    display: flex
    align-items: center
    justify-content: center
</style>
