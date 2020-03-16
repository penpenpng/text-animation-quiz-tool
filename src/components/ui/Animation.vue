<template lang="pug">
div(:class="{[name + '-isActive']: isActive}" @animationend="stopAnimation"): slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Animation extends Vue {
    @Prop({type: String, required: true})
    readonly name!: string

    isActive: boolean = false

    startAnimation() {
        this.isActive = false
        requestAnimationFrame(() => {
            this.isActive = true
        })
    }

    stopAnimation() {
        this.isActive = false
    }

    toggleAnimation() {
        if (this.isActive)
            this.stopAnimation()
        else
            this.startAnimation()
    }
}
</script>

<style scoped lang="stylus"></style>
