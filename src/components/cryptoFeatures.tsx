"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { SparklineChart } from "./sparkLineChart";

/* ---------------------- TOP CARDS ---------------------- */

export default function CryptoFeatures() {
  return (
    <section className="py-16 px-6 lg:px-16 grid gap-8">

      {/* GRID (TOP 3 CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Insta Trade */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Insta Trade - Buy / Sell</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Trade your favorite crypto pairs instantly at lightning speed — No complex charts.
          </p>

          <div className="bg-muted p-4 rounded-md text-center">
            <p className="text-sm text-muted-foreground mb-1">You Pay</p>
            <p className="text-xl font-semibold">₹45,623.97</p>

            <Button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700">
              Buy Instantly
            </Button>
          </div>
        </Card>

        {/* Spot Trade */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Spot Trade — Power for the Pros</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Live order books, advanced charting, and real-time trades.
          </p>

          <div className="bg-muted rounded-md h-40 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">[ Chart Placeholder ]</p>
          </div>
        </Card>

        {/* Buy Now, Pay Later */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Buy Now, Pay Later</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Buy crypto instantly and pay later — Flexible, secure, convenient.
          </p>

          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>✔ Flexible EMI Options</li>
            <li>✔ Secure Asset Delivery</li>
            <li>✔ Real-Time Calculations</li>
            <li>✔ Smart Credit Scoring</li>
          </ul>
        </Card>

      </div>

      {/* GRID (BOTTOM TWO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* WALLET CHART */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Secure Wallet — Your Crypto, Your Control</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage, send, and receive your crypto securely with multi-layer encryption.
          </p>

          <div className="flex items-center gap-6">
            <div className="w-1/2 h-36 flex items-center justify-center">
              <p className="text-muted-foreground">[ Donut Chart ]</p>
            </div>

            <div className="w-1/2 space-y-2 text-sm">
              <p>25% — Bitcoin — ₹1,920</p>
              <p>5% — Waves — ₹5,000</p>
              <p>50% — Avax — ₹26</p>
              <p>10% — Bitcoin — ₹10,000</p>
            </div>
          </div>
        </Card>

        {/* COIN LIST WITH SPARKLINES */}
        <Card className="p-6">
          <div className="space-y-4">

            {[
              { icon: <FaBitcoin color="#F7931A" />, name: "Bitcoin", short: "BTC", price: "₹56,623.54", change: "1.41%" },
              { icon: <FaEthereum color="#627EEA" />, name: "Ethereum", short: "ETH", price: "₹4,267.90", change: "2.22%" },
              { icon: <SiBinance color="#F3BA2F" />, name: "Binance", short: "BNB", price: "₹587.74", change: "-0.82%" },
            ].map((coin, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-xl">{coin.icon}</div>
                  <div>
                    <p className="text-sm font-medium">{coin.name}</p>
                    <p className="text-xs text-muted-foreground">{coin.short}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-sm">{coin.price}</p>
                  <p className={`text-xs ${coin.change.includes("-") ? "text-red-500" : "text-green-600"}`}>
                    {coin.change}
                  </p>
                </div>

                <div className="w-24">
                  <SparklineChart color={coin.change.includes("-") ? "#EF4444" : "#4ADE80"} />
                </div>
              </div>
            ))}

            <p className="text-sm text-muted-foreground">Seamless Crypto Trading Experience</p>
          </div>
        </Card>

      </div>
    </section>
  );
}

