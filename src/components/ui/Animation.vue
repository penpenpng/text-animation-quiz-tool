<template lang="pug">
div(
    :style="styleVariables"
    :class="{[name + '-active']: isActive}"
    @animationend="stopAnimation"
    @animationiteration="onIteration"): slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Animation extends Vue {
    @Prop({type: String, default: "v"})
    readonly name!: string

    @Prop(Boolean)
    readonly immidiate?: boolean

    private isActive: boolean = false
    private requestedStop: boolean = false

    private created() {
        if (this.immidiate)
            this.startAnimation()
    }

    startAnimation(forceRestart?: boolean) {
        if (this.isActive && !forceRestart)
            return

        this.isActive = false
        this.requestedStop = false
        requestAnimationFrame(() => {
            this.isActive = true
        })
    }

    stopAnimation() {
        this.isActive = false
        this.requestedStop = false
    }

    requestStopAnimationOnNextIteration() {
        this.requestedStop = true
    }

    toggleAnimation() {
        if (this.isActive)
            this.stopAnimation()
        else
            this.startAnimation()
    }

    // only used in subclasses
    protected get styleVariables(): object {
        return {}
    }

    private onIteration() {
        if (this.requestedStop)
            this.stopAnimation()
    }
}
</script>

<style scoped lang="stylus"></style>
