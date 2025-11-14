"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";

/* ApexCharts is SSR-unfriendly -> load dynamically */
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

/* ----------------- Mock Data ----------------- */

/* Candlestick series (Apex format) */
const candleSeries = [
  {
    data: [
      // [timestamp, open, high, low, close]
      [1627776000000, 34000, 35000, 33500, 34800],
      [1627862400000, 34800, 35200, 34200, 34600],
      [1627948800000, 34600, 36000, 34400, 35800],
      [1628035200000, 35800, 36500, 35000, 35400],
      [1628121600000, 35400, 37000, 35200, 36800],
      [1628208000000, 36800, 37400, 36000, 36200],
      [1628294400000, 36200, 36900, 35600, 36700],
      [1628380800000, 36700, 37800, 36200, 37500],
      [1628467200000, 37500, 38000, 37000, 37900],
      [1628553600000, 37900, 38500, 37200, 37700],
    ],
  },
];

/* Sparkline small lines data (per coin) */
const sparkData = {
  BTC: [34, 36, 35, 37, 39, 38, 40],
  ETH: [26, 27, 25, 28, 29, 27, 30],
  BNB: [5.5, 5.6, 5.4, 5.7, 5.8, 5.6, 5.9],
};

/* Radial (donut) data for wallet */
const radialSeries = [25, 50, 15, 10];

/* ----------------- Apex options ----------------- */

/* Candlestick options */
const candleOptions: ApexCharts.ApexOptions = {
  chart: {
    type: "candlestick",
    height: 300,
    toolbar: { show: true },
    zoom: { enabled: true },
    background: "transparent",
  },
  theme: {
    mode: "dark", // will look good in dark; light theme still fine (transparent bg)
  },
  xaxis: {
    type: "datetime",
    labels: { datetimeUTC: false, style: { colors: undefined } },
  },
  yaxis: {
    tooltip: { enabled: true },
  },
  plotOptions: {
    candlestick: {
      colors: { upward: "#22c55e", downward: "#ef4444" },
    },
  },
};

/* Sparkline options factory */
const sparkOptions = (color: string): ApexCharts.ApexOptions => ({
  chart: {
    type: "area",
    sparkline: { enabled: true },
    animations: { enabled: true },
    toolbar: { show: false },
  },
  stroke: { curve: "smooth", width: 2 },
  fill: { opacity: 0.15, type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0 } },
  colors: [color],
});

/* Radial (donut) options */
const radialOptions: ApexCharts.ApexOptions = {
  chart: { type: "donut", toolbar: { show: false } },
  labels: ["BTC", "AVAX", "WAVES", "Other"],
  legend: { show: false },
  plotOptions: {
    pie: {
      donut: { size: "70%" },
    },
  },
  colors: ["#F7931A", "#7C3AED", "#FBBF24", "#94A3B8"],
  dataLabels: { enabled: false },
};

/* ----------------- Main Component ----------------- */

