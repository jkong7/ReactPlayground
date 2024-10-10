import React, { useState, useEffect } from 'react';
const RandomColor = () => {
    const [typeColor, setTypeColor] = useState('hex'); 
    const [color, setColor] = useState('#000000'); 

    useEffect(()=>{
        if (typeColor==='rgb') {generateRgb()}
        else {generateHex()}
    }, [typeColor])

    const randomColorUtility = (length) => {
        return Math.floor(Math.random()*length)
    }

    const generateHex = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']; 
        let hexColor = '#'; 
        for (let i=0;i<6;i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    const generateRgb = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color, 
        }}>
            <button onClick={() => setTypeColor('hex')}>Create HEX color</button>
            <button onClick={() => setTypeColor('rgb')}>Create RGB color</button>
            <button onClick={()=>(typeColor==='hex') ? generateHex() : generateRgb()}>Generate Random Color</button>
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                color: '#fff', 
                fontSize: '60px', 
                marginTop: '50px',
                flexDirection: 'column', 
                gap: '20px'
            }}>
                <h3>{typeColor === 'rgb' ? 'RGB Color' : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor;
