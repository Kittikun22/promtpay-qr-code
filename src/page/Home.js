import React from "react";
import PromtpayBox from "../component/PromtpayBox";
import { Box } from "@mui/material";

function Home() {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "rgb(14, 55, 70)",
        }}
      >
        <Box
          mx={{ xs: 5, lg: 15 }}
          sx={{
            background: "#fff",
            borderRadius: 5,
            boxShadow: 1,
            backgroundColor: "pink",
          }}
        >
          <PromtpayBox />
        </Box>
      </Box>
    </div>
  );
}

export default Home;
