import './App.css';
import ColorPicker from './components/ColorPicker';

const colors = ["red", "blue", "green" , "pink" , "purple" , "violet","black","white"];

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Color Picker</h1>
    <ColorPicker colors={colors} />
    </div>
  );

}

export default App;
