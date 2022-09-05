import "./App.css";
import ViewHome from "./views/ViewHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ViewLogin from "./views/ViewLogin";
import ViewDetails from "./views/ViewDetails";
import NoMatch from "./views/NoMatch";
import { Route, Routes } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <SimpleGrid columns={"1"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/login" element={<ViewLogin />} />
          <Route path="/movie/*" element={<ViewDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </SimpleGrid>
    </div>
  );
}

export default App;
