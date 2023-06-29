import "./index.sass";
import { FaHeart as Heart } from "react-icons/fa"
import session from "../../../../data/session"

function Slot ({syllable, hearted, color, small, supersmall}) {
    return (
        <div className={"slot" + (small ? " small" : "") + (supersmall ? " supersmall" : "")}>
            {hearted && <Heart 
            // style={{fill: color}}
            />}
            <h1>{syllable}</h1>
        </div>
    )
}

export default function Jot () {
    const { list, wordindex, color } = session(s => s);
    return (
        <div className="Jot">
            {checkSyllables(list.words[wordindex].hearted).map((i, n) => <Slot key={n} {...i} 
            color={color} 
            small={list.words[wordindex].hearted.length > 5}
            supersmall={list.words[wordindex].hearted.length > 6}
            />)}
        </div>
    )
}

function checkSyllables (l) {
    let syllables = [];
    for (let i in l) {
        syllables.push({syllable: l[i].split("*")[0], hearted: l[i].includes("*")})
    }
    return syllables;
}