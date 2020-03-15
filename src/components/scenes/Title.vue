<template lang="pug">
.centering-container
    div {{ appState.config.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Title extends mixins(AppStateMixin) {}
</script>

<style scoped lang="stylus">
.centering-container
    display: flex
    align-items: center
    justify-content: center
</style>
