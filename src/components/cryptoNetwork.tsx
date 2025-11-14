"use client";

import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance, SiTether, SiSolana, SiDogecoin } from "react-icons/si";
import { TbTriangleFilled } from "react-icons/tb";
import { BsLightningChargeFill } from "react-icons/bs";

export default function CryptoNetwork() {
  return (
    <div className="relative w-full flex justify-center items-center py-20 my-32">

 
      <div className="
        absolute w-[280px] h-[280px] 
        rounded-full blur-3xl 
        bg-[rgba(140,106,255,0.25)] 
        dark:bg-[rgba(140,106,255,0.15)]
      "></div>

      {/* Faint Lines (Connections) */}
      <svg className="absolute w-full h-full pointer-events-none">
        <line x1="50%" y1="50%" x2="50%" y2="10%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
        <line x1="50%" y1="50%" x2="80%" y2="22%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
        <line x1="50%" y1="50%" x2="88%" y2="50%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
        <line x1="50%" y1="50%" x2="80%" y2="78%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
        <line x1="50%" y1="50%" x2="20%" y2="22%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
        <line x1="50%" y1="50%" x2="12%" y2="50%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
        <line x1="50%" y1="50%" x2="20%" y2="78%" className="stroke-purple-400/15 dark:stroke-purple-200/10" strokeWidth="1.2" />
      </svg>

      {/* Gradient Beams */}
      <div className="
        absolute w-[350px] h-[350px] 
        bg-gradient-to-r 
        from-transparent via-purple-400/20 to-transparent
        dark:via-purple-300/10
        rotate-45
        blur-lg
      "></div>

      {/* Center Icon */}
      <div className="
        relative z-10 flex items-center justify-center
        w-32 h-32 rounded-full 
        bg-white dark:bg-[#121212]
        shadow-[0_0_30px_rgba(140,106,255,0.4)]
        dark:shadow-[0_0_35px_rgba(140,106,255,0.25)]
      ">
        <BsLightningChargeFill
          size={45}
          className="text-purple-600 dark:text-purple-400"
        />
      </div>

      {/* Around Icons */}
      <div className="absolute inset-0 flex justify-center items-center">

        {/* TRX - Top */}
        <CircleIcon top="-40px" icon={<TbTriangleFilled size={30} color="#FF002E" />} />

        {/* SOLANA - Right Top */}
        <CircleIcon right="300px" top="30px" icon={<SiSolana size={30} color="#14F195" />} />

        {/* CLOSE Circle (X) */}
        <CircleIcon right="250px" icon={<div className="text-gray-400 text-xl">✕</div>} />

        {/* USDT - Right Bottom */}
        <CircleIcon right="300px" bottom="40px" icon={<SiTether size={30} color="#26A17B" />} />

        {/* BNB - Top Left */}
        <CircleIcon left="300px" top="30px" icon={<SiBinance size={30} color="#F3BA2F" />} />

        {/* BTC - Left Middle */}
        <CircleIcon left="250px" icon={<FaBitcoin size={30} color="#F7931A" />} />

        {/* ETH - Left Bottom */}
        <CircleIcon left="300px" bottom="40px" icon={<FaEthereum size={30} color="#627EEA" />} />

        {/* DOGE Bottom */}
        <CircleIcon bottom="-40px" icon={<SiDogecoin size={30} color="#C2A633" />} />

      </div>

    </div>
  );
}


/* ---------------- Helper Circle Component ---------------- */
function CircleIcon({
  icon,
  top,
  left,
  right,
  bottom,
}: {
  icon: React.ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}) {
  return (
    <motion.div
      style={{ top, left, right, bottom }}
      className="
        absolute w-16 h-16 rounded-full 
        bg-white dark:bg-[#181818]
        shadow-md dark:shadow-[0_0_25px_rgba(255,255,255,0.06)]
        flex items-center justify-center
      "
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.div>
  );
}
