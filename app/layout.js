import "./globals.css";
import Header from "@/components/header-comps/header";

export const metadata = {
  title: "Food Hub",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
