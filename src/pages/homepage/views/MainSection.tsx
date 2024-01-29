import { useState } from "react";
import { Box, TextField, Fab, Grid } from "@mui/material";
import Typography from "../components/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "@/assets/images/CardPlaceholder.svg";
import { VisuallyHiddenInput } from "../components";
import { useCardReader } from "../hooks";

export function MainSection() {
  const [image, setImage] = useState("");
  const { fields, isLoading, startReading } = useCardReader();

  const handleTestCardRead = () => {
    const testImage = "/public/uk-id-card.webp";
    setImage(testImage);
    startReading(testImage);
  };

  const uploadedFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      // Create a URL pointing to the selected file
      var fileUrl = URL.createObjectURL(event.target.files[0]);
      setImage(fileUrl);
      startReading(fileUrl);
    }
  };

  const renderFields = () => {
    let output = [];
    for (const label in fields) {
      output.push(
        <TextField key={label} label={label} defaultValue={fields[label]} />
      );
    }
    return output;
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography color="primary" variant="h1" marked="center">
        Card OCR tool
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Fab
          component="label"
          variant="extended"
          color="primary"
          sx={{ mr: 2 }}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Unload a card
          <VisuallyHiddenInput type="file" onChange={uploadedFileChanged} />
        </Fab>

        <Fab onClick={handleTestCardRead} variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Test card
        </Fab>

        <Grid container spacing={2} sx={{ my: { xs: 2, sm: 5 } }}>
          <Grid item xs={6} md={4}>
            {image && (
              <img src={image} alt="Card reader Hero logo" width="100%" />
            )}
          </Grid>

          <Grid item xs={6} md={8}>
            <Box>
              {isLoading ? <CircularProgress sx={{ mt: 4 }} /> : ""}

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {fields && renderFields()}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <img src={backgroundImage} alt="Card reader Hero logo" width="100%" />

      <Typography
        color="primary"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best Card readers.
      </Typography>
    </Box>
  );
}
