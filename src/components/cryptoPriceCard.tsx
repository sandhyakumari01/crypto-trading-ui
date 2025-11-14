"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance, SiTether } from "react-icons/si";
import { TbTriangleFilled } from "react-icons/tb";

const coins = [
  {
    name: "BTC",
    full: "Bitcoin",
    price: "₹56,623.54",
    change: "+1.41%",
    icon: <FaBitcoin size={24} color="#F7931A" />, // BTC orange
    lineColor: "#4ADE80", // green chart line
  },
  {
    name: "ETH",
    full: "Ethereum",
    price: "₹56,623.54",
    change: "-1.41%",
    icon: <FaEthereum size={24} color="#627EEA" />, // ETH blue
    lineColor: "#EF4444", // red chart line
  },
  {
    name: "BNB",
    full: "Binance",
    price: "₹56,623.54",
    change: "+1.41%",
    icon: <SiBinance size={24} color="#F3BA2F" />, // BNB yellow
    lineColor: "#4ADE80",
  },
  {
    name: "TRX",
    full: "Tron",
    price: "₹56,623.54",
    change: "+1.41%",
    icon: <TbTriangleFilled size={24} color="#FF002E" />, // TRX red
    lineColor: "#4ADE80",
  },
  {
    name: "USDT",
    full: "Tether",
    price: "₹56,623.54",
    change: "-1.41%",
    icon: <SiTether size={24} color="#26A17B" />, // USDT green
    lineColor: "#EF4444",
  },
];

// Random sparkline chart generator
const Sparkline = ({ color }: { color: string }) => {
  const points = "0,20 20,10 40,15 60,5 80,12 100,7 120,14 140,9 160,13";

  return (
    <svg width="100%" height="40">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

export default function CryptoPriceCards() {
  return (
   <div className="w-full overflow-x-auto pb-4 hide-scrollbar">

      <div className="flex space-x-4 min-w-max px-4">

        {coins.map((coin, idx) => (
          <Card
            key={idx}
            className="
            w-[200px] min-w-[300px] 
            border border-border 
            bg-card 
            hover:shadow-md transition
            py-0
            
          "
          style={{borderRadius:3}}
          >
            <CardContent className="p-4">

              {/* ICON + TEXT */}
              <div className="flex items-center space-x-2 mb-3">
                {coin.icon}
                <div>
                  <p className="text-sm font-semibold text-foreground">{coin.name}</p>
                  <p className="text-[11px] text-muted-foreground">{coin.full}</p>
                </div>
              </div>

              {/* PRICE */}
              <p className="text-sm font-semibold text-foreground">{coin.price}</p>

              {/* CHANGE */}
              <p
                className={`text-xs ${
                  coin.change.includes("+")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
                }`}
              >
                {coin.change}
              </p>

              {/* MINI CHART */}
              <div className="mt-2">
                <Sparkline color={coin.lineColor} />
              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}
