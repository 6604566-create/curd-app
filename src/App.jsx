import {
  Container,
  Typography,
  CssBaseline,
  Box,
  ThemeProvider,
  createTheme,
  Paper,
  Divider,
  Link,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, InfoOutlined, Code, Bolt, TrendingUp } from "@mui/icons-material";
import UserTable from "./components/UserTable";


// ===== THEME =====
const theme = createTheme({
  palette: {
    primary: { main: "#00E676" },
    secondary: { main: "#00C853" },
    background: { default: "#000000", paper: "rgba(15,15,15,0.95)" },
    text: { primary: "#E0E0E0", secondary: "#BDBDBD" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h3: { fontWeight: 700 },
    h5: { fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "rgba(20,20,20,0.95)",
          border: "1px solid rgba(0,230,118,0.3)",
          boxShadow: "0 0 25px rgba(0,230,118,0.1)",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #000000 0%, #002b00 100%)",
          overflow: "hidden",
        }}
      >
        {/* ===== HEADER ===== */}
        <Box
          sx={{
            width: "100%",
            py: 2,
            textAlign: "center",
            borderBottom: "1px solid rgba(0,230,118,0.2)",
            background: "rgba(10,10,10,0.85)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#00E676",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(0,230,118,0.6)",
              letterSpacing: 1,
            }}
          >
            User Management Dashboard
          </Typography>
        </Box>

        {/* ===== MAIN CONTENT ===== */}
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1,
            py: 6,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {/* LEFT: USER TABLE */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: "#00E676",
                      textAlign: "center",
                      fontWeight: 700,
                      mb: 3,
                      textShadow: "0 0 10px rgba(0,230,118,0.6)",
                    }}
                  >
                    Manage Users
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 3,
                      color: "text.secondary",
                      textAlign: "center",
                    }}
                  >
                    Add, edit, and manage your users efficiently ⚡
                  </Typography>
                  <Divider sx={{ mb: 3, borderColor: "rgba(0,230,118,0.3)" }} />
                  <UserTable />
                </Paper>
              </motion.div>
            </Grid>

            {/* RIGHT: ABOUT PROJECT */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(15,15,15,0.95)",
                    border: "1px solid rgba(0,230,118,0.3)",
                    boxShadow: "0 0 25px rgba(0,230,118,0.15)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Section: About */}
                  <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                    <InfoOutlined sx={{ color: "#00E676" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#00E676",
                        fontWeight: 700,
                        textShadow: "0 0 10px rgba(0,230,118,0.5)",
                      }}
                    >
                      About This Project
                    </Typography>
                  </Stack>

                  <Typography variant="body1" paragraph sx={{ color: "#BDBDBD", lineHeight: 1.8 }}>
                    This is a sleek and futuristic{" "}
                    <b style={{ color: "#00E676" }}>User Management System</b> built
                    using <b style={{ color: "#00E676" }}>React.js</b> and{" "}
                    <b style={{ color: "#00E676" }}>Material-UI</b> on the front end,
                    with a <b style={{ color: "#00E676" }}>Node.js + MongoDB</b> backend.
                  </Typography>

                  {/* Section: Overview */}
                  <Divider sx={{ my: 2, borderColor: "rgba(0,230,118,0.3)" }} />
                  <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Code sx={{ color: "#00E676" }} />
                    <Typography variant="h6" sx={{ color: "#00E676", fontWeight: 600 }}>
                      Project Overview
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: "#BDBDBD", lineHeight: 1.8 }}>
                    The dashboard enables administrators to manage user data through an
                    intuitive interface. All CRUD (Create, Read, Update, Delete)
                    operations are handled seamlessly with real-time UI updates and
                    proper validation.
                  </Typography>

                  {/* Section: Features */}
                  <Divider sx={{ my: 2, borderColor: "rgba(0,230,118,0.3)" }} />
                  <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Bolt sx={{ color: "#00E676" }} />
                    <Typography variant="h6" sx={{ color: "#00E676", fontWeight: 600 }}>
                      Key Highlights
                    </Typography>
                  </Stack>

                  <ul
                    style={{
                      color: "#BDBDBD",
                      lineHeight: "1.8em",
                      margin: 0,
                      paddingLeft: "1.2em",
                    }}
                  >
                    <li>⚡ Add, edit, and delete users with instant feedback</li>
                    <li>🧩 Responsive and modern MUI components</li>
                    <li>🌐 Integrated with RESTful Express backend</li>
                    <li>🔐 MongoDB-based secure data handling</li>
                  </ul>

                  {/* Section: Future Enhancements */}
                  <Divider sx={{ my: 2, borderColor: "rgba(0,230,118,0.3)" }} />
                  <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <TrendingUp sx={{ color: "#00E676" }} />
                    <Typography variant="h6" sx={{ color: "#00E676", fontWeight: 600 }}>
                      Future Enhancements
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: "#BDBDBD", lineHeight: 1.8 }}>
                    🚀 Role-based authentication and authorization <br />
                    🌙 Theme customization (light/dark modes) <br />
                    📈 Analytics dashboard for user insights <br />
                    🔔 Notification and activity log integration
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* ===== FOOTER ===== */}
        <Box
          sx={{
            width: "100%",
            py: 3,
            textAlign: "center",
            background: "rgba(5,20,5,0.85)",
            borderTop: "1px solid rgba(0,230,118,0.15)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ mb: 1 }}
          >
            <IconButton
              component={Link}
              href="https://github.com/adimehta0602"
              target="_blank"
              sx={{
                color: "#00E676",
                "&:hover": { color: "#76FF03", transform: "scale(1.2)" },
                transition: "all 0.3s ease",
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/adimehta"
              target="_blank"
              sx={{
                color: "#00E676",
                "&:hover": { color: "#76FF03", transform: "scale(1.2)" },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>

          <Typography variant="body2" sx={{ color: "#BDBDBD" }}>
            © {new Date().getFullYear()} <b>Aditya Mehta</b> | Built with 💚 using
            React & MUI
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
