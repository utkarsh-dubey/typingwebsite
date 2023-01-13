import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./Styles/global";
import { useTheme } from "./Context/ThemeContext";
var randomWords = require('random-words');

function App() {

  const words = randomWords(100);
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
        <GlobalStyles/>
        <h1>Header</h1>
        <TypingBox words={words}/>
        <Footer/>
      </div>
    </ThemeProvider> 
  );
}

export default App;
