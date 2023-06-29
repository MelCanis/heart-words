import session from "../../data/session";
import "./index.sass"
import lists from "../../data/lists"
import { ListSelect } from "../../components/button";
import Logo from "../../components/logo"

export default function Select () {
    const set = session(s => s.set);
    return (
        <div className="Select page">
            <Logo onclick={e => set({started: false, list: null, color: null})}/>
            <h4>Select a list</h4>
            <div className="container">
                {lists.map((i, n) => <ListSelect key={n} 
                color={i.color}
                content={n+1} onclick={e => set({list: i, index: n, color: i.color})}/>) }
            </div>
        </div>
    )
}