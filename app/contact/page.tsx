"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Building, MessageSquare, Send, Trophy, Users, Target } from "lucide-react"

export default function ContactPage() {
  const locations = [
    {
      name: "District Sports Office",
      address: "Tiruvallur Town, Main Road",
      type: "Administrative",
      icon: Building,
      color: "bg-orange-500",
    },
    {
      name: "Central Training Ground",
      address: "Ponneri Road, Tiruvallur",
      type: "Training Facility",
      icon: Target,
      color: "bg-red-500",
    },
    {
      name: "Community Sports Center",
      address: "Gummidipoondi, Tiruvallur",
      type: "Community Hub",
      icon: Users,
      color: "bg-yellow-500",
    },
    {
      name: "Tournament Arena",
      address: "Poonamallee Highway, Tiruvallur",
      type: "Competition Venue",
      icon: Trophy,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Get in Touch</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Connect with the Atya Patya community in Tiruvalur. We're here to help with inquiries and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        type="text"
                        placeholder="Enter your first name"
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        placeholder="Enter your last name"
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <Input
                      type="text"
                      placeholder="What is this regarding?"
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-xl text-gray-800 flex items-center">
                    <Building className="h-6 w-6 mr-3 text-orange-500" />
                    District Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Tiruvalur District Sports Office</p>
                        <p className="text-gray-600">
                          123 Sports Complex Road,
                          <br />
                          Tiruvalur - 610001,
                          <br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-800">+91 4366 234567</p>
                        <p className="text-sm text-gray-600">Main Office</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-800">info@tiruvaluratya.org</p>
                        <p className="text-sm text-gray-600">General Inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-orange-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Office Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Find Us on Map</h2>
            <p className="text-xl text-gray-600">Interactive map showing all our locations in Tiruvallur district</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  Atya Patya Locations - Tiruvallur District
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[500px] bg-gray-200">
                  {/* Google Maps Embed with multiple markers for Tiruvallur */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d79.63089645!3d13.1186899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sTiruvallur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus&markers=color:red%7Clabel:A%7C13.1186899,79.9108105&markers=color:blue%7Clabel:B%7C13.1500,79.8500&markers=color:green%7Clabel:C%7C13.0800,79.9500&markers=color:yellow%7Clabel:D%7C13.1300,79.8800"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-lg"
                  />

                  {/* Location Legend Overlay */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      Our Locations
                    </h3>
                    <div className="space-y-2 text-sm">
                      {locations.map((location, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${location.color}`}></div>
                          <span className="text-gray-700 font-medium">{location.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* District Info Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-800">Tiruvallur District</p>
                        <p className="text-gray-600">Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Visit Us?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Choose the location most convenient for you and join the Atya Patya community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            
          </div>
        </div>
      </section>
    </div>
  )
}
