"use client";
import { Button } from './ui/button';
import { useTheme } from "next-themes";

const CryptoInvestmentSection = () => {
  return (
    <section className=" py-16  text-text">
      <div className="container mx-auto px-7 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold  mb-4">
            Invest in Crypto with <br /> Buy Now Pay Later
          </h2>
          <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
            Buy Now, Pay Later - Split your crypto purchase into easy EMIs.
            Start with a small down payment and gain access to top
            cryptocurrencies instantly.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
                   <Button
  style={{
    borderRadius: 3,
    padding: 20,
    boxShadow: "0px 8px 25px -5px oklch(0.5677 0.2159 290.66 / 0.55)",
  }}
  className="
    text-white
    bg-[oklch(0.5677_0.2159_290.66)]
    hover:opacity-90
  "
>
              Start Using BNPL
            </Button>
             <Button variant="outline" style={{borderRadius:3, padding:20}}>
              How It Works
            </Button>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-lg">Trusted by over 1M+ investors worldwide</span>
          </div>
        </div>


        <div className="md:w-1/2 flex justify-center">
          <img
             src="/assets/light-top-image.png" 
            alt="Crypto Investment"
          className="max-w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

const TradeSmarterSection = () => {
  return (
    <section className=" py-16  text-text">
      <div className="container mx-auto px-7 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold  mb-4">
            Trade Smarter, <br /> Not Harder
          </h2>
          <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
            Experience seamless trading with our advanced platform. Access
            global markets, trade cryptocurrencies, stocks, and more with
            professional tools and real-time data.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
         <Button
  style={{
    borderRadius: 3,
    padding: 20,
    boxShadow: "0px 8px 25px -5px oklch(0.5677 0.2159 290.66 / 0.55)",
  }}
  className="
    text-white
    bg-[oklch(0.5677_0.2159_290.66)]
    hover:opacity-90
  "
>
  Start Trading
</Button>

                <Button variant="outline" style={{borderRadius:3, padding:20}}>
              View Live Market
            </Button>
          </div>
          <div className="flex items-center justify-center md:justify-start text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-lg">Trusted by over 1M+ traders worldwide</span>
          </div>
        </div>

       
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/dark-top.png" 
            alt="Trade Smarter"
            className="max-w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
     const { theme } = useTheme();


  if (!theme) return null;
    
  return (
     <div>
      {theme === "light" ? <CryptoInvestmentSection /> : <TradeSmarterSection />}
    </div>
  );
};

export default HomePage;