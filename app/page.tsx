
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between bg-white">
      <img src="/images/banner.png"  alt="banner" className="w-full h-full" />
      <section className="w-full max-w-md mt-8 sm:hidden  text-center absolute z-10 bottom-6 p-4">
        <h2 className="text-xl font-semibold text-gray-800">Download the App Now!</h2>
        <p className="text-gray-600 mt-4 text-sm">Download Moya Barber app now. Available on both iOS and Android.</p>
        <div className="mt-8 items-center justify-center space-x-8 flex h-40">
          <a href="https://apps.apple.com/app/id" className="mx-2">
            <img src="/images/apple.png" alt="Download on the App Store" className="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=">
            <img src="/images/google.png" alt="Get it on Google Play" />
          </a>
        </div>
      </section>
    </main>
  );
}
