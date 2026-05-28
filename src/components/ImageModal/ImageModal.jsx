import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import React, { useState, useRef, useEffect } from "react";
import HeroImg from "../../../public/IMG_8265.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const img = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  cursor: "pointer",
};

const closeBtn = {
  position: "absolute",
  top: 0,
  right: "1px",
};

const fullscreenBtn = {
  position: "absolute",
  bottom: "10px",
  right: "10px",
  bgcolor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  "&:hover": {
    bgcolor: "rgba(0, 0, 0, 0.7)",
  },
  minWidth: "40px",
  padding: "8px",
};

export default function ImageModal({ setImageModalOpen }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRef = useRef(null);

  const handleFullscreen = async () => {
    if (!isFullscreen) {
      try {
        await imageRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Error entering fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error("Error exiting fullscreen:", err);
      }
    }
  };

  // Handle when user exits fullscreen using ESC key
  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Button onClick={() => setImageModalOpen(false)} sx={closeBtn}>
            <CloseIcon color="action" />
          </Button>

          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <img ref={imageRef} style={img} src={HeroImg} alt="Hero_Img" />

            <Button onClick={handleFullscreen} sx={fullscreenBtn}>
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
