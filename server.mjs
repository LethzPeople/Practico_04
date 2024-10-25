import express from 'express';
import { 
  obtenerSuperheroePorIdController, 
  buscarSuperheroesPorAtributoController, 
  obtenerSuperheroesMayoresDe30 
} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// Rutas
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController); // Recibe un ID de superheroe y devuelve los datos de ese superheroe 
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController); //Recibe un atributo 
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30); //Devuelve una lista de superheroes mayores de 30

// Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

 