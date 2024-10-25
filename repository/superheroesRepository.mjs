// repository/superheroesRepository.mjs
import fs from 'fs' 
import path from 'path'
import { fileURLToPath} from 'url';
import superheroesDataSource from './superheroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo 
const __dirname = path.dirname(__filename); // Pbtiene el directorio del archivo 

  export default class SuperheroesFileRepository extends superheroesDataSource {
    constructor() {
      super();
      this.filePath = path.join(__dirname,'../superheroes.txt');
    };// Define la ruta del archivo de datos
  obtenerTodos() {
    const data = fs.readFileSync(this.filePath, 'utf-8'); // lee el contenido de 'filePath'
    return JSON.parse(data); // convierte el archivo JASON en un array de objetos JS
  };

};