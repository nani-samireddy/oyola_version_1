import React from "react";
import Navbar from "../../common/components/navbar/navbar";
import Footer from "../../common/components/footer/footer";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="responsive-width">
          <div className="flex flex-col justify-center items-center h-[50vh]">
            <h1 className="text-4xl font-bold font-dm_sans">
              Thank you for booking with us
            </h1>
            <p className="text-gray-700 text-lg font-poppins">
              We will get back to you soon
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
