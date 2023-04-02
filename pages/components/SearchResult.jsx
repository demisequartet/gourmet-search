import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function SearchResult() {
  const router = useRouter();
  const data = JSON.parse(router.query.formData);

  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    //位置情報取得
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`latitude: ${position.coords.latitude} longitude: ${position.coords.longitude}`);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    const apikey = "014d83b70fa0a10e";
    const query = `?key=${apikey}&format=json&lat=${latitude}&lng=${longitude}&range=${data.number}&count=100`;
    const url = "/api/hello/" + query;

    axios
      .get(url)
      .then(function (response) {
        // handle success
        setStores(response.data.results.shop);
        console.log("stores");
        console.log(response.data.results.shop);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [latitude, longitude, data.number]);

  return <div>aaaaaaaa</div>;
}

export default SearchResult;
