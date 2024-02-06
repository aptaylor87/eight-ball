import "./EightBall.css"

import { useState } from "react";


const EightBall = ({answers}) => {
    const [answer, setAnswer] = useState("Think of a Question")
    const [color, setColor] = useState("black")
    let idx = Math.floor(Math.random() * answers.length)
    const getAnswer = (idx) => {
        setAnswer(answers[idx]['msg'])
        setColor(answers[idx]['color'])
    }
    return (
        <div className="EightBall" onClick={() => getAnswer(idx)}style={{ backgroundColor: color}}>
            <div className="Answer" >{answer}</div>
        </div>
    )
}

export default EightBall;