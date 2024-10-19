"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="flex items-center space-x-3">
        <Image src="/logo.svg" alt="Doctor Hospital Logo" width={50} height={50} className="rounded-full bg-white p-1" />
        <span className="text-2xl font-bold tracking-tight">Doctor Hospital</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {['Appointment', 'Explore', 'Contact Us'].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-200 transition-colors duration-200">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-200">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
