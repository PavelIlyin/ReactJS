import './App.css';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';
import { profileSelector } from './Selectors/profile';
import { Link } from 'react-router-dom';


const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
    typography: {
      fontSize: 22,
    },
  });

  const { name } = useSelector(profileSelector)

  return (
    <ThemeProvider theme={theme}>
      <div className="App-home">
        <p>{name}, Hello!</p>
        <p>You are in the messenger!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;


