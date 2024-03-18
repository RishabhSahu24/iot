import React from "react";
import Header from "./components/Header";
import DeviceInfo from "./components/DeviceInfo";

export default function Home() {
  return (
    <main className="p-5">
      <Header />
      <DeviceInfo />
    </main>
  );
}
