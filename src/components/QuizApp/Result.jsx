export default function Result ({score, quizLength, handleRestart}) {

    return (
        <div className="quiz-card">
        <h3>Result</h3>
        <p>Your Score {score} out of {quizLength}</p>
        <button onClick={handleRestart}>Reset</button>
        </div>
    );
}