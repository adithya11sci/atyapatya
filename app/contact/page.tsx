import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Building, Users, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
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
              Connect with the Atya Patya community in Tiruvalur. We're here to help with inquiries, registrations, and
              support.
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

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-xl text-gray-800 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-red-500" />
                    Quick Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Tournament Registration</p>
                        <p className="text-sm text-gray-600">tournaments@tiruvaluratya.org</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-orange-500 text-orange-600">
                        Contact
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Youth Programs</p>
                        <p className="text-sm text-gray-600">youth@tiruvaluratya.org</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-orange-500 text-orange-600">
                        Contact
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Media & Press</p>
                        <p className="text-sm text-gray-600">media@tiruvaluratya.org</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-orange-500 text-orange-600">
                        Contact
                      </Button>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Find Us</h2>
            <p className="text-xl text-gray-600">
              Locate our offices and training facilities across Tiruvalur district
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Office Map */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-3" />
                    Tiruvalur District Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-96 bg-gray-200">
                    {/* Placeholder for interactive map */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
                      <div className="text-center">
                        <MapPin className="h-16 w-16 mx-auto mb-4 text-orange-500" />
                        <p className="text-lg font-semibold text-gray-800">Interactive Map</p>
                        <p className="text-gray-600">Tiruvalur District Sports Complex</p>
                        <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                          Open in Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-gray-800">Main Facilities</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      District Sports Complex
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Youth Training Center
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Community Grounds
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Administrative Office
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg text-gray-800">Transportation</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-800">By Bus:</p>
                      <p className="text-gray-600">Regular services from Chennai, Thanjavur</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">By Train:</p>
                      <p className="text-gray-600">Tiruvalur Railway Station (2 km)</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">By Car:</p>
                      <p className="text-gray-600">Parking available on-site</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about Atya Patya and our programs</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I register for tournaments?",
                answer:
                  "You can register online through our website or visit the district office. Registration typically opens 30 days before each tournament.",
              },
              {
                question: "Are there age restrictions for players?",
                answer:
                  "We have different categories: Youth (Under 18), Senior (18-35), and Veterans (35+). Each category has specific tournaments.",
              },
              {
                question: "What equipment is needed to play?",
                answer:
                  "Minimal equipment is required - just comfortable sports clothing and shoes. All playing areas and basic equipment are provided.",
              },
              {
                question: "How can I become a certified referee?",
                answer:
                  "We conduct referee certification courses twice a year. Contact our training department for the next available course.",
              },
              {
                question: "Are there training programs for beginners?",
                answer:
                  "Yes, we offer beginner-friendly training sessions every weekend at various community centers across the district.",
              },
              {
                question: "How can schools participate in programs?",
                answer:
                  "Schools can register for our educational outreach program. We provide free coaching and equipment for participating schools.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Join the Atya Patya Family?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you're a player, coach, or enthusiast, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full"
            >
              Visit Our Office
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
