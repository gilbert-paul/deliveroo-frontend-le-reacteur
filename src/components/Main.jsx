import axios from "axios";
import Menus from "./Menus";
import { useEffect, useState } from "react";
const urlBackend = import.meta.env.VITE_APP_BACKEND_URL
const urlSearched ="/menu/Paris/Pasteur/bidit-risheb?day=today&geohash=u09tvw0pz5kn&time=ASAP"

let result = [];
const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(urlBackend+urlSearched)
        .then((response) => {
          result = response.data;
          setIsLoading(true);
        })
        .catch((error) => {return error});
    };
    fetchData();
  }, []);
  console.log(result)
  return (
    <main>
      {isLoading ? (
        <div className="container">
          <Menus restaurant={result} />
        </div>
      ) : (
        <div className="__isLoading"><h2>Is Loading</h2><i className="fa-solid fa-spinner fa-spin"></i></div>
      )}
    </main>
  );
};

export default Main;
