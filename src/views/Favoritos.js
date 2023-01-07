import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const {fotos, setFotos } = useContext(Context);
  const total_favoritas = (fotos.filter((foto) => foto.favorito)).length;
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
       
        {
          total_favoritas == 0 ?
          <h3 style={{ position: "absolute", top: "50%", left: "calc(50% - 180px)" }} >No hay fotos marcadas como favoritas</h3>:
          fotos.filter((foto) => foto.favorito).map((foto, key) => (
            <img src={foto.src} key={key} />
          ))
        }
      </div>
    </div>
  );
}
