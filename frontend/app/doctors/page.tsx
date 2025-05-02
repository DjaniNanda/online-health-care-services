import Link from "next/link"
import { Button } from "@/components/ui/button"
import DoctorCard from "@/components/doctor-card"

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                Meet Our Doctors
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Our team of experienced healthcare professionals is dedicated to providing you with the best care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            <DoctorCard
              name="Dr. David Kim"
              specialty="Orthopedic Surgeon"
              description="Specializes in orthopedic surgery with expertise in joint replacement and sports medicine."
              imageSrc="/images/doctor4.jpg"
            />
            <DoctorCard
              name="Dr. Lisa Patel"
              specialty="OB/GYN"
              description="Dedicated to women's health with a focus on comprehensive obstetric and gynecological care."
              imageSrc="/images/doctor2.jpg"
            />
            <DoctorCard
              name="Dr. Robert Wilson"
              specialty="Family Medicine"
              description="Provides comprehensive primary care for patients of all ages with a focus on preventive medicine."
              imageSrc="/images/doctor7.jpg"
            />
            <DoctorCard
              name="Dr. Jennifer Lee"
              specialty="Dermatologist"
              description="Expert in diagnosing and treating skin conditions with a focus on both medical and cosmetic dermatology."
              imageSrc="/images/doctor5.jpg"
            />
            <DoctorCard
              name="Dr. Thomas Brown"
              specialty="Psychiatrist"
              description="Specializes in mental health treatment with a compassionate approach to therapy and medication management."
              imageSrc="/images/doctor9.jpg"
            />
            <DoctorCard
              name="Dr. Maria Gonzalez"
              specialty="Endocrinologist"
              description="Expert in treating hormonal disorders and conditions affecting the endocrine system."
              imageSrc="/images/doctor6.jpg"
            />
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Our Team Values
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                The principles that guide our healthcare professionals in providing exceptional care.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We place our patients at the center of everything we do, tailoring our care to meet individual needs and
                preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                Our doctors are committed to ongoing education and staying current with the latest medical advancements
                and techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work together as a team, consulting with colleagues across specialties to provide comprehensive care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Evidence-Based Practice</h3>
              <p className="text-gray-600">
                Our treatment decisions are guided by the latest research and clinical evidence to ensure optimal
                outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                We deliver care with empathy and understanding, recognizing the emotional aspects of health and healing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Ethical Practice</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our interactions, maintaining patient confidentiality and
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                Our Credentials
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Our doctors are highly qualified with extensive education, training, and certifications.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Education</h3>
              <p className="text-gray-600">
                Our doctors have graduated from top medical schools including Harvard Medical School, Johns Hopkins
                School of Medicine, Stanford University School of Medicine, and other prestigious institutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Board Certifications</h3>
              <p className="text-gray-600">
                All of our physicians are board-certified in their respective specialties, demonstrating their expertise
                and commitment to maintaining the highest standards of care.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Continuing Education</h3>
              <p className="text-gray-600">
                Our doctors regularly participate in continuing medical education to stay current with the latest
                advancements in healthcare and medical technology.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Professional Memberships</h3>
              <p className="text-gray-600">
                Our physicians are active members of professional medical associations and societies, collaborating with
                colleagues to advance medical knowledge and improve patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Meet Our Doctors?</h2>
            <p className="text-blue-100 md:text-xl">
              Schedule an appointment today and experience our exceptional care.
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
