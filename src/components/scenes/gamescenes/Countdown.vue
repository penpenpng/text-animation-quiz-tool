<template lang="pug">
.centering-container {{ count }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Countdown extends mixins(AppStateMixin) {
    count: number = 3
    
    created() {
        const t = setInterval(() => {
            this.count--
            if (this.count <= 0) {
                clearInterval(t)
                this.appState.goNextStep()
            }
        }, 1000)    
    }
}
</script>

<style scoped lang="stylus">
.centering-container
    display: flex
    align-items: center
    justify-content: center
</style>

