import { darken, getStyle } from "../../../../components/button";
import session from "../../../../data/session";
import "./index.sass";

export default function List ({words}) {
    const { wordindex, color, set } = session(s => s);
    return (
        <div className="List">
            {words.map((i, n) => <button key={n} 
                style={wordindex == n ? {...getStyle(color), } : { }} 
                className={"word" + (wordindex == n ? " active" : "")}
                onClick={e => set({wordindex: n})}
                >{i.word}</button>)}
        </div>
    )
}