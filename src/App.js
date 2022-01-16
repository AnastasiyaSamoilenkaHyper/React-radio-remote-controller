import './App.css';
import Page from './components/Main Page/Page'
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";


function App() {
 
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
