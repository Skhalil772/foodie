import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/createItem" element={<Create />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
