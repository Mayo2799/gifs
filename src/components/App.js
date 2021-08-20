import Buscador from './Buscador';
import Gifs from './Gifs';
import {useState} from 'react';
import '../styles/index.css';

//key: ueqWFpLrazPdM2r1TtV9pmNHelgY9Mzr

const App = () => {

    const [busquedas, setBusquedas] = useState(['']);
    return (
        <>
            <h1>Gif</h1>
            <hr />
            <Buscador busquedas={busquedas} setBusquedas={setBusquedas}/>
            {/* <Buscador setBusquedas={setBusquedas}/> */}
            
            {
                busquedas.map((busqueda) => {
                    return <Gifs key={busqueda} busqueda={busqueda} />
                } ) 
            }
        </>
    );
}
  
export default App;