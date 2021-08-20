import {useState} from 'react';
import PropTypes from 'prop-types';

const Buscador = ({busquedas, setBusquedas}) => {
  // const Buscador = ({setBusquedas}) => {
  const [valorInput, setValorInput] = useState('');

  const handleUpdate = (e) => {
    setValorInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valorInput.trim().length >= 1 ){
      setBusquedas([valorInput, ...busquedas]);
      // setBusquedas((itemBusqudas)=> [...itemBusqudasm, valorInput]);
      setValorInput('');
    }
  }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={valorInput} onChange={handleUpdate} placeholder='Escriba una categoría'/>
        <button type='submit'>Buscar</button>
      </form>
    );
}
  
export default Buscador;

Buscador.propTypes = {
  busquedas: PropTypes.array.isRequired,
  setBusquedas: PropTypes.func,
  // valorInput: PropTypes.string
};