import React from "react";

//Este componente recibe props desde el componente padre (TrafficLight)
const LightCircle = ({ color, isActive, onClick }) => {

//Si la luz esta activa agregamos una clase para que brille
    const glowClass = isActive ? `glow-${color}` : "";

    return (
        <div
//Aqui se define el color de la luz, agrega el efecto de brillo y demas.
            className={`light-circle ${color} ${glowClass}`}
//OnClick para ejecutar la funcion que recibimos por props.
            onClick={onClick}
        ></div>
    );
};

export default LightCircle;

