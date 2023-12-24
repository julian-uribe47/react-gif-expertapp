export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=EBdfY4hBwNuG56IaVExtEMo20nQUjNhp&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json(url); 

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url 
    }));
    
    return gifs;
}