export default function CryptoDashboard() {
  const [tab, setTab] = useState<"buy" | "sell">("buy");

  return (
    <section className="py-12 px-6  bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Insta Trade (left) */}
        <Card className="p-4"  style={{borderRadius:3 }}>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Insta Trade - <br />Buy / Sell</h3>
                <p className=" text-muted-foreground mt-2">
                  Trade your favorite crypto pairs instantly at lightning speed. No complex charts — just pick, swap, and go.
                </p>
              </div>

              <div className="border rounded-md p-3 bg-card/60" style={{borderRadius:3 }}>
                {/* Tabs */}
                <div className="flex items-center rounded-md overflow-hidden mb-3 bg-muted"  style={{borderRadius:3 }}>
                  <button
                    onClick={() => setTab("buy")}
                    className={`flex-1 px-3 py-2 text-sm ${tab === "buy" ? "bg-gradient-to-r from-[#E195A0] to-[#C06CA4] text-white" : "text-muted-foreground"}`}
                   style={{borderRadius:3 }}>
                    Buy
                  </button>
                  <button
                    onClick={() => setTab("sell")}
                    className={`flex-1 px-3 py-2 text-sm ${tab === "sell" ? "bg-gradient-to-r from-[#E195A0] to-[#C06CA4] text-white" : "text-muted-foreground"}`}
                  style={{borderRadius:3 }} >
                    Sell
                  </button>
                </div>

                <div className="text-center text-xs text-muted-foreground mb-2">Estimated Price</div>
                <div className="text-center font-semibold text-foreground mb-3">₹1,83,573.27</div>

                <label className="text-xs text-muted-foreground">You Pay</label>
                <input className="w-full rounded-md border px-3 py-2 mb-3 bg-background text-sm" placeholder="₹ 1000"  style={{borderRadius:3 }} />

                <label className="text-xs text-muted-foreground">You Receive</label>
                <input className="w-full rounded-md border px-3 py-2 mb-3 bg-background text-sm" placeholder="0.005 ETH"  style={{borderRadius:3 }} />

                <Button className="w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white"  style={{borderRadius:3 }}>
                  {tab === "buy" ? "Buy Now" : "Sell Now"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spot Trade (middle) */}
        <Card className="p-4"  style={{borderRadius:3 }}>
          <CardContent>
            <h3 className="text-lg font-semibold text-foreground mb-2">Spot Trade — Power for the Pros</h3>
            <p className="text-sm text-muted-foreground mb-3">Deep dive into live order books, advanced charting, and real-time trades.</p>

            <div className="bg-card/50 rounded-md p-2">
              {/* Candlestick chart */}
              <Chart options={candleOptions} series={candleSeries} type="candlestick" height={300} />
            </div>
          </CardContent>
        </Card>

        {/* BNPL (right) */}
    <Card className="p-6 bg-card" style={{ borderRadius: 6 }}>
  <CardContent className="p-0">

    <h3 className="text-xl font-semibold text-foreground mb-2">
      Buy Now, Pay Later
    </h3>

    <p className="text-sm text-muted-foreground mb-6">
      Buy crypto instantly and pay later in easy installments—flexible, secure, 
      and designed for your convenience.
    </p>

    <div className="flex items-start gap-6">

      {/* LEFT SIDE — GRADIENT DOLLAR ICON */}
      <div className="w-32 h-32 flex items-center justify-center">
        <svg width="110" height="110" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="moneyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00C0FF" />     {/* Blue */}
              <stop offset="50%" stopColor="#00DE7A" />    {/* Green */}
              <stop offset="100%" stopColor="#E8FF3C" />   {/* Yellow */}
            </linearGradient>
          </defs>

          <text
            x="50"
            y="70"
            textAnchor="middle"
            fontSize="80"
            fontWeight="bold"
            fill="url(#moneyGradient)"
          >
            $
          </text>
        </svg>
      </div>

      {/* RIGHT SIDE — FEATURES */}
      <div className="space-y-4 text-sm">

        {/* FEATURE 1 */}
        <div className="flex gap-3">
          <div className="text-cyan-400 text-lg">📘</div>
          <div>
            <p className="font-medium text-foreground">Buy Now, Pay Later</p>
            <p className="text-muted-foreground">Allows immediate purchases with deferred payments</p>
          </div>
        </div>

        {/* FEATURE 2 */}
        <div className="flex gap-3">
          <div className="text-green-400 text-lg">🧩</div>
          <div>
            <p className="font-medium text-foreground">Payment Splitting</p>
            <p className="text-muted-foreground">Enables dividing payments into manageable installments</p>
          </div>
        </div>

        {/* FEATURE 3 */}
        <div className="flex gap-3">
          <div className="text-yellow-400 text-lg">🛡️</div>
          <div>
            <p className="font-medium text-foreground">Security Measures</p>
            <p className="text-muted-foreground">Ensures asset protection through encryption</p>
          </div>
        </div>

        {/* FEATURE 4 */}
        <div className="flex gap-3">
          <div className="text-orange-400 text-lg">🔑</div>
          <div>
            <p className="font-medium text-foreground">Self-Custody</p>
            <p className="text-muted-foreground">Provides users with full control over their assets</p>
          </div>
        </div>

      </div>

    </div>

  </CardContent>
</Card>

      </div>

      {/* Bottom two wide cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Secure Wallet */}
      {/* --- Wallet --- */}
        <Card className="p-5 border-border shadow-sm rounded-md">
          <CardContent className="p-0">
            <h3 className="font-semibold text-[18px] text-foreground mb-2">
              Secure Wallet — Your Crypto, Your Control
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Multi-layer encryption and self-custody options.
            </p>

            <div className="flex gap-5 items-center">
              <Chart
                options={radialOptions as any}
                series={radialSeries}
                type="donut"
                width={220}
              />

              <div className="space-y-2 text-sm">
                <p>Balance: <b>₹100,000</b></p>
                <p>BTC 25% — ₹1,920</p>
                <p>Waves 5% — ₹5,000</p>
                <p>Avax 50% — ₹26</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seamless Experience / Insights */}
     <Card className="p-5 border-border shadow-sm rounded-md">
          <CardContent className="p-0">
            <div className="space-y-4">

              {[ 
                { icon: <FaBitcoin color="#F7931A" />, name: "Bitcoin", short:"BTC", price:"₹56,623.54", change:"+1.41%", data:sparkData.BTC },
                { icon: <FaEthereum color="#627EEA" />, name: "Ethereum", short:"ETH", price:"₹4,267.90", change:"+2.22%", data:sparkData.ETH },
                { icon: <SiBinance color="#F3BA2F" />, name: "Binance", short:"BNB", price:"₹587.74", change:"-0.82%", data:sparkData.BNB },
              ].map((coin, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {coin.icon}
                    <div>
                      <p className="text-sm font-medium">{coin.name}</p>
                      <p className="text-xs text-muted-foreground leading-none">{coin.short}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium">{coin.price}</p>
                    <p className={`text-xs ${coin.change.includes("-") ? "text-red-500" : "text-green-600"}`}>
                      {coin.change}
                    </p>
                  </div>

                  <div className="w-24">
                    <Chart
                      options={sparkOptions(coin.change.includes("-") ? "#EF4444" : "#22C55E") as any}
                      series={[{ data: coin.data }]}
                      type="area"
                      height={40}
                    />
                  </div>
                </div>
              ))}

              <p className="font-bold mt-4">
                Seamless Crypto Trading Experience
              </p>
              <p  className=" text-sm text-muted-foreground ">Experience seamless , fast and  transparent transaction with cutting-edge security  and real-time market  insights.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



