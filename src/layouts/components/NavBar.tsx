import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";

export function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="https://github.com/anasalpure" target="_blank">
            <IconButton>
              <GitHubIcon sx={{ mr: 0.5, fill: "#fff" }} />
            </IconButton>
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Card Reader
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Go to Linkedin">
              <Link
                href="https://www.linkedin.com/in/anasalpure/"
                target="_blank"
              >
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="Anas Alpure"
                    src="https://media.licdn.com/dms/image/D5603AQFs1pV_6vuh0w/profile-displayphoto-shrink_100_100/0/1681204292621?e=1711584000&v=beta&t=LKNFOMIBE0cF1Ikrat9qrtb8p83JWCbAmQF0YbQfAIc"
                  />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
