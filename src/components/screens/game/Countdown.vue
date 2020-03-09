<template lang="pug">
div count: {{ count }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

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

<style scoped lang="stylus"></style>
