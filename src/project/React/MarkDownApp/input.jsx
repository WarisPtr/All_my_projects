
export default function InputMarkdown({md,setMd}){

    const inputMarkdown =(md)=>{
        setMd(md.target.value)
    }
    
    return(
        <div className="input_markdown">
            <h2 className="mb-2 text-white">Editor</h2>
            <textarea className="input_editor" placeholder="พิมพ์ข้อความ Markdown ของคุณที่นี่..." value={md} onChange={inputMarkdown} />
        </div>
    )
}