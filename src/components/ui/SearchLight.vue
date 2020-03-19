<template lang="pug">
.search-light(
    :style="styleObject"
    @contextmenu.stop.prevent
    @mousemove="onMouseMove"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"): slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class SearchLight extends Vue {
    private x: number = 0
    private y: number = 0
    private r: number = 0
    private rightClicked: boolean = false
    private timer?: number

    @Prop(Boolean)
    readonly disable?: boolean

    @Prop(Boolean)
    readonly discovered?: boolean

    private created() {
        this.timer = setInterval(() => {
            if (this.disable) return
            
            if (this.discovered && this.r < 10000)
                this.r += 30
            if (!this.discovered && this.rightClicked)
                this.r += 3
        }, 10)
    }

    private destroyed() {
        clearInterval(this.timer)
    }

    private get styleObject() {
        if (this.disable) return { background: "transparent" }
        return {
            background: `radial-gradient(circle ${this.r}px at ${this.x}px ${this.y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%)`,
        }
    }

    private onMouseDown(e: MouseEvent) {
        if (e.button === 2)
            this.rightClicked = true
    }

    private onMouseUp(e: MouseEvent) {
        if (e.button === 2)
            this.rightClicked = false
    }

    private onMouseMove(e: MouseEvent) {
        if (!this.discovered) {
            this.x = e.x
            this.y = e.y
        }
    }
}
</script>

<style scoped lang="stylus"></style>
