import React from 'react'
import './quiz-styles/quizStyles.css'
export default function Answer(props) {
    let classes = ['answer'];

    // if the selected props is set to true
    if(props.selected){
        classes.push('selected');
    }

    return (
        <button className={classes.join(' ')} onClick={props.handleSelected} value={props.letter} >
            <span className="letter" > {props.letter} </span> {props.answer}
        </button>
    )
}
