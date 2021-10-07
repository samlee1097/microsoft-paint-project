import React, {useState} from 'react'

function Container({utensil}) {
    const {tool, weight, color} = utensil;

    const [magic, SetMagic] = useState({
        width: "790px",
        height:"600px",
        backgroundColor: "white",
        border: "5px solid rgb(207, 207, 207)",
        borderStyle: "groove",
    })

    const [draw, SetDraw] = useState(false)
    
    function handleBucket(){
        if(tool === "bucket"){
            const newItem = {
                ...magic,
                backgroundColor: color
            }
            SetMagic(newItem)
        }
    }

    function handleMouseDown(event){
        if(tool === "brush" && draw === true){
            console.log(event.screenX, event.screenY)
        }
    }

    return (
        <div style={magic} 
            onMouseDown={()=>SetDraw(true)} 
            onMouseUp={()=>SetDraw(false)} 
            onClick={handleBucket} 
            onMouseMove={(event)=>handleMouseDown(event)}>
        </div>
    );
}

export default Container
