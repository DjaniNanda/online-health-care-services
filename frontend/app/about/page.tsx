import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Building } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                About HealthCare Plus
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Dedicated to providing exceptional healthcare services with compassion and expertise since 2005.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our Story</h2>
                <p className="text-gray-600 md:text-lg">
                  Founded in 2005 by Dr. James Wilson, HealthCare Plus began with a simple mission: to provide
                  accessible, high-quality healthcare to our community. What started as a small clinic with just three
                  doctors has grown into a comprehensive healthcare center with multiple specialties and locations.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Throughout our journey, we've remained committed to our core values of excellence, compassion, and
                  innovation. We've embraced technological advancements and evidence-based practices to ensure that our
                  patients receive the best possible care.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/doctors">Meet Our Team</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/images/founder.jpg"
                alt="Dr. James Wilson, Founder of HealthCare Plus"
                width={550}
                height={550}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Our Values</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                The principles that guide our practice and patient care every day.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from medical care to patient experience.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-bold">Compassion</h3>
              <p className="text-gray-600">
                We treat each patient with empathy, dignity, and respect, recognizing their unique needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Award className="h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our practices and interactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Building className="h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-gray-600">We are committed to serving and improving the health of our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-blue-100">Years of Service</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">30+</h3>
              <p className="text-blue-100">Experienced Doctors</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">50k+</h3>
              <p className="text-blue-100">Patients Served</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">3</h3>
              <p className="text-blue-100">Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Leadership Team
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Meet the dedicated professionals leading our healthcare center.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image src="/images/doctor1.jpg" alt="Dr. James Wilson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Dr. James Wilson</h3>
              <p className="text-blue-700 font-medium">Founder & Chief Medical Officer</p>
              <p className="text-gray-600">Board-certified in Internal Medicine with over 25 years of experience.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image src="/images/doctor3.jpg" alt="Dr. Lisa Chen" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Dr. Lisa Chen</h3>
              <p className="text-blue-700 font-medium">Medical Director</p>
              <p className="text-gray-600">Specializes in Family Medicine and oversees clinical operations.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image src="/images/doctor7.jpg" alt="Robert Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Robert Johnson</h3>
              <p className="text-blue-700 font-medium">Chief Executive Officer</p>
              <p className="text-gray-600">Brings 15 years of healthcare administration experience to our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              Join Our Healthcare Family
            </h2>
            <p className="text-gray-600 md:text-xl">
              Experience compassionate care from a team dedicated to your well-being. Schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
