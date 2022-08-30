import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.USPLASH_ACCESS_KEY,
});

export const fetchCoffeeStores = async () => {
  const photos = await getListOffCoffeeStoresPhotos();
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(
      "-0.18346382959527824%2C-78.47934982264758",
      "coffee",
      "30"
    ),
    options
  );
  // .catch((err) => console.error(err));
  const data = await response.json();
  return data.results.map((result, idx) => {
    return {
      ...result,
      imgUrl: photos[idx],
    };
  });
};

const getUrlForCoffeeStores = (latlong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`;
};

const getListOffCoffeeStoresPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "coffee stores",
    page: 2,
    perPage: 30,
  });
  //   console.log(photos.response);
  return photos.response.results.map((result) => result.urls.regular);
};
