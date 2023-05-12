import React, { useState } from 'react'

const Colors = () => {

    const [ color, setColor ] = useState('#000000');

    const [ colorInterval, setColorInterval ] = useState(0);

    const getColor = () => Math.floor(Math.random() * 256);

    const getMul = (red, green, blue) => {
        return (
            '#' + [red, green, blue].map((item) => {
                const multColor = item.toString(16);
                return multColor.lenght === 1 ? '0' + 1 : multColor;
            } ).join('')
        )
    } 

    const agregarMul = () => {
        const rgb = {
            r: getColor(),
            g: getColor(),
            b: getColor(),
        }

        return setColor(getMul(rgb.r, rgb.g, rgb.b))
    }
    
    const onChangeColor = () => {
        return setColorInterval(setInterval(agregarMul, 500))
    }

    const stopChangeColor = () => {
        return clearInterval(colorInterval)
    }

    const clickChangeColor = () => {
        return clearInterval(colorInterval)
    } 

    return (
        <>
            <div 
             id='rombo'
             style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
             onMouseOver={onChangeColor}
             onMouseLeave={stopChangeColor}
             onDoubleClick={clickChangeColor}
                >
            </div>
            <p style={{ color: 'black' }}>Color: {color}</p>
        </>
    )
}

export default Colors