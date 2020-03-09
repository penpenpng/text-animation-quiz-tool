import Vue from "vue"
import App from "@/components/App.vue"
import AppState from "@/scripts/appstate"

import "@/assets/styles/index.stylus"

function main() {
    setupGlobalMixin()
    mountApp()
}

function setupGlobalMixin() {
    const appState = new AppState()

    Vue.mixin({
        data() {
            return { appState }
        },
    })
}

function mountApp() {
    new Vue({
        render: h => h(App),
    }).$mount("#app")
}

main()
