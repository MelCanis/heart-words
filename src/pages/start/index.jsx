import Logo from "../../components/logo";
import session from "../../data/session";
import "./index.sass"

export default function Start () {
    const set = session(s => s.set);
    return (
        <div className="Start page">
            <Logo />
            {/* <h4 className="blinker">Press to Start</h4> */}
            {/* <div className="message">
                Demo Site
            </div> */}
            <button onClick={e => set({started: true})}>Play</button>
        </div>
    )
}