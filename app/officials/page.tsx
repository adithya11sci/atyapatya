import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Award, Calendar, Users } from "lucide-react"
import Image from "next/image"

export default function OfficialsPage() {
  const officials = [
    {
      name: "Dr. Rajesh Kumar",
      title: "District Sports Officer",
      department: "Tiruvalur District Administration",
      experience: "15 years",
      specialization: "Sports Administration & Development",
      email: "rajesh.kumar@tiruvalur.gov.in",
      phone: "+91 98765 43210",
      image: "/placeholder.svg?height=300&width=300",
      achievements: ["National Sports Award 2020", "Excellence in Rural Sports Development"],
      bio: "Leading sports development initiatives across Tiruvalur district with focus on traditional games preservation.",
    },
    {
      name: "Mrs. Priya Devi",
      title: "Chief Referee",
      department: "Tamil Nadu Atya Patya Association",
      experience: "12 years",
      specialization: "Game Rules & Officiating",
      email: "priya.devi@tnatyapatya.org",
      phone: "+91 98765 43211",
      image: "/placeholder.svg?height=300&width=300",
      achievements: ["Certified International Referee", "Best Official Award 2022"],
      bio: "Expert in traditional game rules with extensive experience in tournament management and player development.",
    },
    {
      name: "Mr. Selvam Murugan",
      title: "Tournament Director",
      department: "Tiruvalur Sports Council",
      experience: "18 years",
      specialization: "Event Management & Coordination",
      email: "selvam.murugan@tiruvalursports.org",
      phone: "+91 98765 43212",
      image: "/placeholder.svg?height=300&width=300",
      achievements: ["Outstanding Service Award", "Community Sports Champion"],
      bio: "Veteran organizer responsible for major tournaments and community engagement programs across the district.",
    },
    {
      name: "Ms. Lakshmi Narayanan",
      title: "Youth Development Coordinator",
      department: "District Youth Affairs",
      experience: "8 years",
      specialization: "Youth Training & Development",
      email: "lakshmi.n@tiruvaluryouth.gov.in",
      phone: "+91 98765 43213",
      image: "/placeholder.svg?height=300&width=300",
      achievements: ["Youth Mentor of the Year", "Innovation in Sports Training"],
      bio: "Dedicated to nurturing young talent and promoting Atya Patya among school and college students.",
    },
    {
      name: "Mr. Arjun Krishnan",
      title: "Technical Advisor",
      department: "Tamil Nadu Traditional Games Board",
      experience: "20 years",
      specialization: "Game Strategy & Analysis",
      email: "arjun.krishnan@tntgb.org",
      phone: "+91 98765 43214",
      image: "/placeholder.svg?height=300&width=300",
      achievements: ["Master Strategist Award", "Traditional Games Preservation Honor"],
      bio: "Former champion player turned advisor, providing strategic insights and maintaining game authenticity.",
    },
    {
      name: "Dr. Meera Shankar",
      title: "Sports Medicine Officer",
      department: "District Health Department",
      experience: "10 years",
      specialization: "Sports Injury Prevention & Treatment",
      email: "meera.shankar@tiruvalurhealth.gov.in",
      phone: "+91 98765 43215",
      image: "/placeholder.svg?height=300&width=300",
      achievements: ["Sports Medicine Excellence Award", "Player Welfare Champion"],
      bio: "Ensuring player safety and health through comprehensive medical support and injury prevention programs.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Leadership Team</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Officials
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who govern, promote, and develop Atya Patya in Tiruvalur district
            </p>
          </div>
        </div>
      </section>

      {/* Officials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officials.map((official, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={official.image || "/placeholder.svg"}
                    alt={official.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-orange-500 text-white mb-2">{official.experience} Experience</Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{official.name}</h3>
                    <p className="text-orange-600 font-semibold mb-2">{official.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{official.department}</p>
                    <Badge variant="outline" className="text-xs">
                      {official.specialization}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{official.bio}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="truncate">{official.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{official.phone}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-yellow-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {official.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                  >
                    Contact Official
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Organizational Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the administrative framework that supports Atya Patya in Tiruvalur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "District Administration",
                description: "Overall governance and policy implementation",
                count: "3 Officials",
              },
              {
                icon: Award,
                title: "Sports Council",
                description: "Tournament organization and athlete development",
                count: "5 Members",
              },
              {
                icon: Calendar,
                title: "Event Management",
                description: "Competition scheduling and venue coordination",
                count: "4 Coordinators",
              },
              {
                icon: MapPin,
                title: "Regional Representatives",
                description: "Village-level coordination and outreach",
                count: "12 Representatives",
              },
            ].map((dept, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <dept.icon className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{dept.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                  <Badge className="bg-orange-100 text-orange-800">{dept.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Get in Touch with Our Team</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Have questions about Atya Patya or want to get involved? Our officials are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full"
              >
                Contact District Office
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
