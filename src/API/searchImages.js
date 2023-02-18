import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID XzaG7LjAttjLWOPzbh3TQvH9uhbOfthQQ_69ti0ILPs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
