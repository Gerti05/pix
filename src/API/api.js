import axios from "axios";

const searchImages = async (userSearch) => {
  const response = await axios.get("https://api.unsplas.com/search/photos", {
    headers: {
      Authorization: "Client-ID XzaG7LjAttjLWOPzbh3TQvH9uhbOfthQQ_69ti0ILPs",
    },
    params: {
      query: userSearch,
    },
  });

  return response;
};

export default searchImages;