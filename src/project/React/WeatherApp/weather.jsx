import { Icon } from "lucide-react";
import './style.css'
import { useState,useEffect } from "react";

export default function Weather (){
    const[weather ,setWeather] = useState('')
    const[data ,setData] = useState({
        City:null,
        Temp:null,
        Status:null,
        Icon:null
    })
    const provinces = [
        "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น",
        "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย",
        "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา",
        "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", "บุรีรัมย์",
        "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พะเยา",
        "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่", "ภูเก็ต"
    ];    
    const iconUrl = `https://openweathermap.org/img/wn/${data.Icon}@2x.png`
    
    
    

    const inputValue =(weather)=>{
        setWeather(weather.target.value)
    }

    const fecthData = async() =>{
        const API_KEY = 'c501e4503b47b9cef15a8d3f3211ca0e'
        const city = weather.trim() === '' ? 'กรุงเทพมหานคร':weather

        try{
            const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=th&units=metric`)
            const jsondata = await fetchWeather.json()

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
            <select
                value={weather}
                onChange={inputValue}
                className="input-template"
                style={{ width: "80%" }}
            >
                <option value="">กรุณาเลือกจังหวัด</option>
                {provinces.map((province, index) => (
                <option key={index} value={province}>
                    {province}
                </option>
                ))}
            </select>
            <button type="button" onClick={fecthData} className='button-template button-weather text-[2.5rem] xl:text-lg'>Submit</button>
            <div className="result-box">
                <img src={iconUrl} className="w-40 mx-auto " />
                <p className="text-[3.5rem] mt-[-1vw]">{data.Temp}°C</p>
                <p className="text-[2rem] mt-3">{data.City}</p>
                <p className="text-[2rem] mt-4">{data.Status}</p>
            </div>
        </div>
    )
}