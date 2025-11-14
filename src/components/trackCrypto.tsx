"use client";

import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiChainlink, SiSolana } from "react-icons/si";
import { TbTriangleFilled } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const coins = [
  {
    name: "Ethereum",
    short: "ETH",
    icon: <FaEthereum size={22} color="#627EEA" />,
    price: "₹2,56,771.26",
    change: "+7.33%",
  },
  {
    name: "Bitcoin",
    short: "BTC",
    icon: <FaBitcoin size={22} color="#F7931A" />,
    price: "₹92,36,771.26",
    change: "+6.73%",
    highlight: true,
  },
  {
    name: "ChainLink",
    short: "LINK",
    icon: <SiChainlink size={22} color="#2A5ADA" />,
    price: "₹146.56",
    change: "+21.73%",
  },
  {
    name: "Solana",
    short: "SOL",
    icon: <SiSolana size={22} color="#14F195" />,
    price: "₹223.21",
    change: "+10.23%",
  },
  {
    name: "Tron",
    short: "TRX",
    icon: <TbTriangleFilled size={22} color="#FF002E" />,
    price: "₹23.21",
    change: "+10.08%",
  },
];

export default function TrackCrypto() {
  return (
    <section className="py-20 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">

      {/* LEFT CRYPTO LIST */}
      <div className="
        w-full max-w-sm 
        bg-white dark:bg-[#111] 
        border border-border 
        p-4 
        shadow-lg relative
      "
      style={{borderRadius:6 }}>
        {coins.map((coin, idx) => (
          <div
            key={idx}
            className={`
              flex items-center justify-between px-3 py-3  mb-1 
              transition 
              ${coin.highlight
                ? "bg-gradient-to-r from-[#E195A0]/30 to-[#C06CA4]/20 dark:from-[#E195A0]/20 dark:to-[#C06CA4]/15 shadow-[0_5px_35px_-5px_rgba(225,149,160,0.45)]"
                : "hover:bg-muted/40"
              }
            `}
            style={{borderRadius:3}}
          >
            <div className="flex items-center gap-3">
              {coin.icon}
              <div>
                <p className="font-medium">{coin.name}</p>
                <p className="text-xs text-muted-foreground">{coin.short}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{coin.price}</p>
              <p className="text-xs text-green-500">{coin.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-muted-foreground dark:text-white mb-4">
          Track Crypto Prices in Real-Time
        </h2>

        <p className="text-muted-foreground mb-8">
          Stay ahead in the crypto market with live updates on top-performing assets like Bitcoin, Ethereum, Solana, and more.
          Monitor price changes and trends instantly — all in one place.
        </p>

        <Button
          style={{ borderRadius: 3, padding: "20px 30px" }}
          className="
            bg-gradient-to-r 
            from-[#E195A0] 
            to-[#C06CA4] 
            text-white text-base
            shadow-[0_10px_25px_-5px_rgba(225,149,160,0.45)]
            hover:opacity-90 transition
          "
        >
          Start Tracking Now
        </Button>
      </div>

    </section>
  );
}
