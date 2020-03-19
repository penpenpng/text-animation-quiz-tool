<template lang="pug">
.dropbox
    .dropbox-label ここに CSV をドラッグアンドドロップ
    HelpButton(@click="$refs.csvFormatHelpModal.show()") CSV のフォーマット
    HelpButton(@click="$refs.csvSampleHelpModal.show()") CSV のサンプル

    Modal(ref="csvFormatHelpModal") csv format
    Modal(ref="csvSampleHelpModal") csv sample
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { AppStateMixin } from "@/scripts/mixins"
import HelpButton from "@/components/ui/HelpButton.vue"
import Modal from "@/components/ui/Modal.vue"

@Component({
    components: { HelpButton, Modal },
})
export default class Dropbox extends mixins(AppStateMixin) {
    readonly $refs!: {
        csvFormatHelpModal: Modal,
        csvSampleHelpModal: Modal,
    }
}
</script>

<style scoped lang="stylus">
.dropbox
    background-color aliceblue
    border solid 0.5px lightgray
    padding 2em
    
    .dropbox-label
        color gray
        font-weight bold
        margin-bottom 0.5em
</style>
