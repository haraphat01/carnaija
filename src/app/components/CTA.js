import { ArrowRight, Shield, Truck, Clock, PhoneCall } from 'lucide-react';
import Link from 'next/link';
export default function CTA() {
    return (
        <section className="bg-green-600 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Import Your Dream Car?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Start your journey today. Get a free quote and join thousands of satisfied customers who&apos;ve trusted CarNaija.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/submit-link"
                        className="inline-flex items-center bg-white text-green-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
                    >
                        Get Started Now <ArrowRight className="ml-2" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-400 transition-all"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    )
}