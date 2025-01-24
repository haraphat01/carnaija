import { ArrowRight, Shield, Truck, Clock, PhoneCall } from 'lucide-react';

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-semibold">Why Choose Us</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4">The CarNaija Advantage</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a comprehensive car importation service with features designed for your peace of mind.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Secure Payments",
                            description: "Multiple payment options with bank-grade security and buyer protection."
                        },
                        {
                            icon: Truck,
                            title: "Door Delivery",
                            description: "Complete shipping service from CarMax to your location in Nigeria."
                        },
                        {
                            icon: Clock,
                            title: "Real-time Updates",
                            description: "Track your car's journey with our advanced tracking system."
                        },
                        {
                            icon: PhoneCall,
                            title: "24/7 Support",
                            description: "Get help anytime via phone, WhatsApp, or email."
                        }
                    ].map((feature, index) => (
                        <div key={index} className="p-6 text-center">
                            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                                <feature.icon className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}