type QuizFormat = "anagram" | "blink"
type AppScene = "startup" | "title" | "game" | "imprint"
type GameScene = "number" | "countdown" | "quiz" | "exposure" | "answer" | null

interface SpinParameters {
    secPerRound: number
    secPerRoundEpsilon: number
    direction: "right" | "left" | "random"
    easeFunction: "linear" | "ease"
}

interface QuizFormatOption {
    spin?: SpinParameters
    searchLight?: boolean
}

interface Quiz {
    format: QuizFormat
    formatOption: QuizFormatOption
    statement: string
    answer: string
}
