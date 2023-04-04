import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";
import { Radio, FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

function StoreInfo() {
  const router = useRouter();

  const store = router.query;

  console.log(store);

  return (
    <>
      <h1>店舗情報</h1>
      <h2>{store.name}</h2>
      <img src={store.logo_image} />
      <p>{store.open}</p>
      <p>{store.address}</p>
    </>
  );
}

export default StoreInfo;
