<template lang="pug">
transition(name="fade" :style="styleVariables"): slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class FadeTransition extends Vue {
    @Prop({type: Number, default: 0.5})
    readonly duration: number = 0.5

    private get styleVariables() {
        return {
            "--duration": this.duration
        }
    }
}
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active
    transition opacity var(--duration)s

.fade-enter, .fade-leave-to
    opacity 0
</style>
