import React, { useState } from "react";
import { Stack, Box, TextField, Typography } from "@mui/material";
import QRCode from "qrcode.react";
const generatePayload = require("promptpay-qr");

function PromtpayBox() {
  const [amount, setAmount] = useState(1.0);
  const [qrCode, setqrCode] = useState("sample");

  const promtpayNumber = "0828377840";

  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }
  function handleQR(e) {
    e.preventDefault();
    setqrCode(generatePayload(promtpayNumber, { amount }));
  }
  return (
    <div>
      <Box component="form" onSubmit={handleQR}>
        <Stack spacing={2} alignItems={"center"} sx={{ width: "100%" }}>
          <img src="\asset\wallpaper.jpg" style={{ height: "200px" }} />
          <QRCode value={qrCode} size={384} />
          <Typography>จำนวนเงิน {amount} บาท</Typography>
          <Typography>หมายเลขพร้อมเพย์ = {promtpayNumber}</Typography>
          <TextField type="number" value={amount} onChange={handleAmount} />
          <button onClick={handleQR}>สร้าง QR Code</button>
        </Stack>
      </Box>
    </div>
  );
}

export default PromtpayBox;
