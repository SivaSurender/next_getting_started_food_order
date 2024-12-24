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
     <p
          style={{
            marginTop: "auto",
            textAlign: "center",
            color: "var(--color-light--1)",
          }}
        >
          &copy;
          <a
            className="twitter-link cursor-pointer"
            target="_blank"
            href="https://my-portfolio-bala.vercel.app/"
          >
            <b>Bala.E</b>
          </a>
          . Done in India with love ♥.
        </p>
    </html>
  );
}
