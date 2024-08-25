"use client";
import { getStarted } from "./actions";

export default function Home() {
  async function handleClick() {
    await getStarted();
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify space-y-2">
        <h1 className="text-6xl font-bold text-secondary">
          Create a website for free
        </h1>
        <h2 className="text-xl">Website creation should always be easy</h2>
        <button className="btn btn-primary btn-lg" onClick={handleClick}>
          Get started
        </button>
      </div>
    </main>
  );
}
