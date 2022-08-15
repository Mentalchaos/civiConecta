import Login from './Components/Login/index';
import CiviConectaAdminPanel from './Components/CiviConectaAdminPanel/index';
import './index.css';

function App() {
  return (
    <div>
      {/* Solamente oculta 1 y los vas dibujando 1 a 1, yo hago las conexiones despues */}
      <Login />
      <CiviConectaAdminPanel />
    </div>
  );
}

export default App;
