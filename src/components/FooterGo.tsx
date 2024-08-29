import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";

/*
const FooterGo: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div>
        <div className="px-5">
          <div className="my-8">
            <div className="w-20 h-20 bg-red-100">

            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div>
              <div className="bg-gray-400 text-white px-4 py-2 text-lg rounded-full">Español</div>
              </div>
            <IconButton
              aria-label="delete"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FacebookIcon />
            </IconButton>
            </div>
            <div className="flex space-x-3">
                <div className="bg-gray-800 text-white px-4 py-2 text-lg rounded-full cursor-pointer">Google Play</div>
                <div className="bg-gray-800 text-white px-4 py-2 text-lg rounded-full cursor-pointer">App Store</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};*/

const FooterGo: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div className=" px-20 my-8">
        <div className="flex items-center">
          <div className="h-1 w-3/6 bg-purple-300 rounded-full">

          </div>
          <div className="flex">
            <IconButton
              aria-label="delete"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FacebookIcon />
            </IconButton>
          </div>
          <div className="h-1 w-3/6 bg-purple-300 rounded-full">

          </div>
        </div>
        <div>

        </div>
        <div className="text-center">
        <div className="text-xl mt-4 text-purple-500">
            Copyright @ 2024 InfluGo
        </div>
        <div className="flex space-x-3 text-xl justify-center text-purple-500 font-bold mt-5 underline">
          <div className="cursor-pointer">
          Informacion legal
          </div>
          <div>|</div>
          <div className="cursor-pointer">Politica de privacidad</div>
        </div>
        </div>
        
      </div>
    </Box>
  );
};

export default FooterGo;
