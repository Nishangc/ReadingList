import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToogle from "./components/ThemeToogle";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
import BookAddForm from "./components/BookAddForm";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <Booklist />
          <BookAddForm />
        </BookContextProvider>
        <ThemeToogle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
