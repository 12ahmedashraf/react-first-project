"use Client";
import Link from "next/link";
import Image from "next/image";
import AnnouncementOverview from "./AnnouncementOverview";
import ReadMore from "./ReadMore";

type Props = {
  banner: string;
  title: string;
  text: string;
  AnnouncementID: string;
};
export default function AnnouncementBox({
  banner,
  title,
  text,
  AnnouncementID,
}: Props) {
  return (
    <div className=" w-100 h-100 flex flex-col content-center items-center border-2 border-pink-500 ml-10">
      <AnnouncementOverview
        banner={banner}
        title={title}
        text={text}
      ></AnnouncementOverview>
      <ReadMore AnnouncementID={AnnouncementID}></ReadMore>
    </div>
  );
}
