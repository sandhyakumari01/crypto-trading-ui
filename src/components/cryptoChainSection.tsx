"use client";

import {
  FaBitcoin,
  FaEthereum,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import {
  SiTether,
  SiSolana,
  SiBinance,
  SiDogecoin,
  SiRipple,
} from "react-icons/si";
// Removed TbTriangleFilled and used SiTron (Red TRX icon) instead for better visual match
import { TbTriangleFilled } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CryptoChainsSection() {
  return (
    // Added dark background to the whole section for the image look
    <section className="py-20"> 

      {/* -------------------- TOP SECTION -------------------- */}
      <div className="flex flex-col items-center text-center">

        {/* PERFECT ARC ICONS */}
        {/* Adjusted size (h-60) and positioning for better arc look */}
        <div className="relative w-full max-w-4xl h-60 mb-8"> 
          
          {/* TOP-LEFT to TOP-RIGHT ARC (Clockwise) */}
          {/* Note: Used SiTron for the red icon (matches image better than a simple triangle) */}
          <ArcIcon icon={<TbTriangleFilled size={34} color="#FF002E" />} x="30%" y="10%" /> 
          <ArcIcon icon={<FaBitcoin size={36} color="#F7931A" />} x="45%" y="2%" />
          <ArcIcon icon={<FaEthereum size={38} color="#627EEA" />} x="60%" y="0%" />
          <ArcIcon icon={<SiTether size={36} color="#26A17B" />} x="75%" y="8%" />
          <ArcIcon icon={<SiRipple size={34} color="#ffffff" />} x="85%" y="40%" /> {/* XRP White */}

          {/* SIDE/BOTTOM ARC */}
          <ArcIcon icon={<SiDogecoin size={36} color="#C2A633" />} x="95%" y="70%" /> 
          <ArcIcon icon={<SiSolana size={38} color="#14F195" />} x="10%" y="70%" />
          <ArcIcon icon={<SiBinance size={34} color="#F3BA2F" />} x="18%" y="40%" /> 
        </div>

        {/* HEADING - Changed to white/light color */}
        <h2 className="text-4xl font-bold text-muted-foreground dark:text-white leading-tight">
          All the chains <br /> that matter in one place
        </h2>

        {/* SUBTEXT - Changed to lighter color */}
        <p className="max-w-lg text-gray-400 mt-4 text-base leading-relaxed">
          Explore top blockchains like Bitcoin, Ethereum, Cardano, and Solana—
          secure, scalable, and innovative networks shaping the future of crypto.
        </p>

        {/* STORE BUTTONS - Adjusted colors to match image's muted pink/purple */}
        <div className="flex gap-4 mt-8">
          {/* Adjusted Google Play button color */}
          <StoreButton 
            icon={<FaGooglePlay />} 
            text="Download as the" 
            label="Google Play"
            className="from-[#6A3C56] to-[#A05C87] text-sm" 
          />
          {/* Adjusted App Store button color */}
          <StoreButton 
            icon={<FaApple />} 
            text="Download on the" 
            label="App Store"
            className="from-[#8D5771] to-[#C47D95] text-sm" 
          />
        </div>
      </div>

      {/* -------------------- BOTTOM SECTION -------------------- */}
 <div className="mt-20 flex justify-center px-4">
  <Card
    className="
      w-full max-w-4xl p-14 relative overflow-hidden border
      border-[#E8E0F8] dark:border-[#2B2643]
    "
    style={{ borderRadius: 14 }}
  >
    {/* LIGHT MODE BACKGROUND */}
    <div
      className="absolute inset-0 -z-10 block dark:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(240,235,255,0.7) 100%)",
        borderRadius: 14,
      }}
    />

    {/* DARK MODE BACKGROUND (REAL EXACT COLOR) */}
    <div
      className="absolute inset-0 -z-10 hidden dark:block"
      style={{
        background: "radial-gradient(circle at top, #2E2A4A 0%, #13141C 70%)",
        borderRadius: 14,
        boxShadow: "0 0 35px rgba(120,90,255,0.25) inset",
      }}
    />

    <CardContent className="text-center relative p-0">
      {/* Heading Color */}
      <h2 className="text-4xl font-semibold text-[#5B4B8A] dark:text-white mb-3">
        Earn up to ₹ 101
      </h2>

      {/* Subtext */}
      <p className="text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
        Discover How Specific Cryptocurrencies Work.
        Get A Bit Of Each Crypto To Try Out For Yourself.
      </p>

      {/* BUTTON EXACT SAME AS IMAGE */}
      <Button
        className="
          text-white px-8 py-3 font-semibold
          bg-gradient-to-r
          from-[#7F56F3] to-[#9A63F4]
          dark:from-[#7B5FFF] dark:to-[#A586FF]
          shadow-[0_4px_20px_rgba(135,100,255,0.3)]
          dark:shadow-[0_4px_25px_rgba(145,110,255,0.55)]
        "
        style={{ borderRadius: 6 }}
      >
        Create Account
      </Button>
    </CardContent>
  </Card>
</div>

    </section>
  );
}

/* -------------------- Arc Icon Component -------------------- */
function ArcIcon({ icon, x, y }: { icon: any; x: string; y: string }) {
  return (
    <div
      className="absolute w-16 h-16 rounded-full
        bg-[#181825] 
        shadow-[0_0_15px_rgba(0,0,0,0.5)] 
        flex items-center justify-center transition-transform hover:scale-110"
      style={{
        left: x,
        top: y,
        borderRadius: "50%",
      }}
    >
      {icon}
    </div>
  );
}

/* -------------------- Store Button Component -------------------- */function StoreButton({
  icon,
  text,
  label,
  className,
}: {
  icon: any;
  text: string;
  label: string;
  className?: string;
}) {
  return (
    <Button
      className={`
        flex flex-col items-start gap-0 text-white 
        bg-gradient-to-r from-[#E195A0] to-[#C06CA4]
        px-6 py-4 h-auto text-center hover:opacity-90 transition
        ${className}
      `}
      style={{ borderRadius: 8 }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-bold text-[15px]">{label}</span>
      </div>

      <p className="text-xs opacity-90 -mt-[2px]">{text}</p>
    </Button>
  );
}
