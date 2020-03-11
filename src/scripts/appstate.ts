import sampleQuiz from "./sample-quiz"
import { clear, push } from "./arrayutils"

class AppConfig {
    quizNumberFont: string = ""
    quizBodyFont: string = ""
    quizBodyFontSize: number = 1
    showMouseCursor: boolean = true
}

export default class AppState {
    config: AppConfig = new AppConfig()
    quizzes: Array<Quiz> = []
    appPhase: AppPhase = "startup"
    gamePhase: GamePhase = null
    quizIndex: number | null = null

    canStartGame(): boolean {
        return this.quizzes.length > 0
    }

    getCurrentQuiz(): Quiz {
        if (this.quizIndex === null) throw "Invalid Operation"
        return this.quizzes[this.quizIndex]
    }

    loadSampleQuiz() {
        clear(this.quizzes)
        for (let q of sampleQuiz) push(this.quizzes, q)
    }

    startGame() {
        if (!this.canStartGame()) throw "Invalid Operation"

        this.appPhase = "game"
        this.gamePhase = "number"
        this.quizIndex = 0
    }

    exitGame() {
        this.appPhase = "startup"
        this.gamePhase = null
        this.quizIndex = null
    }
    
    goNextStep() {
        if (this.appPhase === "startup") throw "Invalid Operation"

        if (this.appPhase === "game") {
            switch (this.gamePhase) {
                case "number":
                    this.gamePhase = "countdown"
                    break
                case "countdown":
                    this.gamePhase = "quiz"
                    break
                case "quiz":
                    this.gamePhase = "exposure"
                    break
                case "exposure":
                    this.gamePhase = "answer"
                    break
                case "answer":
                    this.goNextQuiz()
                    break
            }
        } else if (this.appPhase === "imprint") {
            this.exitGame()
        }
    }

    goNextQuiz() {
        if (this.appPhase === "startup") throw "Invalid Operation"

        if (this.appPhase === "game") {
            if (this.quizIndex === null) throw "Dirty State"
            
            this.quizIndex++
            if (this.quizIndex < this.quizzes.length) {
                this.gamePhase = "number"
            } else {
                this.quizIndex = null
                this.appPhase = "imprint"
                this.gamePhase = null
            }
        } else if (this.appPhase === "imprint") {
            this.exitGame()
        }
    }

    goPrevQuiz() {
        if (this.appPhase === "startup") throw "Invalid Operation"

        this.gamePhase = "number"
        
        if (this.appPhase === "game") {
            if (this.quizIndex === null) throw "Dirty State"
            
            if (0 < this.quizIndex) {
                this.quizIndex--
            }
        } else if (this.appPhase === "imprint") {
            this.appPhase = "game"
            this.quizIndex = this.quizzes.length - 1
        }
    }
}
