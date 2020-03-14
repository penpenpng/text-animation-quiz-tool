<template lang="pug">
.dropbox
    .dropbox-label ここに CSV をドラッグアンドドロップ
    HelpButton(@click="showCsvFormatHelpModal") CSV のフォーマット
    HelpButton(@click="showCsvSampleHelpModal") CSV のサンプル

    Modal(ref="csvFormatHelpModal") csv format
    Modal(ref="csvSampleHelpModal") csv sample
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import HelpButton from "@/components/ui/HelpButton.vue"
import Modal from "@/components/ui/Modal.vue"

@Component({
    components: { HelpButton, Modal },
})
export default class Dropbox extends Vue {
    readonly $refs!: {
        csvFormatHelpModal: Modal,
        csvSampleHelpModal: Modal,
    }

    showCsvFormatHelpModal() {
        this.$refs.csvFormatHelpModal.show()
    }

    showCsvSampleHelpModal() {
        this.$refs.csvSampleHelpModal.show()
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
