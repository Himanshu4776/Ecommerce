import React from "react";
import Header from "@/components/core/header";
import { Banner } from "@/components/core/banner";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pb-8">
        <Banner />
      </div>
    </>
  );
}
