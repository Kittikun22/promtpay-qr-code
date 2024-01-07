import React from "react";
import PromtpayBox from "../component/PromtpayBox";
import { Box, Stack } from "@mui/material";

function Home() {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "#FBF0B2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "65%" },
            background: "#fff",
            borderRadius: 3,
            boxShadow: 1,
            pb: 2,
          }}
        >
          <Stack sx={{ overflow: "hidden" }} spacing={2}>
            <img
              src="\asset\wallpaper.jpg"
              alt="เต่างอยอาหารสัตว์"
              style={{
                height: "200px",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <PromtpayBox />
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
