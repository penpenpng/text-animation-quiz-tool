import Vue from "vue"
import AppState from "@/scripts/appstate"

declare module "vue/types/vue" {
    interface Vue {
        appState: AppState
    }
}

declare global {
    type QuizFormat = "anagram"
    type AppPhase = "startup" | "game" | "imprint"
    type GamePhase = "number" | "countdown" | "quiz" | "exposure" | "answer" | null
    
    interface Quiz {
        format: QuizFormat
        statement: string
        answer: string
    }
}