import { useReducer, useState } from 'react'
import './style.css'

export default function Counter(){
    const[num ,setNum] = useState(0)

    const setValue =(num)=>{
        setNum(num.target.value)
    }

    const counterFunc =(state,action)=>{

        switch(action.type){
            case '+':
                return state + Number(num) 
            case '-':
                return state - Number(num)
            default : state 
        }
    }

    const[result ,dispatch] = useReducer(counterFunc,0)

    return(
        <div className='counter-section'>
            <input type="number" min={0} value={num} onChange={setValue} className='calculate-value input-template mb-5' style={{width:'100%'}} />
            <button type="button" className='button-add' onClick={()=>dispatch({type:'+'})}>ADD</button>
            <button type="button" className='button-sub' onClick={()=>dispatch({type:'-'})}>SUBTRACT</button>
            <p className='result text-xl h-14 flex items-center justify-center rounded-xl'>{result}</p>
        </div>
    )
}