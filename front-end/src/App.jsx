import Carrousel from "./Carrousel";
import Colunas from "./Colunas";
import Navbar from "./Navbar";
import Tabelas from "./Tabelas";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333/";
axios.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Colunas></Colunas>
      <Tabelas></Tabelas>
      <Carrousel/>

    </div>
  );
}

export default App;
