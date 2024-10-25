import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo,obtenerSuperheroesMayoresDe30 } from "../repository/superheroesServices.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';

export function obtenerSuperheroeporIdController(req, res){
  const {id} = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));
  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } 
  else{
    res.status(404).send({ mensaje: "Superheroe no encontrado" });
  }

}

export function buscarSuperheroesPorAtributoController(req, res){
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
  
  if (superheroes.leght > 0){
    res.send(renderizarListaSuperheroes(superheroes));
  }
  else{
    res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo" });
  }
}