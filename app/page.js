
import Hero from "./_components/Hero";
import DoctorSearch from "./_components/DoctorSearch";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <DoctorSearch />
    </main>
  );
}
