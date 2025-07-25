import './style.css'
import '../../../styles/template.css'
import { useEffect, useState } from 'react'

const CurrencyConverter = () => {
    
    const [amount,setAmount] = useState(0)
    const [result,setResult] = useState(0)
    const [currency, setCurrency] = useState([
    { base: 'USD', rates: { USD: 1,     EUR: 0.85, THB: 36.25, JPY: 110.50 } },
    { base: 'EUR', rates: { USD: 1.18,  EUR: 1,    THB: 37.78, JPY: 168.19 } },
    { base: 'THB', rates: { USD: 0.028, EUR: 0.024, THB: 1,   JPY: 3.05 } },
    { base: 'JPY', rates: { USD: 0.01,  EUR: 0.0059, THB: 0.33, JPY: 1 } },
    ]);
    const [form,setForm] = useState(0)
    const [to,setTo] = useState(0)

    const amountValue =(amount)=>{
        
        setAmount(amount.target.value)

        if(amount.target.value < 0){
            window.alert('กรอกจำนวนเงินติดลบไม่ได้')
        }
    }

    const handleSwap = () => {
        const temp = form;
        setForm(to);
        setTo(temp);
    };

    const currencyValue =()=> {
        const baseCurrency = currency.find(item => item.base === form);

        if(!form || !to || !amount){
            window.alert('กรุณากรอกข้อมูลให้ครบ')
        }else if(amount < 0){
            window.alert('กรอกจำนวนเงินติดลบไม่ได้')
        }else{
            setResult((amount * baseCurrency.rates[to]).toFixed(2))
        }
    };
    

    return(
        <div className='currency-section'>
            <div className='currency-col px-4 pb-4'>
                <input type="number" min={0} className='currency-value input-template' value={amount} onChange={amountValue}  placeholder='amount' style={{width:'100%'}} />
            </div>
            <div className='currency-row'>
                <div className='currency-col'>
                    <select value={form} className='currency select-template'  onChange={(e)=>setForm(e.target.value)}>
                        <option value="">- กรุณาเลือกสกุลเงิน -</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="THB">THB</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
                <div className='currency-col'>
                    <button className='swap' onClick={handleSwap}>Swap</button>
                </div>
                <div className='currency-col'>
                    <select value={to} className='currency-result select-template'  onChange={(e)=>setTo(e.target.value)} >
                        <option value="">- กรุณาเลือกสกุลเงิน -</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="THB">THB</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
            </div>
            <div className='currency-col px-4 py-4'>
                <button onClick={currencyValue} className='text-xl h-14 w-full flex items-center justify-center bg-[#535353] rounded-xl my-4'>คำนวนผลลัพธ์</button>
                <p className='text-xl h-14 flex items-center justify-center rounded-xl'><span>Result : </span><span>&nbsp;{result}</span></p>
            </div>
        </div>
    )
}

export default CurrencyConverter;
