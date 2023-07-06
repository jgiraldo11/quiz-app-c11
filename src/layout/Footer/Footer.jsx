
const gitHubURL = "https://github.com/jgiraldo11/quiz-app-c11";
const getFullYear = new Date(). getFullYear();

export default function Footer () {

    return (
        <footer>
            <p>&copy; {getFullYear}
            <br />
            <a href={gitHubURL}>See Code in Github</a></p>
        </footer>
    )
}