export const obtenerGifs = async (busqueda) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ueqWFpLrazPdM2r1TtV9pmNHelgY9Mzr&q=${encodeURI(busqueda)}&limit=10`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map( (gif) => {
        return {
            titulo: gif.title,
            imagen: gif.images.downsized_medium.url
        }
    })
    return gifs;
}