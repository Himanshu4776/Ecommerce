import { IconArrow } from "@/lib/icons/icon-arrow";
import * as React from "react";
import { Button } from "../ui/button";

export function Banner() {
  const banner1: string =
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const banner2: string =
    "https://media.gettyimages.com/id/854321488/photo/young-woman-choosing-clothes-in-the-store.jpg?s=2048x2048&w=gi&k=20&c=x6Nw3Jk-telXipfuWdGcsTXAHCPnuUSmjmeV2jI3JMs=";
  const banner3: string =
    "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div className="relative bg-cover bg-center h-96 md:h-screen">
      {/* Background image */}
      <div
        className="bg-cover bg-center h-96 md:h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text container - add margin here */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 ">
        <h1 className="text-8xl font-bold mb-4">NEW COLLECTION</h1>
        <h3 className="text-lg text-center mb-8">
          ELEVATE YOURSELF WITH OUR EXCLUSIVE COLLECTION
        </h3>
        <Button variant="secondary" className="rounded-2xl">
          <h1 className="pr-2">DISCOVER COLLECTION</h1>
          <IconArrow />
        </Button>
      </div>
    </div>
  );
}
