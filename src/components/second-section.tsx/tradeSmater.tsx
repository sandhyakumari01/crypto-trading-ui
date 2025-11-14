"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function TradeSmarterSection() {
  return (
    <section className="py-2 text-text">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

      
        <div className="flex justify-center mt-24">
          <Image
            src="/assets/trade.png"
            width={250}
            height={300}
            alt="Dark Mode Trading UI"
            className="drop-shadow-2xl"
          />
        </div>

     
        <div className="lg:pr-44 pr-11">
          <h2 className="lg:text-4xl text-2xl font-bold mb-4">
            Trade Smarter, Trade Faster
          </h2>

          <p className="text-lg mb-6">
            Buy and sell crypto seamlessly with real-time price tracking,
            deep liquidity, and ultra-low fees.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Real-Time Market Prices",
              "Low Trading Fees",
              "Secure & Fast Transactions",
              "Trade 100+ Crypto Pairs",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

<Button
  style={{ borderRadius: 3, padding: 20 }}
  className="
    bg-gradient-to-r
    from-[#E195A0]
    to-[#C06CA4]
    text-white
    font-medium
    shadow-[0_10px_25px_-5px_#D4789D]
    hover:opacity-90
    transition
  "
>
            Start Trading Now
          </Button>
        </div>
      </div>
    </section>
  );
}
