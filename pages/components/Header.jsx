//ヘッダーを作成
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">グルメサーチ</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
