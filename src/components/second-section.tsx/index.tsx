"use client";
import { useTheme } from "next-themes";
import BuyCrypto from "./buyCrypto";
import TradeSmarterSection from "./tradeSmater";

const SecondSection = () => {
     const { theme } = useTheme();


  if (!theme) return null;
    
  return (
     <div>
      {theme === "light" ? <BuyCrypto /> : < TradeSmarterSection/>}
    </div>
  );
};

export default SecondSection;