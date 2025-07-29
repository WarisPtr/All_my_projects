import Markdown from "react-markdown"

export default function PreviewMarkdown({md}){
    

    return(
        <div className="preview_markdown">
            <h2 className="mb-2 !text-white !text-[2.5rem] xl:text-lg !mt-0">preview</h2>
            <div className="output_markdown">
                <Markdown children={md} />
            </div>
        </div>
    )
}