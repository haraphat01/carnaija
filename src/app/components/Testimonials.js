import Image from 'next/image';
export default function Testimonials() {
    return (

        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-semibold">Customer Stories</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don&apos;t just take our word for it - hear from some of our satisfied customers
                    </p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Oluwaseun A.",
                            role: "Business Owner",
                            comment: "The entire process was smooth and transparent. I got my Mercedes delivered right to my doorstep in Lagos.",
                            image: "/testimonial1.jpg"
                        },
                        {
                            name: "Chioma N.",
                            role: "Bank Executive",
                            comment: "CarNaija made importing my BMW so easy. Their customer service is exceptional, and the pricing was very competitive.",
                            image: "/testimonial2.jpg"
                        },
                        {
                            name: "Ibrahim M.",
                            role: "Doctor",
                            comment: "I was worried about importing a car, but CarNaija handled everything professionally. Highly recommended!",
                            image: "/testimonial3.jpg"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 relative mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">{testimonial.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}