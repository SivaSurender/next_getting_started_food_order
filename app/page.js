import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div>
        <Link href="/meals">Goto Meals</Link>
      </div>
      <div>
        <Link href="/community">Community</Link>
      </div>
      <div>
        <p>
          <Link href="/meals/share">Share Meals</Link>
        </p>
      </div>
    </main>
  );
}
