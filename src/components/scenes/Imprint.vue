<template lang="pug">
#imprint imprint
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"

@Component
export default class Imprint extends mixins(AppStateMixin) {}
</script>

<style scoped lang="stylus">
#imprint
    height 100vh
</style>
