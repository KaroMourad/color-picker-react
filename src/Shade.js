import React from "react";

function rgbToHsl(re, gr, bl) {
    let r = re/255;
    let g = gr/255;
    let b = bl/255;
  
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default:
            max=0;
      }
  
      h /= 6;
    }
  
    return [ h, s, l ];
}

function Shade(props) {
    const {r,g,b} = props;

    let hsl = rgbToHsl(r,g,b);
    let h,s,l;

    h = hsl[0]*360;
    s = hsl[1]*100;
    l = hsl[2]*100;
			
    let arr = [];
    for(let i=0; i < 25; i++) {
        let l1 = l;
        if ( i === 12 ) { continue;}
        if ( i < 12 ) {
            l1 = l*i/12;
        }
        if ( i > 12 ) {
            l1 = l*i/12;
        }
        let bgc = `hsl( ${h},${s}%,${l1}%)`;
        console.log(h,s,l1)
        arr.push(<span key={i} style={{backgroundColor:bgc,styles.cont}}>
        </span>)
    }
    return (
            <>
            <div>
               {arr}
            </div>
            </>  
    );
}

export default Shade;

const styles = {
    cont: {
        display: "inline-block",
        margin: 1,
        border:"3px solid black",
        height: 100,
        width: 40
    }
 
}