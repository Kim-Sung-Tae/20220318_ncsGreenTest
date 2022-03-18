import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FunctionTag() {


    const [textF,textFupdate] = useState('리액트 안의 textF 초기값')

    useEffect( async()=>{
        await axios.post('/postsend').then(res=>{
            textFupdate(res.data.post)
        })
    },[])



  return (
    <div><h1>FunctionTag</h1>
        <p> textF 변수 {textF}</p>
        
     </div>
  )
}

export default FunctionTag