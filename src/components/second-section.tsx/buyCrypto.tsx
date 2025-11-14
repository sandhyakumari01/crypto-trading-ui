"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function BuyCrypto() {
  return (
    <section className="py-2  mx-10 text-muted-foreground">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center mt-24">
          <Image
            src="/assets/buy.png"
            width={220}
            height={400}
            alt="Light Mode Trading UI"
            className="drop-shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="lg:pr-44 pr-11">
          <h2 className="lg:text-4xl text-2xl font-bold mb-4 ">
            Buy Crypto Instantly,<br /> Pay Later with Ease
          </h2>

          <p className="text-lg mb-6">
            Break your crypto purchase into smaller EMIs with our BNPL system.
            Start with a down payment and own crypto instantly.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Flexible EMI Options",
              "Start with a Small Down Payment",
              "Secure Asset Delivery",
              "Powered by Real-Time Calculations",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
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
  Buy Crypto on EMI
</Button>

         
        </div>
      </div>
    </section>
  );
}
