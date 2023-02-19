import { useState } from "react";
import searchImages from "./API/searchImages";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (userSearch) => {
    const result = await searchImages(userSearch);

    setImages(result);
  };

  return (
    <div className="container is-fluid">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
