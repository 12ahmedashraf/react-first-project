"use Client";
import Link from "next/link";
import Image from "next/image";
type Props = {
  banner: string;
  title: string;
  text: string;
};
export default function AnnouncementOverview({ banner, title, text }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="img-box">
        <Image src={banner} alt="" height={40} width={250} />
      </div>
      <h2 className="title relative text-pink-500 pt-5 text-center text-6xl font-semibold after:content-[''] after:block after:w-30 after:flex after:items-center after:h-1.5 after:mx-auto after:bg-pink-500 ">
        {title}
      </h2>
      <p className="text-pink-500 mb-5">{text}</p>
    </div>
  );
}
