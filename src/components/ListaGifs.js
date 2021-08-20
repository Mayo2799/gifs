const ListaGifs = ({gif}) => {
    return (
        <div className='ListaGifs-card'>
            <img src={gif.imagen} alt={gif.titulo} />
            <p>{gif.titulo}</p>
        </div>
    )
}

export default ListaGifs;