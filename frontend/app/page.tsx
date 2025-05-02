import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import DoctorCard from "@/components/doctor-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                  Your Health Is Our Priority
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Providing compassionate, high-quality healthcare services to our community. Schedule an appointment
                  today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/images/homepage-hero.jpg"
                alt="Medical stethoscope on patient chart"
                width={550}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Why Choose Us
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                We provide exceptional healthcare services with a patient-centered approach.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-blue-100">
              <CardHeader className="pb-2">
                <Clock className="h-12 w-12 text-blue-700" />
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Round-the-clock medical assistance for emergencies and inquiries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100">
              <CardHeader className="pb-2">
                <Calendar className="h-12 w-12 text-blue-700" />
                <CardTitle className="text-xl">Easy Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Book appointments online or via phone with our simple scheduling system.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100">
              <CardHeader className="pb-2">
                <MapPin className="h-12 w-12 text-blue-700" />
                <CardTitle className="text-xl">Multiple Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Conveniently located facilities to serve you better across the city.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100">
              <CardHeader className="pb-2">
                <Phone className="h-12 w-12 text-blue-700" />
                <CardTitle className="text-xl">Telehealth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Virtual consultations from the comfort of your home when you need them.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Comprehensive healthcare services tailored to your needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Primary Care"
              description="Comprehensive healthcare for patients of all ages, focusing on prevention, diagnosis, and treatment."
              icon="Heart"
            />
            <ServiceCard
              title="Specialized Care"
              description="Expert care in cardiology, neurology, orthopedics, and other specialized medical fields."
              icon="Activity"
            />
            <ServiceCard
              title="Pediatric Care"
              description="Dedicated healthcare services for infants, children, and adolescents."
              icon="Baby"
            />
            <ServiceCard
              title="Women's Health"
              description="Specialized care addressing the unique health needs of women at every stage of life."
              icon="UserRound"
            />
            <ServiceCard
              title="Mental Health"
              description="Supportive services for mental and emotional wellbeing, including therapy and counseling."
              icon="Brain"
            />
            <ServiceCard
              title="Preventive Care"
              description="Proactive health services focused on preventing illness and promoting overall wellness."
              icon="Shield"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Meet Our Doctors
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Our team of experienced healthcare professionals is dedicated to providing you with the best care.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <DoctorCard
              name="Dr. Sarah Johnson"
              specialty="Cardiologist"
              description="Board-certified cardiologist with over 15 years of experience in treating heart conditions."
              imageSrc="/images/doctor8.jpg"
            />
            <DoctorCard
              name="Dr. Michael Chen"
              specialty="Pediatrician"
              description="Specialized in pediatric care with a focus on child development and preventive healthcare."
              imageSrc="/images/doctor1.jpg"
            />
            <DoctorCard
              name="Dr. Emily Rodriguez"
              specialty="Neurologist"
              description="Expert in diagnosing and treating complex neurological disorders with a patient-centered approach."
              imageSrc="/images/doctor3.jpg"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/doctors">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Patient Testimonials
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Hear what our patients have to say about their experience with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="The care I received was exceptional. The doctors took the time to listen to my concerns and provided personalized treatment."
              author="Jennifer L."
              rating={5}
            />
            <TestimonialCard
              quote="I've been a patient for over 5 years, and I'm always impressed by the professionalism and compassion of the entire staff."
              author="Robert M."
              rating={5}
            />
            <TestimonialCard
              quote="The online appointment system is so convenient, and the wait times are minimal. Highly recommend this healthcare center."
              author="David K."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Schedule Your Visit?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
                  Book an appointment today and take the first step towards better health.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-200" />
                <div>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="text-blue-100">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-blue-200" />
                <div>
                  <h3 className="text-xl font-bold">Visit Us</h3>
                  <p className="text-blue-100">123 Healthcare Ave, Medical City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-blue-200" />
                <div>
                  <h3 className="text-xl font-bold">Hours</h3>
                  <p className="text-blue-100">Monday - Friday: 8am - 8pm</p>
                  <p className="text-blue-100">Saturday: 9am - 5pm</p>
                  <p className="text-blue-100">Sunday: 10am - 2pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
