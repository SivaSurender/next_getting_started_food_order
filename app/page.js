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
        <Link href="/community">Goto Community</Link>
      </div>
    </main>
  );
}
