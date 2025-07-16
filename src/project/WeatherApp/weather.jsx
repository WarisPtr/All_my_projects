import { Icon } from "lucide-react";
import { useState,useEffect } from "react";

export default function Weather (){
    const[weather ,setWeather] = useState('')
    const[data ,setData] = useState({
        City:null,
        Temp:null,
        Status:null,
        Icon:null
    })
    const iconUrl = `https://openweathermap.org/img/wn/${data.Icon}@2x.png`
    console.log(iconUrl);
    
    

    const inputValue =(weather)=>{
        setWeather(weather.target.value)
    }

    const fecthData = async() =>{
        const API_KEY = 'c501e4503b47b9cef15a8d3f3211ca0e'
        const city = weather.trim() === '' ? 'กรุงเทพมหานคร':weather

        try{
            const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=th&units=metric`)
            const jsondata = await fetchWeather.json()
            console.log(jsondata);

            if(jsondata.cod === 200){
                setData({
                    City:city,
                    Temp:jsondata.main.temp,
                    Status:jsondata.weather[0].description,
                    Icon:jsondata.weather[0].icon
                });
            }else{
                alert('ไม่พบชื่อเมืองที่ค้นหา กรุณาตรวจสอบอีกครั้ง');
            }

        }catch(error){
            console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล:", error);
        }
    }

    useEffect(() => {
        fecthData('กรุงเทพมหานคร');
    }, []);

    
    
    return(
        <div>
            <input placeholder="กรุณากรอกชื่อจังหวัด" type="text" className='input-template mb-0' value={weather} onChange={inputValue} style={{width:'80%'}} />
            <button type="button" onClick={fecthData} className='button-template'>Submit</button>
            <div className="result-box">
                <img src={iconUrl} className="w-40 mx-auto " />
                <p className="text-[3.5rem] mt-[-1vw]">{data.Temp}°C</p>
                <p className="text-[2rem] mt-3">{data.City}</p>
                <p className="text-[2rem] mt-4">{data.Status}</p>
            </div>
        </div>
    )
}