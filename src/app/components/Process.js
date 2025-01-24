export default function Process() {
    return(
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold">Simple Process</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">How CarNaija Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve streamlined the car importation process to make it easy and transparent for you.
            </p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Tell Us Your Preferred Car",
                description: "Find your desired car on CarMax and share the link with us. We'll review the details and provide a comprehensive quote.",
                icon: "🔍",
                highlight: "Free Quote"
              },
              {
                title: "We Handle Everything",
                description: "Our team manages the bidding, purchase, and shipping logistics. You'll receive regular updates throughout the process.",
                icon: "🚢",
                highlight: "Full Service"
              },
              {
                title: "Receive Your Car",
                description: "We'll deliver your car to your specified location in Nigeria, handling all customs and documentation.",
                icon: "🎉",
                highlight: "Door Delivery"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{step.icon}</div>
                <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {step.highlight}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}