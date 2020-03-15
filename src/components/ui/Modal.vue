<template lang="pug">
Fade
    .background(v-if="isVisible" @click.self.stop="close")
        .modal
            h1.header {{ title }}
            div.content: slot
            Button.footer(@click="close" secondary) OK
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import Button from "@/components/ui/Button.vue"
import Fade from "@/components/ui/Fade.vue"

@Component({
    components: { Fade, Button }
})
export default class Modal extends Vue {
    @Prop(String)
    readonly title!: string

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
    display flex
    flex-direction column
    align-items stretch
    background-color white
    min-width 50vw
    min-height 50vw
    margin 5vh 5vw

    .header
        margin 0
        padding 0.5em 1em
        font-size 1.5em
        background-color darkgray
        color white

    .content
        flex-grow 1
        margin 0 1em
        padding 1em 0
        border-bottom 0.5px solid
    
    .footer
        align-self center
        margin 1em
</style>
