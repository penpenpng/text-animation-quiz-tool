<template lang="pug">
.button(@click="onClick" :class="{disable, secondary}")
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Button extends Vue {
    @Prop(Boolean)
    readonly disable?: boolean

    @Prop(Boolean)
    readonly secondary?: boolean

onClick() {
        if (!this.disable) this.$emit("click")
    }
}
</script>

<style scoped lang="stylus">
.button
    display inline-block
    padding 0.5em 2em
    user-select none
    color white
    box-shadow 1px 1px 4px gray
    font-weight bold

    &.secondary
        &:not(.disable)
            color dodgerblue
            background-color white
        
        &.disable
            color white
            background-color darkgray

    &:not(.disable)
        border 0.5px solid dodgerblue
        cursor pointer
        background-color dodgerblue

        &:hover
            opacity 0.85
            transform translate(1px, 1px)
        &:active
            opacity 0.7
            transform translate(2px, 2px)
    
    &.disable
        background-color darkgray
</style>
