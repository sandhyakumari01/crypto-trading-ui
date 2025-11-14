import CryptoChainsSection from "@/components/cryptoChainSection";
import CryptoDashboard from "@/components/cryptoDashboard";
import CryptoFeatures from "@/components/cryptoFeatures";
import CryptoNetwork from "@/components/cryptoNetwork";
import CryptoPriceCards from "@/components/cryptoPriceCard";
import HomePage from "@/components/home";
import MarketUpdate from "@/components/marketUpdate";
import SecondSection from "@/components/second-section.tsx";
import TrackCrypto from "@/components/trackCrypto";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-8">

      <HomePage />

      <section id="market">
        <CryptoPriceCards />
      </section>

      <SecondSection />

      <section id="market-update">
        <MarketUpdate />
      </section>

      <CryptoNetwork />

      <section id="trade">
        <TrackCrypto />
      </section>

      <CryptoDashboard />

      <CryptoChainsSection />
    </div>
  );
}
