import { useState } from 'react'
import './style.css'
import TodoItem from './TodoItem'

const TodoList =()=>{
    const [data,setData] = useState('')
    const [arr , setArr] = useState([])
    const [activeTab, setActiveTab] = useState('all');

    const inputFunc =(data)=>{
        setData(data.target.value)
    }

    const addArr =(arr)=>{
        setArr([...arr,{text:data,checked:false}])
        setData('')
    }

    const delArr =(item)=>{ 
        setArr(prev => prev.filter(items => items !== item))        
    }

    const doneFunc =(index)=>{
        const newCheck = [...arr];
        newCheck[index].checked = !newCheck[index].checked
        setArr(newCheck)
    }

    const handleTabClick =(tab)=>{
        setActiveTab(tab)
    }

    

    return(
        <div>
            <input type="text" className="insertData input-template" placeholder="กรอกข้อมูล" value={data} onChange={inputFunc} />
            <button type="button" className='button-add button-template-single' onClick={()=>addArr(arr)}>ADD</button>
            
            <div className="flex gap-3 justify-center xl:my-5 my-10">
                <button className={`button-template-single ${activeTab === 'all' ? 'all active':'all'}`} onClick={()=>handleTabClick('all')}>All</button>
                <button className={`button-template-single ${activeTab === 'done' ? 'done active':'done'}`} onClick={()=>handleTabClick('done')}>Done</button>
                <button className={`button-template-single ${activeTab === 'working' ? 'working active':'working'}`}  onClick={()=>handleTabClick('working')}>Working</button>
            </div>
            <TodoItem active={activeTab} items={arr} del={delArr} check={doneFunc}/>
        </div>
    )
}

export default TodoList