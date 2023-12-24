import { GIfItem } from "./GIfItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  const [render, setRender] = useState(false);

  useEffect(() => {
    let time1 = setTimeout(() => 
       setRender(true)
    , 4000);
    return () => {
      clearTimeout(time1);
    }
  }, []);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && !render ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GIfItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};
