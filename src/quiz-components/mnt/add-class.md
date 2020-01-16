*First we have a button with a className called 'answer'

<button className="answer">

now we want to add another className to it based on if it is selected

*** we take the className away and set it in an array of classes

let classes = ['answer']
** what we do next

if(props.selected){
    classes.push('selected')
}

<button className={classes.join(' ')}


----------------------------------------------------------------------
when we select a button we take its value and place it in a variable currentAnswer

const handleSelected = e => {
    setCurrentAnswer(e.target.value)
}






Grab all the users answers
--------------------------------
const [answers, setAnswers] = useState([])

--> Each time the user goes to the next question, we grab the questionId and the user answer(currentAnswer)

const next = e => {
    const answer = { questionId: question.id, chosenAnswer: currentAnswer }
    answers.push(answer)    // reset the array in the state 
    setAnswers(answers)     // and reset the currentAnswer

    setCurrentAnswer(')

    Now move to the next question, make sure when you increment to move forward,
    the currentQuestion should be less than questions length

    if(currentQuestion + 1 < question.length){
        setCurrentQuestion(currentQuestion + 1)
    }
}