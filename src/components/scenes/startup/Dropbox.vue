<template lang="pug">
.dropbox
    .dropbox-label ここに CSV をドラッグアンドドロップ
    .help(@click="showCsvFormatHelpModal") #[i.far.fa-question-circle] CSV のフォーマット
    .help(@click="showCsvSampleHelpModal") #[i.far.fa-question-circle] CSV のサンプル

    Modal(ref="csvFormatHelpModal") csv format
    Modal(ref="csvSampleHelpModal") csv sample
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Modal from "@/components/ui/Modal.vue"

@Component({
    components: { Modal },
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

<style scoped lang="stylus" src="@/assets/styles/common.stylus"></style>
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
