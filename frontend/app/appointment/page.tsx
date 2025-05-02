"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                Book Your Appointment
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                Schedule a visit with our healthcare professionals. We're here to help you on your journey to better
                health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          {!submitted ? (
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Appointment Request Form</CardTitle>
                <CardDescription>
                  Fill out the form below to request an appointment. Our team will contact you to confirm.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary Care</SelectItem>
                        <SelectItem value="specialized">Specialized Care</SelectItem>
                        <SelectItem value="pediatric">Pediatric Care</SelectItem>
                        <SelectItem value="womens">Women's Health</SelectItem>
                        <SelectItem value="mental">Mental Health</SelectItem>
                        <SelectItem value="preventive">Preventive Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Are you a new patient?</Label>
                    <RadioGroup defaultValue="new" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="new" />
                        <Label htmlFor="new">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing" id="existing" />
                        <Label htmlFor="existing">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Textarea id="reason" placeholder="Please briefly describe the reason for your visit" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insurance">Insurance Provider</Label>
                    <Input id="insurance" placeholder="Enter your insurance provider" />
                  </div>

                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                  <CheckCircle className="text-green-600" />
                  Appointment Request Submitted
                </CardTitle>
                <CardDescription>Thank you for submitting your appointment request.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team will review your request and contact you shortly to confirm your appointment. If you have any
                  questions in the meantime, please don't hesitate to contact us.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <a href="/">Return to Home</a>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Phone: (123) 456-7890</p>
                <p>Email: appointments@healthcareplus.com</p>
                <p>Address: 123 Healthcare Ave, Medical City, MC 12345</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Photo ID</li>
                  <li>• Insurance card</li>
                  <li>• List of current medications</li>
                  <li>• Medical records (if applicable)</li>
                  <li>• Payment method for copays/deductibles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
