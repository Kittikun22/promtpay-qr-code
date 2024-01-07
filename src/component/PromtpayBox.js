import React, { useState, useEffect } from "react";
import {
  Stack,
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import QRCode from "qrcode.react";
import DoneIcon from "@mui/icons-material/Done";
import { motion } from "framer-motion";

const generatePayload = require("promptpay-qr");

function PromtpayBox() {
  const [active, setActive] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [qrCode, setqrCode] = useState("sample");
  const [qrCodeSize, setQrCodeSize] = useState(getInitialSize);

  function getInitialSize() {
    return window.innerWidth < 600 ? 256 : 384;
  }

  useEffect(() => {
    function handleResize() {
      setQrCodeSize(getInitialSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const promtpayNumber = "085-465-1855";

  const formattedNumber = (num) => {
    num = num.toLocaleString("th-TH", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return num;
  };

  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }

  const handleQRSubmit = (e) => {
    e.preventDefault();
    setqrCode(generatePayload(promtpayNumber, { amount }));
    setActive(true);
  };

  function handleFinish(e) {
    e.preventDefault();
    setAmount(0.0);
    setActive(false);
  }

  return (
    <div style={{ minHeight: "60vh" }}>
      {active ? (
        <motion.div
          className="container"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          <Stack spacing={2} alignItems={"center"} sx={{ width: "100%" }}>
            <QRCode value={qrCode} size={qrCodeSize} />
            <Typography variant="h5">
              จำนวนเงิน: {formattedNumber(amount)} บาท
            </Typography>
            <Typography variant="h5">
              หมายเลขพร้อมเพย์: {promtpayNumber}
            </Typography>
            <Button
              onClick={handleFinish}
              variant="contained"
              color="success"
              size="large"
              sx={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
                minWidth: "150px",
              }}
              startIcon={<DoneIcon />}
            >
              สำเร็จ
            </Button>
          </Stack>
        </motion.div>
      ) : (
        <Box component="form" onSubmit={handleQRSubmit}>
          <Stack
            spacing={2}
            mt={10}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Typography variant="h6">กรอกจำนวนเงิน</Typography>
            <TextField
              size="small"
              type="float"
              value={amount}
              onChange={handleAmount}
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">บาท</InputAdornment>
                ),
              }}
            />
            <Button
              onClick={handleQRSubmit}
              variant="contained"
              color="success"
              size="large"
              disabled={amount === 0 ? true : false}
              sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
            >
              สร้าง QR Code
            </Button>
          </Stack>
        </Box>
      )}
    </div>
  );
}

export default PromtpayBox;
