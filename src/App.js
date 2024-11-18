import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const theme = createTheme();

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [text, setText] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    alert(
      `Selected Date: ${selectedDate?.toLocaleDateString()}\nEntered Text: ${text}`
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        style={{ marginTop: "2rem", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          React MUI Sample
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Enter Text"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select a Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
