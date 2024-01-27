import { useState } from "react";
import { Box, Fab, Grid } from "@mui/material";
import Typography from "../components/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "@/assets/images/CardPlaceholder.svg";
import { VisuallyHiddenInput } from "../components";
import { useCardReader } from "../hooks";

export function MainSection() {
  const [image, setImage] = useState(
    "http://localhost:5173/public/uk-id-card.webp"
  );
  const { fields, isLoading, startReading } = useCardReader();

  const handleCardRead = () => {
    startReading(image);
  };

  const uploadedFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
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

        <Fab onClick={handleCardRead} variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Test card
        </Fab>
        <Grid container spacing={2} sx={{ my: { xs: 2, sm: 5 } }}>
          <Grid item xs={6} md={4}>
            {image && <img src={image} alt="Card reader Hero logo" />}
          </Grid>
          <Grid item xs={6} md={8}>
            <Box>
              {isLoading ? <CircularProgress sx={{ mt: 4 }} /> : ""}

              <Typography
                color="primary"
                variant="h4"
                sx={{
                  mt: { xs: 2, sm: 5 },
                  wordWrap: "break-word",
                }}
              >
                fields
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <img src={backgroundImage} alt="Card reader Hero logo" />

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
