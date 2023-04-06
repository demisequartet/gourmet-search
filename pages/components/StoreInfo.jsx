import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";
import { Radio, FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

//materialUI関連
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function StoreInfo() {
  const router = useRouter();

  const store = router.query;

  console.log(store);

  return (
    <>
      <h1>{store.name}</h1>
      <img src={store.logo_image} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableRow>
            <TableCell>アクセス</TableCell>
            <TableCell>{store.access}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>住所</TableCell>
            <TableCell>{store.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>定員</TableCell>
            <TableCell>{store.capacity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>営業時間</TableCell>
            <TableCell>{store.open}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
}

export default StoreInfo;
