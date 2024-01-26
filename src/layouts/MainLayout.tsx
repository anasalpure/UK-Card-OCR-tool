import { Box, Container } from "@mui/material";
import { NavBar } from "./components";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
    </>
  );
};
