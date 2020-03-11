<template lang="pug">
.background(v-if="isVisible" @click.self.stop="close")
    .modal: slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Modal extends Vue {
    isVisible: boolean = false

    show() {
        this.isVisible = true
    }

    close() {
        this.isVisible = false
    }
}
</script>

<style scoped lang="stylus">
.background
    top 0
    left 0
    width 100vw
    height 100vh
    margin 0
    padding 0
    display flex
    justify-content center
    align-items center
    position fixed
    background-color rgba(0, 0, 0, 0.4)

.modal
    background-color white
</style>
