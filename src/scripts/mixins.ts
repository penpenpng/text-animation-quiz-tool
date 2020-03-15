import { Vue, Component, Watch } from "vue-property-decorator"
import AppState from "./app-state"

@Component
export class AppStateMixin extends Vue {
    appState: AppState = AppState.getInstance()
}

@Component
export class GameFormatMixin extends AppStateMixin {
    @Watch("appState.gameScene")
    onChangeGameScene(scene: GameScene) {
        if (scene === "exposure") this.$emit("expose")
    }

    expose() {
        this.appState.gameScene = "exposure"
    }
}
