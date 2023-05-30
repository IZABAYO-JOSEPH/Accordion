import {useState} from  'react'
import Questions from './questions'
import data from "./data"


const App = ()=>{
  const [questions,setQuestions] = useState(data)
  return(
    <h2>
      <Questions questions={questions} />
    </h2>
  )
}

export default App