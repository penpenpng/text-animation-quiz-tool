import Vue from "vue"
import App from "@/components/App.vue"
import AppState from "@/scripts/appstate"

import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
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
