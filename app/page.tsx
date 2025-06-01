import Script from 'next/script';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div id="gameContainer" className="w-full h-full">
        <div className="loading flex items-center justify-center h-full">
          Pixel's not available yet. Please come back later!
        </div>
      </div>
    </main>
  );
}
