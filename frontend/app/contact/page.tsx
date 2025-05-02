import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                We're here to help. Reach out to us with any questions or concerns about our healthcare services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject of your message" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" required />
                  </div>

                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-700 mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                      <p className="text-gray-600">Emergency: (123) 456-7899</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-700 mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@healthcareplus.com</p>
                      <p className="text-gray-600">support@healthcareplus.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-700 mt-1" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">123 Healthcare Ave</p>
                      <p className="text-gray-600">Medical City, MC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-blue-700 mt-1" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8am - 8pm</p>
                      <p className="text-gray-600">Saturday: 9am - 5pm</p>
                      <p className="text-gray-600">Sunday: 10am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Connect With Us</h2>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                    <Facebook className="h-6 w-6 text-blue-700" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                    <Twitter className="h-6 w-6 text-blue-700" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                    <Instagram className="h-6 w-6 text-blue-700" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                    <Linkedin className="h-6 w-6 text-blue-700" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our Locations</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Visit us at one of our convenient healthcare centers.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Main Center</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                </div>
                <p className="text-gray-600">123 Healthcare Ave, Medical City, MC 12345</p>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">North Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                </div>
                <p className="text-gray-600">456 Wellness Blvd, North Medical, NM 67890</p>
                <p className="text-gray-600">Phone: (123) 456-7891</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">South Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                </div>
                <p className="text-gray-600">789 Health Street, South Medical, SM 10112</p>
                <p className="text-gray-600">Phone: (123) 456-7892</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Find answers to common questions about our services and policies.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">How do I schedule an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can schedule an appointment by calling our office, using our online booking system, or visiting
                  one of our locations in person.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">What insurance plans do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare,
                  Medicare, and Medicaid.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">Do you offer telehealth services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer telehealth services for many types of appointments. Please call our office to determine
                  if your visit is eligible for telehealth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">What should I bring to my first appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Please bring your photo ID, insurance card, list of current medications, and any relevant medical
                  records or test results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-blue-100 md:text-xl">
              Book an appointment today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
