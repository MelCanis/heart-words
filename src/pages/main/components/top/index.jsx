import "./index.sass";
import session from "../../../../data/session"
import { Back } from "../../../../components/button";
import { TiArrowBackOutline, TiArrowBack } from "react-icons/ti"

export default function Top () {
    const { index, color, set } = session(s => s);
    return (
        <div className="Top">
            <button onClick={e => set({list: null, index: null, wordindex: 0, color: null})}>
                <TiArrowBack />
                {/* <span>Back</span> */}
            </button>
                
            {/* <h3>List {index + 1}</h3> */}
            {/* <Back color={color} 
            onclick={e => set({list: null, index: null, wordindex: 0, color: null})}
            /> */}
        </div>
    )
}