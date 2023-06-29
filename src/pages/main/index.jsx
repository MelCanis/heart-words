import session from "../../data/session";
import Jot from "./components/jot";
import List from "./components/list";
import Sound from "./components/sound";
import Top from "./components/top";
import "./index.sass";

export default function Main () {
    const { list } = session(s => s);
    return (
        <div className="Main page">
            <Top />
            <div className="middle">
                <Sound />
                <Jot />
            </div>
            <List words={list.words} />
        </div>
    )
}