"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 px-4 bg-green-50 overflow-hidden">
      {/* Decorative Background SVG */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="#2F855A" />
        </svg>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 text-green-800 font-bold">
          Manage Your Finances with Intelligence
        </h1>
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Transform your financial experience with our AI-powered platform that
          empowers you to take control of your budgeting, track your spending in
          real-time, and unlock personalized insights designed to optimize your
          financial health.
          <br /><br />
          Our advanced analytics help you understand your spending habits, plan
          for future goals, and make smarter decisions every day. Whether you're
          saving for a dream vacation, investing in your future, or managing
          everyday expenses, our intuitive tools provide the clarity and control
          you need.
        </p>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-green-600 hover:bg-green-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
