// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//axiosをimport
import axios from "axios";

export default function handler(req, res) {
  const url = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?";
  const apikey = "014d83b70fa0a10e";

  // const queryString = `?key=${apikey}&format=json&large_area=Z011&keyword=肉&count=10`;

  const queryString = new URLSearchParams(req.query);

  console.log(req.query);

  axios
    .get(url + queryString)
    .then(function (response) {
      // handle success
      console.log("success");
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
