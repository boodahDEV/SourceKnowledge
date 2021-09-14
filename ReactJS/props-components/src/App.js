import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";

function App() {
  const sujeto = {
    nombre: 'Juanito',
    urlImage:'https://via.placeholder.com/64',
    texto:"Will you do the same for me?It's time to face the music."
}
  return (
    <div className="container">
      <h1>Componentes - props</h1>
      <Comentario sujeto={sujeto}></Comentario>
    </div>
  );
}

export default App;
