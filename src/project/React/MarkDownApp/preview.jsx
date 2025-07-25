import Markdown from "react-markdown"

export default function PreviewMarkdown({md}){
    

    return(
        <div className="preview_markdown">
            <h2 className="mb-2 !text-white">preview</h2>
            <div className="output_markdown">
                <Markdown children={md} />
            </div>
        </div>
    )
}