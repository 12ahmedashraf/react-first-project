import "./globals.css";
import NavBar from "@/components/NavBar";
export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <NavBar isLoggedIn={true} profilePic="" />
      </body>
    </html>
  );
}
