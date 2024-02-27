import './App.css';
import { BrowserRouter } from "react-router-dom";
import { SetProvider } from './context/SetContext';
import AppRoutes from './routes/Routes';
import Navigation from './routes/Navigation';
import bg from './assets/frvc.png'
import ButtonClearAllData from './components/ButtonClearAllData';
import ButtonClearStats from './components/ButtonClearStats';

function App() {
  return (
    <BrowserRouter>
      <SetProvider>
        <div className="App">
            <img
              className='bg'
              src={bg}
              alt="frvbc-background-logo"
            />
            <b>Point Board</b>
            <div className='buttons-div'>
              <ButtonClearStats />
              <ButtonClearAllData />
            </div>
            <Navigation />
            <AppRoutes />
        </div>
      </SetProvider>
    </BrowserRouter>
  );
}

export default App;