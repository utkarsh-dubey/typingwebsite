import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/global";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComparePage from "./Pages/ComparePage";


function App() {
  const {theme} = useTheme();
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/compare/:username' element={<ComparePage/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
