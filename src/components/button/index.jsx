import "./index.sass"
import { FaHeart as Heart } from "react-icons/fa";

export function ListSelect ({color, content, onclick}) {
    return (
        <button className="listselect" 
        // style={getStyle(color, true)}
        onClick={onclick}>
            {/* <div className="ls-bg" style={getStyle(color)}>
                <div className="ls-gradient"></div>
            </div>
            <div className="pseudoBg"></div> */}
            <Heart style={getStyleSVG(color)} className="ls-f"/>
            <Heart style={getStyleSVG(color, true)} className="ls-b"/>
            <span>
                {content}
            </span>
        </button>
    )
}
export function Back ({color, onclick}) {
    return (
        <button className="Back" style={getStyle(color)} onClick={onclick}>BACK</button>
    )
}

function getStyleSVG (color, border) {
    return {
        fill: border ? darken(color, 10) : color,
    }
}
export function getStyle (color, border) {
    return {
        background: color,
        borderColor: darken(color, 10),
        // borderColor: border ? darken(color, 10) : "",
    };
}
export function darken(color, percentage) {
    // Remove the leading '#' if present
    color = color.replace('#', '');
  
    // Convert the hexadecimal color to RGB
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
  
    // Calculate the darkened RGB values
    const darkenAmount = 1 - (percentage / 100);
    const darkenedR = Math.round(r * darkenAmount);
    const darkenedG = Math.round(g * darkenAmount);
    const darkenedB = Math.round(b * darkenAmount);
  
    // Convert the darkened RGB values back to hexadecimal
    const darkenedColor = ((darkenedR << 16) | (darkenedG << 8) | darkenedB).toString(16).padStart(6, '0');
  
    // Add the leading '#' and return the darkened color
    return `#${darkenedColor}`;
  }
  