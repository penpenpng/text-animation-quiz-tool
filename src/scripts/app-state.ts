import sampleQuiz from "./sample-quiz"
import { clear, push } from "./array-utils"
import { ThrowInvalidOperationError, ThrowDirtyStateError, ThrowNotImplementedError } from "@/scripts/errors"


class AppConfig {
    title: string = "文字ビジュアルクイズ"
    quizNumberFont: string = ""
    quizBodyFont: string = ""
    quizAnswerFont: string = ""
    quizNumberFontSize: number = 10
    quizBodyFontSize: number = 5
    quizAnswerFontSize: number = 8
    showMouseCursor: boolean = true
}

export default class AppState {
    private static instance?: AppState
    private constructor() { }
    
    static getInstance(): AppState {
        if (!AppState.instance)
            AppState.instance = new AppState()
        return AppState.instance   
    }

    config: AppConfig = new AppConfig()
    quizzes: Quiz[] = []
    appScene: AppScene = "startup"
    gameScene: GameScene = null
    quizIndex: number | null = null

    get canStartGame(): boolean {
        return this.quizzes.length > 0
    }

    get currentQuiz(): Quiz {
        if (this.quizIndex === null)
            ThrowInvalidOperationError()
        
        return this.quizzes[this.quizIndex]
    }

    loadSampleQuiz() {
        clear(this.quizzes)
        for (let q of sampleQuiz) push(this.quizzes, q)
    }

    startGame() {
        if (!this.canStartGame)
            ThrowInvalidOperationError()

        this.appScene = "title"
        this.gameScene = null
        this.quizIndex = null
    }

    exitGame() {
        this.appScene = "startup"
        this.gameScene = null
        this.quizIndex = null
    }
    
    goNextStep() {
        if (this.appScene === "startup")
            ThrowInvalidOperationError()

        if (this.appScene === "game") {
            switch (this.gameScene) {
                case "number":
                    this.gameScene = "countdown"
                    break
                case "countdown":
                    this.gameScene = "quiz"
                    break
                case "quiz":
                    this.gameScene = "exposure"
                    break
                case "exposure":
                    this.gameScene = "answer"
                    break
                case "answer":
                    this.goNextQuiz()
                    break
            }
        } else {
            this.goNextQuiz()
        }
    }

    goNextQuiz() {
        if (this.appScene === "startup")
            ThrowInvalidOperationError()

        if (this.appScene === "game") {
            if (this.quizIndex === null)
                ThrowDirtyStateError()
            
            this.quizIndex++
            if (this.quizIndex < this.quizzes.length) {
                this.gameScene = "number"
            } else {
                this.quizIndex = null
                this.appScene = "imprint"
                this.gameScene = null
            }
        } else if (this.appScene === "title") {
            this.appScene = "game"
            this.gameScene = "number"
            this.quizIndex = 0
        } else if (this.appScene === "imprint") {
            this.exitGame()
        } else {
            ThrowNotImplementedError()
        }
    }

    goPrevQuiz() {
        if (this.appScene === "startup")
            ThrowInvalidOperationError()

        if (this.appScene === "game") {
            if (this.quizIndex === null)
                ThrowDirtyStateError()
            
            if (0 < this.quizIndex) {
                this.quizIndex--
                this.gameScene = "number"
            } else {
                this.appScene = "title"
                this.quizIndex = null
                this.gameScene = null
            } 
        } else if (this.appScene === "title") {
            this.exitGame()
        } else if (this.appScene === "imprint") {
            this.appScene = "game"
            this.gameScene = "number"
            this.quizIndex = this.quizzes.length - 1
        } else {
            ThrowNotImplementedError()
        }
    }
}
