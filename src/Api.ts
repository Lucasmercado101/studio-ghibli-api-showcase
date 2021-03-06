import axios from "axios";

const corsAnywhere = "";
// const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

const axiosInstance = axios.create({
  // baseURL: "https://ghibliapi.herokuapp.com"
  baseURL: `${corsAnywhere}https://ghibliapi.herokuapp.com`
});

export const getFilms = function () {
  return axiosInstance.get<Films>("/films").then((resp) => resp.data);
};

export const getPeople = function () {
  return axiosInstance.get<People>("/people").then((resp) => resp.data);
};

export const getSpecies = function () {
  return axiosInstance.get<Species[]>("/species").then((resp) => resp.data);
};

export const getVehicles = function () {
  return axiosInstance.get<Vehicles>("/vehicles").then((resp) => resp.data);
};

export const getLocations = function () {
  return axiosInstance
    .get<APILocations>("/locations")
    .then((resp) => resp.data);
};

export const getSpeciesByID = function (urlWithId: string) {
  return axiosInstance
    .get<Species>(corsAnywhere + urlWithId)
    .then((resp) => resp.data);
};

export const getFilmById = function (urlWithId: string) {
  return axiosInstance
    .get<Film>(corsAnywhere + urlWithId)
    .then((resp) => resp.data);
};

export const getPersonById = function (urlWithId: string) {
  return axiosInstance
    .get<Person>(corsAnywhere + urlWithId)
    .then((resp) => resp.data);
};

// -----------------------------------

export const fetchUrls = async <T>(urls: string[]) => {
  return await Promise.all(
    urls.map((url) =>
      axios.get<T>(corsAnywhere + url).then((resp) => resp.data)
    )
  );
};
