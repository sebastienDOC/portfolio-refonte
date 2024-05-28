import './App.css'
import { BrowserRouter } from 'react-router-dom';
// Composants
import fond from './assets/photo/fond.mp4'
import Rooter from './refonte/Router'
import { ElfsightWidget } from 'react-elfsight-widget';

export default function App() {

    return (
        <BrowserRouter>
            <div id='main'>
                <ElfsightWidget widgetId="a5142191-17bd-4a6e-a41f-e3e7bdb0f3a0" lazy modern className='rating'/>
                <div className="bg">
                    <video src={fond} autoPlay loop muted alt="Des vagues dans l'océan" type="video/mp4"/>
                    <Rooter />
                </div>
            </div>
        </BrowserRouter>
    )
}