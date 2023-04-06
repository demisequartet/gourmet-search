import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";
import { Radio, FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

function Form() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    // console.log(`formからのデータ: ${data.name} ${data.number}`);

    router.push({
      pathname: "components/SearchResult",
      query: { ...data },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "10px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField label="キーワード" fullWidth {...register("name")} />
          </Grid>
          <Grid item xs={12}>
            <FormLabel id="demo-radio-buttons-group-label">現在地からの距離</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="1"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="300m"
                {...register("number")}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="500m"
                {...register("number")}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="1000m"
                {...register("number")}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="2000m"
                {...register("number")}
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="3000m"
                {...register("number")}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              店舗を調べる
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Form;
