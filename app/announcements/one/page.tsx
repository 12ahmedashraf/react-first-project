import AnnouncementBox from "@/components/AnnouncementBox";
import Image from "next/image";

export default function one() {
  return (
    <div>
      <h1 className="relative text-pink-500 pt-5 text-3xl font-semibold text-center after:content-[''] after:block after:w-85 after:h-1.5 after:bg-pink-500 after:mx-auto after:mt-2">
        '25 season begins this month
      </h1>
      <p className="text-pink-500 mt-10 ml-10">
        Our season starts this month , waiting to see you!
      </p>
    </div>
  );
}
