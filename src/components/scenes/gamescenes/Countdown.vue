<template lang="pug">
.centering-container {{ count }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Countdown extends Vue {
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

