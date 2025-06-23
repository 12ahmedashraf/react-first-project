"use Client";
import Link from "next/link";
import Image from "next/image";
type Props = {
  AnnouncementID: string;
};
export default function AnnouncementOverview({ AnnouncementID }: Props) {
  return (
    <Link href={`/announcements/${AnnouncementID}`} className="crusor:pointer">
      <div className="bg-blue-500  w-50 height-30">
        <p className="text-white text-lg text-center">Read more!</p>
      </div>
    </Link>
  );
}
