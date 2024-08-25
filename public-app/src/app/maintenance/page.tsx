export default function Error() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify space-y-2">
        <h1 className="text-6xl font-bold text-neutral">Under Maintenance</h1>
        <h2 className="text-xl">
          We’ll be back shortly. Thanks for your understanding!
        </h2>
        <a href="/" className="btn btn-accent btn-lg">
          Go to Home
        </a>
      </div>
    </main>
  );
}
