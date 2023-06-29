import "./index.sass"

export default function ({onclick}) {
    return (
        <div className="Logo" onClick={onclick}>
            <span className="Logo_top">Heart</span>
            <br></br>
            <span>Words</span>
        </div>
    )
}