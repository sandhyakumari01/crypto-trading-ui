"use client";

import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { PiDropboxLogo } from 'react-icons/pi';
import { SiReddit } from 'react-icons/si';

// Footer Component
export default function AppFooter() {
  return (
    // Main footer container with dark background matching the image
    <footer className="bg-[#12121A] text-white pt-10 relative overflow-hidden">
      
      {/* -------------------- Top Content Section -------------------- */}
      <div className="container mx-auto px-6 lg:px-12 pb-24">
        
        <div className="flex flex-col lg:flex-row justify-between border-b border-[#2A2A3A] pb-10 mb-8">
          
          {/* Logo and Description Section (Left) */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            {/* Logoipsum - You'll need to replace this with your actual logo component/SVG */}
            <div className="flex items-center text-2xl font-bold text-white mb-3">
              <PiDropboxLogo className="text-primary" size={20} />
              <span className='text-primary'>Logoipsum</span>
            </div>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Experience seamless trading with our advanced platform. Access global markets, trade cryptocurrencies, stocks, and more with professional tools and real-time data.
            </p>
          </div>

          {/* Navigation Links Section (Right Grid) */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-5 gap-y-8 text-sm">
            
            {/* Col 1: Main Titles */}
            <div className="font-semibold text-white space-y-4 pr-4">
              <p>Company</p>
              <p>Support</p>
              <p>Product</p>
              <p>Info Hub</p>
            </div>

            {/* Col 2: About Us */}
            <div className="space-y-4 text-gray-400">
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Support Center</FooterLink>
              <FooterLink href="#">Insta Buy</FooterLink>
              <FooterLink href="#">News</FooterLink>
            </div>

            {/* Col 3: Legal/Trading */}
            <div className="space-y-4 text-gray-400">
              <FooterLink href="#">KYC Policy</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
              <FooterLink href="#">Trading</FooterLink>
              <FooterLink href="#">Announcement</FooterLink>
            </div>

            {/* Col 4: Privacy/Partners */}
            <div className="space-y-4 text-gray-400">
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">BMPL</FooterLink>
              <FooterLink href="#">Referral & Reward</FooterLink>
            </div>

            {/* Col 5: Fees/VIP */}
            <div className="space-y-4 text-gray-400">
              <FooterLink href="#">Fees</FooterLink>
              <FooterLink href="#">Disclaimer</FooterLink>
              <FooterLink href="#">VIP</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </div>

          </div>
        </div>
      </div>
      
      {/* -------------------- Wave Pattern and Bottom Bar -------------------- */}
      <div className="relative">
        {/* Wave Background Pattern */}
        <WavePattern />

        {/* Bottom Bar (Over the wave pattern) */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center">
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-300 mb-4 sm:mb-0">
            <SocialIcon icon={<FaInstagram size={18} />} href="#" />
            <SocialIcon icon={<FaFacebook size={18} />} href="#" />
            <SocialIcon icon={<FaTwitter size={18} />} href="#" />
            <SocialIcon icon={<SiReddit size={18} />} href="#" />
            <SocialIcon icon={<FaYoutube size={18} />} href="#" />
            <SocialIcon icon={<FaDiscord size={18} />} href="#" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper component for Footer Links
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

// Helper component for Social Icons
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-[#8D6FF7] transition-colors duration-200"
  >
    {icon}
  </a>
);


// Wave Pattern Component (SVG style adapted from the image)
const WavePattern = () => (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
            className="w-full h-auto"
            style={{ 
                height: '150px', // Set a fixed height for the wave section
                minHeight: '100px',
                background: 'linear-gradient(to top, #4B3C68 0%, #685790 100%)', // Inner wave gradient
            }}
        >
            <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: "#4B3C68", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#685790", stopOpacity: 1}} />
                </linearGradient>
            </defs>
         
            <path 
                fill="url(#purpleGradient)" 
                d="M0,160L40,149.3C80,139,160,117,240,117.3C320,117,400,139,480,149.3C560,160,640,160,720,138.7C800,117,880,75,960,85.3C1040,96,1120,160,1200,160C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
        </svg>
        {/* Dark overlay to darken the wave at the bottom */}
         <div 
             className="absolute inset-x-0 bottom-0 h-1/2" 
             style={{ 
                 background: 'linear-gradient(to top, #2A1D3C 0%, transparent 100%)', 
             }}
         ></div>
    </div>
);