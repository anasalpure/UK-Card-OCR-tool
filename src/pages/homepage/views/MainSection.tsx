import { Box, Fab } from "@mui/material";
import Typography from "../components/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import backgroundImage from "@/assets/images/CardPlaceholder.svg";
import { VisuallyHiddenInput } from "../components";

export function MainSection() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography color="primary" variant="h1" marked="center">
        Card OCR tool
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Fab component="label" variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Unload a card
          <VisuallyHiddenInput type="file" />
        </Fab>
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
