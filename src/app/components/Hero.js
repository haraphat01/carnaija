import Image from "next/image"
import { ArrowRight, Shield, Truck, Clock, PhoneCall } from 'lucide-react';
import honda from "../../../public/images/hyundai.webp"
import Link from 'next/link';
export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-green-600 to-green-700 text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-20 relative">
                <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
                    <span className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                        Trusted by 10,000+ Customers
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Your Gateway to Quality <span className="text-yellow-400">Foreign Cars</span>
                    </h1>
                    <p className="text-xl mb-8 text-gray-100 max-w-xl">
                        We simplify the process of importing your dream car from abroad to Nigeria. Expert bidding, secure shipping, and hassle-free delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="/submit-link"
                            className="inline-flex items-center bg-white text-green-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
                        >
                            Log in <ArrowRight className="ml-2" />
                        </Link>
                        <Link
                            href="/calculator"
                            className="inline-flex items-center bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-400 transition-all"
                        >
                            Calculate Cost
                        </Link>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={honda}
                            alt="Luxury Car Import"
                            fill
                            className="object-cover rounded-2xl shadow-2xl"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-xl w-[80%]">
                        <div className="flex justify-between text-gray-600 text-sm">
                            <div className="text-center">
                                <div className="font-bold text-green-600 text-2xl">70+</div>
                                <div>Cars Imported</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-green-600 text-2xl">98%</div>
                                <div>Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-green-600 text-2xl">6 weeks</div>
                                <div>Avg. Delivery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}