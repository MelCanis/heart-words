import "./index.sass";
import { AiOutlineSound as Off, AiFillSound as On } from "react-icons/ai"
import session from ".././../../../data/session"
import { getStyle } from "../../../../components/button";
import { useEffect, useState } from "react";
// import talkfify from "talkify-tts"



export default function Sound () {
    const { list, wordindex } = session(s => s);
    const [on, setOn] = useState({word: false, sentence: false});
    console.log(wordindex)

    function talk (t, w) {
        if (on.sentence || on.word) return;
        let s = new SpeechSynthesisUtterance(t);
        s.onstart = e => setOn(st => ({...on, [w]: true})); s.onend = e => setOn(st => ({...on, [w]: false})); s.rate = 0.8; s.pitch = 0.7;
        speechSynthesis.speak(s);
    }

    return (
        <div className="Sound">
            <div className={"sound-word" + (list.words[wordindex].word.length>5?" sw-small":"")}>
                <button style={getStyle(list.color)} onClick={e => talk(list.words[wordindex].word, "word")}>{on.word ? <On /> : <Off/>}</button>
                <h1>{list.words[wordindex].word}</h1>
            </div>
            <div className="sound-sentence">
                <button style={getStyle(list.color)} onClick={e => talk(list.words[wordindex].sentence, "sentence")}>{on.sentence ? <On /> : <Off/>}</button>
                <h2 dangerouslySetInnerHTML={{ __html: underline(list.words[wordindex].sentence, list.words[wordindex].word) }}></h2>
            </div>
        </div>
    )
}

function underline(divContent, wordToHighlight) {
    const regex = new RegExp(`\\b${wordToHighlight}\\b`, 'gi');
    const highlightedContent = divContent.replace(regex, match => (
        `<span className="highlighted">${match}</span>`
    ));

    return highlightedContent;
}