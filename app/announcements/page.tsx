import AnnouncementBox from "@/components/AnnouncementBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)]">
      <h2 className="relative text-pink-500 pt-5 text-6xl font-semibold text-center after:content-[''] after:block after:w-85 after:h-1.5 after:bg-pink-500 after:mx-auto after:mt-2">
        Announcements
      </h2>
      <AnnouncementBox
        banner="/logo.jpg"
        title="'25 Season"
        text="'25 season begins!"
        AnnouncementID="one"
      ></AnnouncementBox>
    </div>
  );
}
