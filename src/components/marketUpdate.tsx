"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance, SiTether, SiSolana, SiXrp } from "react-icons/si";


/* ---------------- Sparkline Component ---------------- */

interface SparklineProps {
  color: string;
}

const Sparkline = ({ color }: SparklineProps) => {
  const points = "0,20 20,10 40,15 60,5 80,12 100,7 120,14 140,9 160,13";
  const gradientId = `sparklineGradient-${color.replace("#", "")}`;

  return (
    <svg width="180" height="40" viewBox="0 0 180 40">
      <defs>
        {/* Gradient Fade */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      {/* Background Fade Fill */}
      <polygon
        fill={`url(#${gradientId})`}
        points={`${points} 160,40 0,40`}
      />

      {/* Actual Line */}
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        points={points}
        strokeLinecap="round"
      />
    </svg>
  );
};

/* ---------------- Table Data ---------------- */

const coins = [
  {
    no: 1,
    name: "Bitcoin",
    short: "BTC",
    icon: <FaBitcoin size={22} color="#F7931A" />,
    price: "₹56,623.54",
    change: "+1.41%",
    changeColor: "text-green-600",
    chartColor: "#0FAE96",
  },
  {
    no: 2,
    name: "Ethereum",
    short: "ETH",
    icon: <FaEthereum size={22} color="#627EEA" />,
    price: "₹4,267.90",
    change: "+2.22%",
    changeColor: "text-green-600",
    chartColor: "#0FAE96",
  },
  {
    no: 3,
    name: "Binance",
    short: "BNB",
    icon: <SiBinance size={22} color="#F3BA2F" />,
    price: "₹587.74",
    change: "-0.82%",
    changeColor: "text-red-500",
    chartColor: "#EF4444",
  },
  {
    no: 4,
    name: "Tether",
    short: "USDT",
    icon: <SiTether size={22} color="#26A17B" />,
    price: "₹0.9998",
    change: "-0.03%",
    changeColor: "text-red-500",
    chartColor: "#EF4444",
  },
  {
    no: 5,
    name: "Solana",
    short: "SOL",
    icon: <SiSolana size={22} color="#14F195" />,
    price: "₹213.67",
    change: "-0.53%",
    changeColor: "text-red-500",
    chartColor: "#EF4444",
  },
  {
    no: 6,
    name: "XRP",
    short: "XRP",
    icon: <SiXrp size={22} color="#00A6CE" />,
    price: "₹1.04",
    change: "-0.44%",
    changeColor: "text-red-500",
    chartColor: "#EF4444",
  },
];

/* ---------------- Full Component ---------------- */

export default function MarketUpdate() {
  return (
    <section className="py-14 px-6 md:px-14">

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#5B4B8A]">Market Update</h2>
  <p className="text-sm text-muted-foreground">
          Cryptocurrency Categories
        </p>
      
   <div
  className="
    flex flex-col 
    md:flex-row md:justify-between 
    gap-4 md:items-center 
    mt-1 mb-4
  "
>
  {/* Buttons Group */}
  <div className="flex flex-wrap gap-3 md:ml-2">
    <Button className="px-4" style={{ borderRadius: 3 }}>All</Button>

    <Button variant="outline" className="px-4" style={{ borderRadius: 3 }}>Gainer</Button>

    <Button variant="outline" className="px-4" style={{ borderRadius: 3 }}>Loser</Button>

    <Button variant="outline" className="px-4" style={{ borderRadius: 3 }}>New Listing</Button>
  </div>

  {/* Search Input */}
  <Input
    placeholder="Search Coin"
    className="w-full md:w-60"
    style={{ borderRadius: 3 }}
  />
</div>


      {/* TABLE */}
      <div className="flex justify-center">
        <Table className="bg-card rounded-md">

          <TableHeader>
            <TableRow className="text-center">
              <TableHead className="text-center">NO</TableHead>
              <TableHead className="text-center">NAME</TableHead>
              <TableHead className="text-center">LAST PRICE</TableHead>
              <TableHead className="text-center">CHANGE</TableHead>
              <TableHead className="text-center">MARKET STATS</TableHead>
              <TableHead className="text-center">TRADE</TableHead>
            </TableRow>
          </TableHeader>

          {/* Content Center Alignment */}
          <TableBody className="[&_*]:text-center">

            {coins.map((coin) => (
              <TableRow key={coin.no}>

                <TableCell>{coin.no}</TableCell>

                {/* FIXED NAME DESIGN */}
                <TableCell>
                  <div className="flex items-center justify-center gap-3">
                    {coin.icon}

                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{coin.name}</span>
                      <span className="text-muted-foreground">|</span>
                      <span className="text-sm text-muted-foreground">{coin.short}</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell>{coin.price}</TableCell>

                <TableCell className={`${coin.changeColor} font-medium`}>
                  {coin.change}
                </TableCell>

                <TableCell>
                  <div className="flex justify-center">
                    <Sparkline color={coin.chartColor} />
                  </div>
                </TableCell>

                <TableCell>
                  <Button
                    style={{ borderRadius: 7 }}
                    className="
                      bg-gradient-to-r 
                      from-[#E195A0] 
                      to-[#C06CA4] 
                      text-white px-4 py-2 
                      shadow-[0_4px_20px_-5px_rgba(218,85,118,0.4)]
                      hover:opacity-90
                    "
                  >
                    Explore
                  </Button>
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>
      </div>

      {/* Footer */}
      <p className="mt-3 text-sm text-[#5B4B8A] cursor-pointer hover:underline">
        See All Coins
      </p>

    </section>
  );
}
