import Link from "next/link";
export default function Footer() {
    return (

        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="font-bold text-xl text-white mb-4">CarNaija</h3>
                        <p className="text-gray-400">
                            Your trusted partner in importing quality cars from abroad to Nigeria.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white">Services</Link></li>
                            <li><Link href="/calculator" className="hover:text-white">Cost Calculator</Link></li>
                            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Lagos Office: 123 Victoria Island</li>
                            <li>Phone: +234 123 456 7890</li>
                            <li>Email: info@carnaija.com</li>
                            <li>WhatsApp: +234 123 456 7890</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Twitter</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} CarNaija. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}