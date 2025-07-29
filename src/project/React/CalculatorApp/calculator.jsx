import './style.css'
import '../../../styles/template.css'
import { useState } from 'react'

export default function Calculate (){

    const [digit,setDigit] = useState({
        data1 : 0,
        data2 : 0,
        operator : '',
        result : 0,
        display: '0',
        justCalculated: false
    })

    function addData(num){

        setDigit(prevData => {
            if(prevData.justCalculated){
                return{
                    data1 : num,
                    data2 : 0,
                    operator : '',
                    result : 0,
                    display: num.toString(),
                    justCalculated: false
                }
            }

            if(prevData.display === '-'){
                if(prevData.operator === ''){
                    return{
                        ...prevData,
                        data1: -num,
                        display: (-num).toString()
                    }
                }else{
                    return{
                        ...prevData,
                        data2:-num,
                        display: -num.toString()
                    }
                }
            }

            if(prevData.operator === ''){
                const newData1 = prevData.data1 === 0 ? num : Number(prevData.data1.toString() + num)
                return{
                    ...prevData,
                    data1: newData1,
                    display: newData1.toString()
                }
            }else if(prevData.operator !== ''){
                const newData2 = prevData.data2 === 0 ? num : Number(prevData.data2.toString() + num)
                return{
                    ...prevData,
                    data2:newData2,
                    display: newData2.toString()
                }
            }
        })
    }
    
    function operatorSetting(op){
        setDigit(prevData => {
            if (op) {
                if(prevData.justCalculated){
                    return{
                        data1 : prevData.result,
                        data2 : 0,
                        operator : op,
                        result : 0,
                        display: prevData.result + ' ' ,
                        justCalculated: false
                    }
                }

                if(prevData.operator !== '' && prevData.data2 !== 0) {
                    let result = 0;
                    if(prevData.operator === '+') result = prevData.data1 + prevData.data2
                    if(prevData.operator === '-') result = prevData.data1 - prevData.data2
                    if(prevData.operator === '*') result = prevData.data1 * prevData.data2
                    if(prevData.operator === '/') result = prevData.data1 / prevData.data2
                    
                    return{
                        data1: result,
                        data2: 0,
                        operator: op,
                        result: result,
                        display: result + ' ' + op + ' ',
                        justCalculated: false
                    }
                }

                return{
                    ...prevData,
                    operator: op,
                    display:prevData.data1,
                    justCalculated:false
                }
            }
        })
    }

    function calResult(){
        setDigit(prevData => {
            let result = 0;
            if(prevData.operator === '+'){
                result = prevData.data1 + prevData.data2
            } 
            if(prevData.operator === '-'){
                result = prevData.data1 - prevData.data2
            }
            if(prevData.operator === '*'){
                result = prevData.data1 * prevData.data2
            }
            if(prevData.operator === '/'){
                result = prevData.data1 / prevData.data2
            }
            
            const displayResult = result % 1 === 0 ? result.toString() : result.toFixed(2)
            return { ...prevData, result:result,display:displayResult,justCalculated:true };
        })
    }
    
    function handleMinus(){
        setDigit(prevData => {
            if(prevData.display === '0'){
                if(prevData.justCalculated){
                    return{
                        data1 : 0,
                        data2 : 0,
                        operator : '',
                        result : 0,
                        display: '-' ,
                        justCalculated: false
                    }
                }else{
                    return{
                        ...prevData,
                        display:'-'
                    }
                }
            }
            else if (prevData.operator !== '' && prevData.data2 === 0 && prevData.display !== '-') {
                return {
                    ...prevData,
                    display: '-'
                }
            } else {
                operatorSetting('-');
                return prevData;
            }
        })
    }

    function clearAll(){
        setDigit({
            data1:0,
            data2:0,
            operator:'',
            result:0,
            display:'0',
            justCalculated:false
        })
    }

    console.log(digit);
    

    return(
        <div className='calculate-section'>
            <input type="text" readOnly value={digit.display} className='calculate-value input-template' style={{width:'100%'}} />
            <div className='keypad-row'>
                <div className='keypad-box grid grid-cols-4 xl:pt-0 pt-4'>
                    <button type='button' onClick={()=>addData(1)} className='number-template button-template-single'>1</button>
                    <button type='button' onClick={()=>addData(2)} className='number-template button-template-single'>2</button>
                    <button type='button' onClick={()=>addData(3)} className='number-template button-template-single'>3</button>
                    <button type='button' className='number-template button-template-single' onClick={clearAll}>C</button>
                    <button type='button' onClick={()=>addData(4)} className='number-template button-template-single'>4</button>
                    <button type='button' onClick={()=>addData(5)} className='number-template button-template-single'>5</button>
                    <button type='button' onClick={()=>addData(6)} className='number-template button-template-single'>6</button>
                    <div className=' grid grid-cols-2'>
                        <button type='button' onClick={()=>operatorSetting('+')} className='number-template button-template-single'>+</button>
                        <button type='button' onClick={handleMinus} className='number-template button-template-single'>-</button>
                    </div>
                    <button type='button' onClick={()=>addData(7)} className='number-template button-template-single'>7</button>
                    <button type='button' onClick={()=>addData(8)} className='number-template button-template-single'>8</button>
                    <button type='button' onClick={()=>addData(9)} className='number-template button-template-single'>9</button>
                    <div className=' grid grid-cols-2'>
                        <button type='button' onClick={()=>operatorSetting('*')} className='number-template button-template-single'>x</button>
                        <button type='button' onClick={()=>operatorSetting('/')} className='number-template button-template-single'>/</button>
                    </div>
                </div>
                <div className='keypad-box grid grid-cols-4'>
                    <button type='button' onClick={()=>addData(0)} className='number-template col-span-3 button-template-single' style={{width:'96%'}}>0</button>
                    <button type='button' className='number-template w-[94%] button-template-single' onClick={calResult}   >=</button>
                </div>
            </div>
        </div>
    )
}
