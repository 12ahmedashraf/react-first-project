import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div
      className="bg-cover w-full h-[calc(100vh-80px)] flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="hero-text flex flex-col content-center items-center gap-10">
        <h1 className="text-8xl text-white montserrat font-semibold">
          Welcome to Class '27
        </h1>
        <h2 className="text-2xl text-blue-400 text-center font-semibold">
          Where memories and learning come together.
        </h2>
      </div>
    </div>
  );
}
