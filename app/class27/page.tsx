"use client";
import Image from "next/image";
import StudentBox from "@/components/student-box";
export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)]">
      <h2 className="relative text-white pt-5 text-6xl font-semibold text-center after:content-[''] after:block after:w-85 after:h-1.5 after:bg-blue-500 after:mx-auto after:mt-2">
        Class 27
      </h2>
      <StudentBox>hi</StudentBox></div>
  );
}
