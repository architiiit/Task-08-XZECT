// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <>
       {/*...::: Footer Section Start :::... */}
       <footer className="section-footer">
        {/* Footer Area Center */}
        <div className="bg-white">
          {/* Footer Center Spacing */}
          <div className="py-[60px] lg:py-20">
            {/* Section Container */}
            <div className="container-default">
              {/* Footer Widget List */}
              <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-20">
                {/* Footer Widget Item */}
                <div className="flex flex-col gap-y-7">
                  {/* Footer Widget Title */}
                  <div className="text-xl font-semibold capitalize text-black">
                    Primary Pages
                  </div>
                  {/* Footer Navbar */}
                  <ul className="flex flex-col gap-y-[10px] capitalize">
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/about"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/services"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/pricing"
                      >
                        pricings
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/contact"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
                {/* Footer Widget Item */}
                <div className="flex flex-col gap-y-6">
                  {/* Footer Title */}
                  <div className="text-xl font-semibold capitalize text-black">
                    Learn
                  </div>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className="flex flex-col gap-y-[10px] capitalize">
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/index-6"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/index-2"
                      >
                        Podcast
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/index-14"
                      >
                        Follow-Up 
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/index-4"
                      >
                       Analyzer
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item*/}
                {/* Footer Widget Item */}
                <div className="flex flex-col gap-y-6">
                  {/* Footer Title */}
                  <div className="text-xl font-semibold capitalize text-black">
                    Utility pages
                  </div>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className="flex flex-col gap-y-[10px] capitalize">
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/signup"
                      >
                        Signup US
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/login"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/error-404"
                      >
                        404 Not found
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        href="/reset-password"
                      >
                        Password Reset Service
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item*/}
                {/* Footer Widget Item */}
                <div className="flex flex-col gap-y-6">
                  {/* Footer Title */}
                  <div className="text-xl font-semibold capitalize text-black">
                    Resources
                  </div>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className="flex flex-col gap-y-[10px] capitalize">
                    <li>
                      <a
                        href="https://www.example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                      >
                        Strategic finance
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.example.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                      >
                        Video
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
                {/* Footer Widget Item */}
                <div className="flex flex-col gap-y-6">
                  {/* Footer Title */}
                  <div className="text-xl font-semibold capitalize text-black">
                    Community
                  </div>
                  {/* Footer Title */}
                  {/* Footer Social Link */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
                      aria-label="twitter"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
                      aria-label="facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
                      aria-label="instagram"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a
                      href="https://www.github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
                      aria-label="github"
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                    <a
                      href="https://www.discord.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
                      aria-label="discord"
                    >
                      <i className="fa-brands fa-discord" />
                    </a>
                    <a
                      href="https://www.github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
                      aria-label="tiktok"
                    >
                      <i className="fa-brands fa-tiktok" />
                    </a>
                  </div>
                </div>
                {/* Footer Widget Item */}
              </div>
              {/* Footer Widget List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Center Spacing */}
        </div>
        {/* Footer Area Center */}
        <div className="horizontal-line -mt-px bg-black" />
        {/* Footer Bottom */}
        <div className="bg-white text-black">
          {/* Footer Bottom Spacing */}
          <div className="py-10">
            {/* Section Container */}
            <div className="container-default">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-between">
                {/* Footer Logo */}
                <a className="" href="/">
                  <img
                    src="assets/img/logo-dark.png"
                    alt="Masco"
                    width={109}
                    height={24}
                  />
                </a>
                {/* Footer Logo */}
                <div className="text-center">
                  © Copyright 2024, All Rights Reserved by PixcelsThemes
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Bottom Spacing */}
        </div>
        {/* Footer Bottom */}
      </footer>
      {/*...::: Footer Section End :::... */}
      </>
  );
};

export default Footer;
