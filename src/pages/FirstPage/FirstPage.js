import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "../../Darkmode/ThemeContext";
import { motion } from "framer-motion";
import Text from "../component/Text";

const inter = Inter({ subsets: ["latin"] });

const FirstPage = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="">
      <div className="h-screen">
        <div className="grid grid-cols-2 max-md:grid-cols-1 ">
          <div className="p-44 md:pr-0 max-[1170px]:p-[1rem] max-[1170px]:mt-40">
            <div className="max-md:absolute max-md:top-[350px] max-md:mt-20 w-[90%]">
              <motion.h1
                className={`${
                  inter.className
                } text-[32px]  max-sm:text-[20px] font-bold sm:leading-[32px] uppercase ${
                  isLightMode ? "" : "text-black"
                }`}
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                }}
              >
                I,M A GRAPHIC DESIGNER FRONT-END WEB DEVELOPER
                <motion.span
                  className="text-[#F09] uppercase block"
                  initial={{ translateY: 100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.2,
                  }}
                >
                  {" "}
                  <Text />
                </motion.span>{" "}
              </motion.h1>
              <motion.h2
                className={`text-[15px] font-normal mt-5 ${
                  isLightMode ? "" : "text-black"
                }`}
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                }}
              >
                I am a graphic designer and front-end web developer freelancer.
                As a freelancer, I also have an educational background at the
                National Islamic University of Indonesia UNIKI Department of
                Information Technology, S1
              </motion.h2>
              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                }}
              >
                <Button
                  color="primary"
                  variant="shadow"
                  className="mt-5 max-md:relative max-md:z-[999]"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="mt-20 max-md:mt-[-50px]  overflow-hidden flex justify-end">
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              <Image
                src="/image 1.png"
                width={1000}
                height={1000}
                className="w-auto h-auto relative max-lg:w-[100%]"
                alt="img"
                priority
              />
            </motion.div>
            <div className="absolute top-0 max-md:top-[77px] right-auto overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="842"
                height="690"
                viewBox="0 0 842 1080"
                fill="none"
                className=""
              >
                <path
                  opacity="0.3"
                  d="M706.5 2262.88C1096.69 2262.88 1413 1674.92 1413 949.642C1413 224.361 1096.69 -363.596 706.5 -363.596C316.311 -363.596 0 224.361 0 949.642C0 1674.92 316.311 2262.88 706.5 2262.88Z"
                  fill="url(#paint0_radial_1_58)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1_58"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(706.5 949.642) scale(706.5 1313.24)"
                  >
                    <stop stopColor="#FF0099" />
                    <stop offset="1" stopColor="#D9E021" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
