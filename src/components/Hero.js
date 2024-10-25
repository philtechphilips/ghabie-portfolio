"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </Suspense>
  );
};

const Hero = () => {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  return (
    <div className="w-full max-h-[96vh] py-20 gap-6 flex md:flex-row flex-col items-center md:justify-between justify-center bg-black md:px-24 px-5">
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-white md:text-5xl text-4xl font-bold md:leading-[60px] leading-[50px] md:text-left text-center">
          Affordable, Custom App Development for Entrepreneurs 🚀
        </h1>
        <p className="text-white md:text-xl md:leading-8 mb-16 mt-5 md:text-left text-center">
          We create your app from scratch, paying close attention to every
          detail, making sure it perfectly matches your vision.
        </p>
        <Link
          href={query.corporate ? "/?corporate=true#contact" : "/#contact"}
          onClick={() => gtag_report_conversion()}
          className="bg-[#0D5EBA] w-fit text-white px-10 py-4 font-semibold rounded-lg hover:bg-[#1f5a9d]"
        >
          Schedule a Free Call
        </Link>
      </div>

      <div
        className={`overflow-hidden  ${
          query.corporate
            ? "md:w-[600px] h-[450px]"
            : "border-2 border-white rounded-xl md:w-[500px] h-[450px]"
        }`}
      >
        {query.corporate ? (
          <Image
            src="/images/reports.png"
            width={500}
            height={600}
            alt="image"
          />
        ) : (
          <Image
            src="/images/hero-image.jpg"
            width={500}
            height={600}
            alt="image"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSuspense;
