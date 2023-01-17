import { ThemeProvider } from "styled-components";
import Footer from "../Components/Footer";
import TypingBox from "../Components/TypingBox";
import { GlobalStyles } from "../Styles/global";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import Header from "../Components/Header";
var randomWords = require('random-words');

function HomePage() {

  const words = randomWords(100);
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
        <GlobalStyles/>
        <Header/>
        <TypingBox words={words}/>
        <Footer/>
      </div>
    </ThemeProvider> 
  );
}

export default HomePage;