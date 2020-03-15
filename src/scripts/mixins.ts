import { Vue, Component } from "vue-property-decorator"
import AppState from "./app-state"

@Component
export class AppStateMixin extends Vue {
    appState: AppState = AppState.getInstance()
}
