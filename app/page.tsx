import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div
      className="bg-cover w-full h-[calc(100vh-80px)] flex items-center justify-center"
      style={{ backgroundColor: "white" }}
    >
      <div></div>
      <div className="hero-text flex flex-col content-center items-center gap-10">
        <h1 className="text-8xl text-pink-500 montserrat font-semibold">
          Welcome to AlexHack-Protons
        </h1>
        <h2 className="text-2xl text-pink-400 text-center font-semibold">
          Where memories and learning come together.
        </h2>
      </div>
    </div>
  );
}
