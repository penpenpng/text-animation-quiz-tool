import Vue from "vue"
import App from "@/components/App.vue"

import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@/assets/styles/index.stylus"


new Vue({
    render: h => h(App),
}).$mount("#app")
