import "./globals.css";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 27 App",
  description: "Next.js site for Class 27",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar isLoggedIn={true} profilePic="/user.png" />
        <main className="  bg-white dark:bg-gray-900 text-black dark:text-white ">
          {children}
        </main>
      </body>
    </html>
  );
}
