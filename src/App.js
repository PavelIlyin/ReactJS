import './App.css';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';

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

  const { name } = useSelector(state => state.profile)

  return (
    <ThemeProvider theme={theme}>
      <div className="App-home">
        {name}, Hello!
      </div>
    </ThemeProvider>
  );
}

export default App;


