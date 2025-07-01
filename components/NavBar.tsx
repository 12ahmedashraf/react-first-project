"use Client";
import Link from "next/link";
import Image from "next/image";
type Props = {
  isLoggedIn: boolean;
  profilePic: string;
};
export default function NavBar({ isLoggedIn }: Props) {
  return (
    <div className="flex justify-between  bg-white h-fit p-4">
      <Image src="/logo.jpg" alt="" height={10} width={60} />
      <div className="links flex justify-between text-md text-pink-400 Link:montserrat items-center gap-10">
        <Link href="/">
          <h3 className=" border-b-2 border-transparent hover:border-pink-500 hover:scale-105 transition-all duration-400">
            HOME
          </h3>
        </Link>
        {isLoggedIn && (
          <>
            <Link href="/announcements" className="">
              <h3 className=" border-b-2 border-transparent hover:border-pink-500 hover:scale-105 transition-all duration-400">
                ANNOUNCEMENTS
              </h3>
            </Link>
          </>
        )}
        <Link href="/students">
          <h3 className=" border-b-2 border-transparent hover:border-pink-500 hover:scale-105 transition-all duration-400">
            MEMBERS
          </h3>
        </Link>
      </div>
      <div className="cta-icons flex items-center gap-2">
        {isLoggedIn ? (
          <>
            <Link href="/notifications">
              <Image
                className="filter hue-rotate-180"
                src="/bell.png"
                alt=""
                width={22}
                height={22}
              />
            </Link>
            <Link href="/profile">
              <img src="{profilePic}" alt="" />
            </Link>
            <button className="hover:cursor-pointer">
              <Image
                className="filter hue-rotate-180"
                src="/logout.png"
                alt=""
                width={22}
                height={22}
              />
            </button>
          </>
        ) : (
          <>
            <Link href="/signUp">
              <h3 className=" border-b-2 border-transparent hover:border-blue-500 hover:scale-105 transition-all duration-400">
                SIGN UP
              </h3>
            </Link>
            <Link href="/logIn">
              <h3 className=" border-b-2 border-transparent hover:border-blue-500 hover:scale-105 transition-all duration-400">
                LOG IN
              </h3>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
