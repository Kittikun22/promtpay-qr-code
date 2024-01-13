import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "delete"];
function PinNumber({ amount, setAmount }) {
  function setNum(num) {
    const text = amount.toString();
    if (num !== "delete") {
      const newValue = text + num;
      setAmount(parseFloat(newValue));
    } else {
      const newValue = text.slice(0, -1);
      if (newValue === 0 || newValue === "") {
        setAmount(parseFloat(0));
      } else {
        setAmount(parseFloat(newValue));
      }
    }
  }
  return (
    <div>
      <Grid container spacing={1}>
        {numberList?.map((num) => {
          return (
            <Grid item xs={4}>
              {num !== "" ? (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => setNum(num)}
                  sx={{ height: "45px" }}
                >
                  {num === "delete" ? (
                    <BackspaceIcon />
                  ) : (
                    <Typography sx={{ fontSize: "1.5rem" }}>{num}</Typography>
                  )}
                </Button>
              ) : null}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default PinNumber;
