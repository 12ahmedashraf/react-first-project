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
        <Image src={banner} alt="" height={40} width={300} />
      </div>
      <h2 className="title relative text-white pt-5 text-center text-6xl font-semibold inline-block after:content-[''] after:block after:w-85 after:h-1.5 after:bg-blue-500  after:mt-2">
        {title}
      </h2>
      <p className="text-white">{text}</p>
    </div>
  );
}
