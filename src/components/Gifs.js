import { useState, useEffect } from "react";
import ListaGifs from './ListaGifs';
import {obtenerGifs} from '../helpers/obtenerGifs';

const Gifs = ({busqueda}) => {

    const [gifs, setGifs] = useState([]);

    useEffect( () => {
        obtenerGifs(busqueda).then((gif) => {
            setGifs(gif);
        });
        },[busqueda])

    return (
        <>
            <h2>{busqueda}</h2>
            <div className='gif-container'>
            {
                gifs.map( (gif) => {
                    return <ListaGifs key={gif.imagen} gif={gif}/>
                })
            }
            </div>
        </>
    )
}

export default Gifs;
