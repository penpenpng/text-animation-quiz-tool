const sampleQuiz: Quiz[] = [
    {
        format: "blink",
        formatOption: {
            // searchLight: true,
        },
        statement: "「なぜ山に登るのか」という質問に、「そこに山があるから」と答えたことでも知られる有名な登山家は誰でしょう？",
        answer: "ジョージ・マロリー"
    },
    {
        format: "anagram",
        formatOption: {
            spin: {
                secPerRound: 2,
                secPerRoundEpsilon: 0,
                direction: "right",
                easeFunction: "linear",
            },
            // searchLight: true,
        },
        statement: "「なぜ山に登るのか」という質問に、「そこに山があるから」と答えたことでも知られる有名な登山家は誰でしょう？",
        answer: "ジョージ・マロリー"
    },
    {
        format: "anagram",
        formatOption: {},
        statement: "「なぜ山に登るのか」という質問に、「そこに山があるから」と答えたことでも知られる有名な登山家は誰でしょう？",
        answer: "ジョージ・マロリー"
    }
]

export default sampleQuiz
