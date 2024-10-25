import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesServices.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

// Controlador para obtener superhéroe por ID
export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));
  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superheroe no encontrado" });
  }
}

// Controlador para buscar superhéroes por atributo
export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
  
  if (superheroes.length > 0) {  
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo" });
  }
}

// Controlador para obtener superhéroes mayores de 30 con filtros
export function obtenerSuperheroesMayoresDe30YconFiltrosController(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();
  
  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superheroes mayores de 30 años" });
  }
}
