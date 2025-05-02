import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                Our Healthcare Services
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Comprehensive medical services tailored to meet your healthcare needs at every stage of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Primary Care"
              description="Comprehensive healthcare for patients of all ages, focusing on prevention, diagnosis, and treatment of common illnesses and chronic conditions."
              icon="Heart"
            />
            <ServiceCard
              title="Specialized Care"
              description="Expert care in cardiology, neurology, orthopedics, and other specialized medical fields for complex health conditions."
              icon="Activity"
            />
            <ServiceCard
              title="Pediatric Care"
              description="Dedicated healthcare services for infants, children, and adolescents, including well-child visits, immunizations, and treatment for childhood illnesses."
              icon="Baby"
            />
            <ServiceCard
              title="Women's Health"
              description="Specialized care addressing the unique health needs of women at every stage of life, including reproductive health, pregnancy care, and menopause management."
              icon="UserRound"
            />
            <ServiceCard
              title="Mental Health"
              description="Supportive services for mental and emotional wellbeing, including therapy, counseling, and psychiatric care for conditions like depression and anxiety."
              icon="Brain"
            />
            <ServiceCard
              title="Preventive Care"
              description="Proactive health services focused on preventing illness and promoting overall wellness, including screenings, vaccinations, and health education."
              icon="Shield"
            />
            <ServiceCard
              title="Geriatric Care"
              description="Specialized healthcare for older adults, addressing age-related conditions and focusing on maintaining quality of life and independence."
              icon="Leaf"
            />
            <ServiceCard
              title="Diagnostic Services"
              description="Comprehensive testing and imaging services including laboratory tests, X-rays, ultrasounds, and other diagnostic procedures."
              icon="Microscope"
            />
            <ServiceCard
              title="Telehealth"
              description="Virtual healthcare services allowing you to consult with our medical professionals from the comfort of your home."
              icon="Video"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Our Care Process
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                We've designed our healthcare process to be patient-centered, efficient, and effective.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Schedule</h3>
              <p className="text-gray-600">
                Book an appointment online, by phone, or in person at one of our locations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="text-gray-600">
                Meet with our healthcare professionals who will listen to your concerns and needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Treatment</h3>
              <p className="text-gray-600">Receive personalized care based on your specific health needs and goals.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Follow-up</h3>
              <p className="text-gray-600">
                Ongoing support and follow-up care to ensure your continued health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Insurance & Payment
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                We work with most major insurance providers and offer flexible payment options.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Accepted Insurance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blue Cross Blue Shield</li>
                <li>• Aetna</li>
                <li>• Cigna</li>
                <li>• UnitedHealthcare</li>
                <li>• Medicare</li>
                <li>• Medicaid</li>
                <li>• And many more</li>
              </ul>
              <p className="text-gray-600">Please contact our office to verify your specific insurance coverage.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Payment Options</h3>
              <p className="text-gray-600">We accept various payment methods including:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cash</li>
                <li>• Credit/Debit Cards</li>
                <li>• Health Savings Accounts (HSA)</li>
                <li>• Flexible Spending Accounts (FSA)</li>
              </ul>
              <p className="text-gray-600">
                We also offer payment plans for those who qualify. Please speak with our billing department for more
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Experience Our Care?
            </h2>
            <p className="text-blue-100 md:text-xl">
              Schedule an appointment today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
