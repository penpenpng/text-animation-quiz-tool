<template lang="pug">
.help-button(@click="onClick") #[i.far.fa-question-circle] 
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class HelpButton extends Vue {
    private onClick() {
        this.$emit("click")
    }
}
</script>

<style scoped lang="stylus">
.help-button
    width max-content
    color darkgreen
    cursor pointer

    &:hover
        text-decoration underline
    
    &:active
        color darkseagreen
</style>
