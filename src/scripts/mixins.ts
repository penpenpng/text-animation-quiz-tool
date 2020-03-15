import { Vue, Component, Watch } from "vue-property-decorator"
import AppState from "./app-state"

@Component
export class AppStateMixin extends Vue {
    appState: AppState = AppState.getInstance()
}

@Component
export class GameFormatMixin extends AppStateMixin {
    expose() {
        this.appState.gameScene = "exposure"
    }
}
