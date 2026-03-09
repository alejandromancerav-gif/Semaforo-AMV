import React from "react"
import { useState } from "react";
import LightCircle from "./LightCircle";

function TrafficLight() {

//Estado que define color por defecto
const [color, setColor] = useState("red");

//Estado que controla si queremos enseñar la luz purpura o no
const [showPurple, setShowPurple] = useState(false);

//Funcion para activar la secuencia automatica
const startSequence = () => {
//Lista de colores base
    const baseColors = ["red", "yellow", "green"];
//Lista de colores que se usara si purple es true
    const activateColors = showPurple ? [...baseColors, "purple"] : baseColors;

//Variable local para manejar el indice de la secuencia
    let index = 0;
//Iniciamos en rojo
    setColor(activateColors[index]);
//Usamos setInterval para cambiar el color a cada segundo
    const intervalId = setInterval(() => {
        index++;
        if (index >= activateColors.length) {
//Terminamos la secuencia cuando llegue al ultimo color
            clearInterval(intervalId);
            return;
        }
        setColor(activateColors[index]);
    }, 300);
};

return(

    <div className="traffic-container"> 

    {/*Palo que sostiene al semaforo*/}
    <div className="traffic-pole"></div>

        {/* Contenedor del semáforo */}
        <div className="traffic-light">

            <LightCircle
                color="red"
                isActive={color === "red"}
                onClick={() => setColor("red")}
            />

            <LightCircle
                color="yellow"
                isActive={color === "yellow"}
                onClick={() => setColor("yellow")}
            />

            <LightCircle
                color="green"
                isActive={color === "green"}
                onClick={() => setColor("green")}
            />

            {showPurple && (
                <LightCircle
                    color="purple"
                    isActive={color === "purple"}
                    onClick={() => setColor("purple")}
                />
            )}

        </div>

        {/* Botones */}
        <div className="buttons">
            <button onClick={startSequence}>
                Iniciar secuencia
            </button>

            <button onClick={() => setShowPurple(true)}>
                Activar nueva luz
            </button>
        </div>

    </div>
);
};


export default TrafficLight;