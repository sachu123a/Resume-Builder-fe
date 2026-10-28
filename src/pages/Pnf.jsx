
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import {
  HomeRounded,
  ArrowBackRounded,
  RocketLaunchRounded,
  PublicRounded,
  AutoAwesomeRounded,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// 1. Astronaut floating animation
const astronautFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  25% { transform: translate(12px, -18px) rotate(2deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
  75% { transform: translate(-12px, -12px) rotate(-2deg); }
`;

// 2. Rotating orbit
const orbit = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 3. Smooth entrance
const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`;

// 4. Animated gradient
const gradientFlow = keyframes`
  from { background-position: 0% 50%; }
  to { background-position: 200% 50%; }
`;

// 5. Shooting meteors
const meteor = keyframes`
  0% {
    transform: translate(0, 0) rotate(-35deg);
    opacity: 0;
  }
  10% { opacity: 1; }
  70% { opacity: 1; }
  100% {
    transform: translate(-650px, 420px) rotate(-35deg);
    opacity: 0;
  }
`;

// 6. Glowing effect
const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(112, 100, 255, .2);
  }
  50% {
    box-shadow: 0 0 38px rgba(112, 100, 255, .65);
  }
`;

// 7. Star twinkle
const twinkle = keyframes`
  0%, 100% {
    opacity: .2;
    transform: scale(.7);
  }
  50% {
    opacity: 1;
    transform: scale(1.4);
  }
`;

// 8. Planet floating
const planetFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-22px); }
`;

// 9. Glitch effect
const glitch = keyframes`
  0%, 94%, 100% { transform: translateX(0); }
  95% { transform: translateX(-4px); }
  96% { transform: translateX(4px); }
  97% { transform: translateX(-2px); }
`;

// 10. Background nebula movement
const nebulaMove = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(35px, -25px) scale(1.15); }
`;

const stars = [
  { top: "8%", left: "10%", size: 3 },
  { top: "18%", left: "80%", size: 4 },
  { top: "35%", left: "6%", size: 3 },
  { top: "72%", left: "13%", size: 4 },
  { top: "85%", left: "83%", size: 3 },
  { top: "12%", left: "55%", size: 2 },
  { top: "58%", left: "92%", size: 4 },
  { top: "90%", left: "43%", size: 3 },
  { top: "6%", left: "35%", size: 2 },
  { top: "45%", left: "22%", size: 3 },
  { top: "75%", left: "65%", size: 2 },
  { top: "28%", left: "94%", size: 3 },
  { top: "63%", left: "48%", size: 3 },
  { top: "22%", left: "30%", size: 2 },
  { top: "93%", left: "72%", size: 3 },
  { top: "48%", left: "76%", size: 2 },
  { top: "14%", left: "68%", size: 3 },
  { top: "80%", left: "28%", size: 2 },
];

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#050713",
        color: "#fff",
        px: 2,
        py: 5,
        isolation: "isolate",
      }}
    >
      {/* Animated nebula background */}
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 280, md: 520 },
          height: { xs: 280, md: 520 },
          top: "-12%",
          left: "15%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,72,255,.24), rgba(44,116,255,.08) 45%, transparent 70%)",
          filter: "blur(35px)",
          animation: `${nebulaMove} 9s ease-in-out infinite`,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 300, md: 550 },
          height: { xs: 300, md: 550 },
          bottom: "-20%",
          right: "-8%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157,51,255,.2), rgba(25,70,210,.07) 50%, transparent 70%)",
          filter: "blur(40px)",
          animation: `${nebulaMove} 12s ease-in-out infinite reverse`,
          pointerEvents: "none",
        }}
      />

      {/* Twinkling stars */}
      {stars.map((star, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            bgcolor: "#fff",
            boxShadow: "0 0 8px #a9b8ff",
            animation: `${twinkle} ${
              2 + (index % 3)
            }s ease-in-out ${(index % 5) * 0.4}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Shooting meteors */}
      {[0, 1, 2].map((item) => (
        <Box
          key={item}
          sx={{
            position: "absolute",
            top: `${10 + item * 24}%`,
            right: "-100px",
            width: 130,
            height: 2,
            borderRadius: 5,
            background:
              "linear-gradient(90deg, transparent, #a68aff, #fff)",
            boxShadow: "0 0 12px #8d7aff",
            animation: `${meteor} ${4 + item}s linear ${
              item * 2
            }s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating planet */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "7%", md: "12%" },
          left: { xs: "5%", md: "12%" },
          color: "#7975ff",
          animation: `${planetFloat} 5s ease-in-out infinite`,
          pointerEvents: "none",
        }}
      >
        <PublicRounded
          sx={{
            fontSize: { xs: 45, md: 75 },
            filter: "drop-shadow(0 0 18px rgba(121,117,255,.5))",
          }}
        />
      </Box>

      {/* Small orbiting planet */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "15%", md: "20%" },
          right: { xs: "12%", md: "22%" },
          width: 70,
          height: 70,
          animation: `${orbit} 8s linear infinite`,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            bgcolor: "#51e2ff",
            boxShadow: "0 0 20px #51e2ff",
          }}
        />
      </Box>

      {/* Decorative planet */}
      <Box
        sx={{
          position: "absolute",
          bottom: "12%",
          left: { xs: "8%", md: "20%" },
          width: { xs: 35, md: 60 },
          height: { xs: 35, md: 60 },
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #fa91df, #7554ff 65%, #302a85)",
          boxShadow: "0 0 35px rgba(164,90,255,.3)",
          animation: `${planetFloat} 7s ease-in-out 1s infinite`,
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          {/* Animated astronaut icon */}
          <Box
            sx={{
              width: { xs: 85, md: 110 },
              height: { xs: 85, md: 110 },
              mx: "auto",
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "32px",
              border: "1px solid rgba(158,151,255,.25)",
              background: "rgba(255,255,255,.045)",
              backdropFilter: "blur(10px)",
              animation: `${astronautFloat} 5s ease-in-out infinite, ${glowPulse} 4s ease-in-out infinite`,
            }}
          >
            <RocketLaunchRounded
              sx={{
                fontSize: { xs: 48, md: 62 },
                color: "#aaa2ff",
                transform: "rotate(-40deg)",
                filter: "drop-shadow(0 0 12px rgba(145,120,255,.6))",
              }}
            />
          </Box>

          {/* Animated 404 */}
          <Typography
            sx={{
              fontSize: { xs: 105, sm: 155, md: 190 },
              fontWeight: 900,
              letterSpacing: { xs: "-5px", md: "-10px" },
              lineHeight: 1,
              mb: 2,
              background:
                "linear-gradient(90deg, #8c7bff, #4de5ed, #e28bff, #8c7bff)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter:
                "drop-shadow(0 0 25px rgba(120,100,255,.2))",
              animation: `${gradientFlow} 5s linear infinite, ${glitch} 7s steps(1) infinite, ${reveal} 1s ease-out both`,
            }}
          >
            404
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 27, md: 40 },
              fontWeight: 750,
              mb: 2,
              animation: `${reveal} 1s .15s both`,
            }}
          >
            Lost in Space?
          </Typography>

          <Typography
            sx={{
              maxWidth: 490,
              mx: "auto",
              color: "#aeb5d0",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.9,
              mb: 4,
              animation: `${reveal} 1s .3s both`,
            }}
          >
            Oops! The page you're looking for has drifted
            away into the universe. Let's navigate you
            back to familiar territory.
          </Typography>

          {/* Animated buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ animation: `${reveal} 1s .45s both` }}
          >
            <Button
              variant="contained"
              startIcon={<HomeRounded />}
              onClick={() => navigate("/")}
              sx={{
                px: 3.5,
                py: 1.5,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                background:
                  "linear-gradient(100deg, #6557ed, #8875ff)",
                backgroundSize: "200% auto",
                boxShadow: "0 0 22px rgba(112,100,255,.3)",
                transition: "transform .3s ease, box-shadow .3s ease",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.03)",
                  boxShadow: "0 8px 32px rgba(112,100,255,.5)",
                  backgroundPosition: "100% 50%",
                },
              }}
            >
              Back to Home
            </Button>

            <Button
              variant="outlined"
              startIcon={<ArrowBackRounded />}
              onClick={() => navigate(-1)}
              sx={{
                px: 3.5,
                py: 1.5,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                borderColor: "rgba(173,165,255,.5)",
                background: "rgba(255,255,255,.025)",
                transition: "all .3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "#aaa2ff",
                  background: "rgba(120,105,255,.12)",
                  boxShadow: "0 0 25px rgba(112,100,255,.2)",
                },
              }}
            >
              Go Back
            </Button>
          </Stack>

          {/* Footer status */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 6,
              color: "#858ca9",
              animation: `${reveal} 1s .6s both`,
            }}
          >
            <AutoAwesomeRounded
              sx={{
                fontSize: 17,
                color: "#9c91ff",
                animation: `${orbit} 8s linear infinite`,
              }}
            />
            <Typography
              variant="caption"
              sx={{ letterSpacing: { xs: 1, sm: 2 } }}
            >
              ERROR CODE: 404 • LOST IN THE UNIVERSE
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
