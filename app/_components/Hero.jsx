"use client"
import { Search, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center p-8 bg-gray-100">
            <div className="flex justify-between items-center w-full mb-12">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="text-blue-600">Find</span> & <span className="text-blue-600">Book</span> your favorite Doctor
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Easily schedule appointments with top-rated healthcare professionals in your area.
                    </p>
                    <Button variant="default" size="lg" className="rounded-full">
                        Book an Appointment
                    </Button>
                </div>
                <div className="w-1/2">
                    <img src="/team_of_doctors.jpeg" alt="Doctors" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
            
            <div className="flex justify-around w-full">
                <FeatureCard icon={<Search className="text-blue-600" />} title="Find Doctors" description="Search for specialists in your area" />
                <FeatureCard icon={<Calendar className="text-blue-600" />} title="Book Appointments" description="Schedule visits at your convenience" />
                <FeatureCard icon={<Star className="text-blue-600" />} title="Read Reviews" description="See ratings from other patients" />
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            {icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    )
}
