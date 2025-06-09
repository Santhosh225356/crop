
export default function SANTHOSH() {
  return (
    <div>
      <h1>FarmGuard: AI-Powered Crop Disease Detection and Advisory System</h1>
      <p> FarmGuard: AI-Powered Crop Disease Detection and Advisory System is an advanced agricultural technology platform designed to support farmers through early identification of crop diseases and real-time decision-making. 
        It integrates artificial intelligence and Internet of Things (IoT) devices, such as environmental sensors and camera modules, to continuously monitor field conditions.
        By capturing and analyzing images of crop leaves and evaluating data from soil and weather sensors, the system can detect diseases at early stages.
        The AI model, often trained on large datasets of diseased and healthy leaves, identifies the type and severity of diseases with high accuracy.
        Once a disease is detected, FarmGuard sends instant alerts to the farmer’s mobile or web dashboard, along with tailored treatment suggestions, thereby helping reduce crop damage and avoid the spread of infection.</p>
    </div>
  );
}


export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/farmguard-logo.svg" // Place your logo inside /public
          alt="FarmGuard logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Welcome to <strong>FarmGuard</strong> – an AI-powered system for detecting crop diseases and giving expert advice.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Upload or capture an image of a crop leaf to identify diseases and get instant treatment suggestions.
          </li>
          <li className="tracking-[-.01em]">
            Reach out to us through the contact page for support or feedback.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-600 text-white gap-2 hover:bg-green-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/contact"
          >
            <Image
              src="/contact-icon.svg" // Place a contact icon in /public or change/remove this line
              alt="Contact icon"
              width={20}
              height={20}
            />
            Contact Us
          </a>
        </div>
      </main>
      <footer className="row-start-3 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} FarmGuard. All rights reserved.
      </footer>
    </div>
  );
}