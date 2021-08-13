import { useState } from "react";
import FilterComponent from "./filter";
import Footer from "./navigation/Footer";
import Navbar from "./navigation/Nav";
import AllProducts from "./products";

function App() {
  const [filterValue, setFilterValue] = useState('');
  const onFilter = e => setFilterValue(e.target.value);

  return (
    <div className="app">
      <Navbar />
      <main>
        <FilterComponent
          setValue={onFilter}
          filterValue={filterValue}   
        />
        <AllProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
