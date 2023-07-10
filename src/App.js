import "./App.css";
import Student from "./pages/Student";
import ThemeContext from "./context/theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Student />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
