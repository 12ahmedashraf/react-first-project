import Link from "next/link";
type Props = {
  isLoggedIn: boolean;
  profilePic: string;
};
export default function Home({ isLoggedIn }: Props) {
  return (
    <div>
      <img src="./app/favicon.ico" alt="" />
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {isLoggedIn && <Link href="/announcements">Announcements</Link>}
        {isLoggedIn && <Link href="/shop">Shop</Link>}
        <Link href="/class27">Class 27</Link>
        {isLoggedIn && <Link href="/birthdays">Birthdays</Link>}
        {isLoggedIn && <Link href="/study">Study!</Link>}
      </div>
      <div className="cta-icons">
        {isLoggedIn ? (
          <>
            <Link href="/notifications">
              <img src="./public/bell.png" alt="" />
            </Link>
            <Link href="/profile">
              <img src="{profilePic}" alt="" />
            </Link>
            <button>
              <img src="./public/logout" alt="" />
            </button>
          </>
        ) : (
         <Link href={/signUp}>
          Sign up
          </Link>
          <Link href={/signUp}>
          Log in
          </Link>
        )}
      </div>
    </div>
  );
}
