import { useState, useEffect } from 'react';

const Play = () => {

    const colores = [
        { spanish: "Amarillo", english: "yellow", id: 1 },
        { spanish: "Azul", english: "blue", id: 2 },
        { spanish: "Naranja", english: "orange", id: 3 },
        { spanish: "Negro", english: "black", id: 4 },
        { spanish: "Rojo", english: "red", id: 5 },
        { spanish: "Verde", english: "green", id: 6 },
        { spanish: "Purpura", english: "purple", id: 6 },
    ]

    const [time, setTime] = useState(33);




    return (
        <div>

            <div className='flex gap-5'>
                <div>
                    <h1>0</h1>
                    <p>Total palabras</p>
                </div>
                <div>
                    <h1>0</h1>
                    <p>Palabras correctas</p>
                </div>
                <div>
                    <h1>0</h1>
                    <p>Porcentaje palabras correctas</p>
                </div>
                <div>
                    <h1>{time}s</h1>
                    <p>Tiempo restante</p> 
                </div>
            </div>

            <div>
                <div className='p-9'>
                    palabras
                </div>

                <div className='pl-9'>
                    <button className='text-white py-2 px-4 bg-green-500'>Correcto</button>
                    <button className='text-white py-2 px-4 bg-red-500'>Icorrecto</button>
                </div>
            </div>
            
        </div>
    );
}

export default Play;
