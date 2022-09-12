import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ViewHome from "./views/ViewHome";
import ViewLogin from "./views/ViewLogin";
import ViewRegistration from "./views/ViewRegistration";
import ViewDetails from "./views/ViewDetails";
import ViewNoMatch from "./views/ViewNoMatch";
import ViewSearchResults from "./views/ViewSearchResults";
import { Route, Routes } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <SimpleGrid columns={"1"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<ViewHome />} />
            <Route path="/login" element={<ViewLogin />} />
            <Route path="/registration" element={<ViewRegistration />} />
            <Route path="/movie/:title" element={<ViewDetails />} />
            <Route path="/search/:input" element={<ViewSearchResults />} />
            <Route path="*" element={<ViewNoMatch />} />
          </Routes>
          <Footer />
        </SimpleGrid>
      </AuthContextProvider>
    </div>
  );
}

export default App;
