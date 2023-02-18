import searchImages from "./API/searchImages";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import ImageShow from "./components/ImageShow";

function App() {
  const handleSubmit = async (userSearch) => {
    const result = await searchImages(userSearch);
    ImageList(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageShow />
    </div>
  );
}

export default App;
