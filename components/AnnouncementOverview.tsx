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
        <Image src={banner} alt="" height={50} width={350} />
      </div>
      <h2 className="title relative text-white pt-5 text-center text-6xl font-semibold after:content-[''] after:block after:w-30 after:flex after:items-center after:h-1.5 after:mx-auto after:bg-blue-500 ">
        {title}
      </h2>
      <p className="text-white mb-5">{text}</p>
    </div>
  );
}
