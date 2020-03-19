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
    x: number = 0
    y: number = 0
    r: number = 0
    rightClicked: boolean = false
    timer?: number

    @Prop(Boolean)
    readonly disable?: boolean

    @Prop(Boolean)
    readonly discovered?: boolean

    created() {
        this.timer = setInterval(() => {
            if (this.disable) return
            
            if (this.discovered && this.r < 10000)
                this.r += 30
            if (!this.discovered && this.rightClicked)
                this.r += 1
        }, 10)
    }

    destroyed() {
        clearInterval(this.timer)
    }

    get styleObject() {
        if (this.disable) return { background: "transparent" }
        return {
            background: `radial-gradient(circle ${this.r}px at ${this.x}px ${this.y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%)`,
        }
    }

    onMouseDown(e: MouseEvent) {
        if (e.button === 2)
            this.rightClicked = true
    }

    onMouseUp(e: MouseEvent) {
        if (e.button === 2)
            this.rightClicked = false
    }

    onMouseMove(e: MouseEvent) {
        if (!this.discovered) {
            this.x = e.x
            this.y = e.y
        }
    }
}
</script>

<style scoped lang="stylus"></style>
