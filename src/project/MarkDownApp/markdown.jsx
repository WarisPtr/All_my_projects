import InputMarkdown from "./input"
import PreviewMarkdown from "./preview"
import './style.css'
import '../../styles/template.css'
import { useState } from "react"


export default function MarkdownApp({md}){
    const[markdown,setMarkdown] = useState('')

    return(
        <div className="row-markdown">
            <InputMarkdown md={markdown} setMd={setMarkdown}/>
            <PreviewMarkdown  md={markdown} />
        </div>
    )
}