import DownloadLinks from '@/components/DownloadLinks';

export default function Home() {
   return (
      <main className="flex min-h-screen min-w-full flex-col items-center justify-between bg-white">
         <img src="/images/banner.png" alt="banner" className="w-full h-full" />
         <DownloadLinks />
      </main>
   );
}
