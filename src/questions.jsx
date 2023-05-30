import React from 'react'
import SingleQuestion from './singleQuestion'

const Questions = ({questions}) => {
  return (
    <section className="container">
        <h1>Questions</h1>
        {questions.map((question)=>{
            return<SingleQuestion key={question.id} {...question}/>
        })}
    </section>
  )
}

export default Questions