import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">HealthCare Plus</h3>
            <p className="mb-4">
              Providing compassionate, high-quality healthcare services to our community since 2005.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-blue-400">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-blue-400">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/primary-care" className="hover:text-blue-400">
                  Primary Care
                </Link>
              </li>
              <li>
                <Link href="/services/specialized-care" className="hover:text-blue-400">
                  Specialized Care
                </Link>
              </li>
              <li>
                <Link href="/services/pediatric-care" className="hover:text-blue-400">
                  Pediatric Care
                </Link>
              </li>
              <li>
                <Link href="/services/womens-health" className="hover:text-blue-400">
                  Women's Health
                </Link>
              </li>
              <li>
                <Link href="/services/mental-health" className="hover:text-blue-400">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link href="/services/preventive-care" className="hover:text-blue-400">
                  Preventive Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400" />
                <span>123 Healthcare Ave, Medical City, MC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@healthcareplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HealthCare Plus. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-blue-400">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
