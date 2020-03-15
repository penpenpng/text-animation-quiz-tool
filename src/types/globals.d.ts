type QuizFormat = "anagram"
type AppScene = "startup" | "title" | "game" | "imprint"
type GameScene = "number" | "countdown" | "quiz" | "exposure" | "answer" | null

interface Quiz {
    format: QuizFormat
    statement: string
    answer: string
}
