<template lang="pug">
.centering-container(:style="styleObject") {{ count }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Countdown extends mixins(AppStateMixin) {
    count: number = 3
    interval?: number
    
    created() {
        this.interval = setInterval(() => {
            this.count--
            if (this.count <= 0 && this.interval) {
                clearInterval(this.interval)
                this.interval = undefined
                this.appState.goNextStep()
            }
        }, 1000)    
    }

    destroyed() {
        if (this.interval) {
            clearInterval(this.interval)
            this.interval = undefined
        }
    }

    private get styleObject() {
        return {
            'font-size': `${this.appState.config.quizNumberFontSize}em`,
            'font-family': `'${this.appState.config.quizNumberFont}', monospace`,
        }
    }
}
</script>

<style scoped lang="stylus">
.centering-container
    display: flex
    align-items: center
    justify-content: center
</style>

