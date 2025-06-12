import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Trophy, Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Traditional Game of Tamil Nadu
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent animate-pulse">
              ATYA PATYA
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover the ancient sport that unites communities across Tiruvalur district
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Highlights
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Learn the Rules
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Active Players" },
              { icon: Trophy, number: "25", label: "Championships" },
              { icon: Calendar, number: "50+", label: "Annual Events" },
              { icon: MapPin, number: "12", label: "Participating Villages" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Highlights */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Experience the Thrill</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atya Patya combines strategy, agility, and teamwork in an ancient game that has been played for
              generations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-orange-600">Traditional Roots</h3>
                <p className="text-gray-700">
                  Dating back centuries, Atya Patya has been a cornerstone of Tamil culture, bringing communities
                  together through sport and celebration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3 text-red-600">Modern Competition</h3>
                <p className="text-gray-700">
                  Today's tournaments blend traditional gameplay with modern organization, creating exciting
                  competitions across Tiruvalur district.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Atya Patya Game in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Latest Updates</h2>
            <p className="text-xl text-gray-600">Stay informed about upcoming tournaments and community events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Championship 2024",
                date: "March 15, 2024",
                excerpt: "Registration now open for the biggest Atya Patya tournament of the year.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Youth Training Program",
                date: "February 28, 2024",
                excerpt: "New coaching initiative to train the next generation of players.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Cultural Festival Integration",
                date: "February 20, 2024",
                excerpt: "Atya Patya featured prominently in Tiruvalur's cultural celebrations.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((update, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">{update.date}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{update.title}</h3>
                  <p className="text-gray-600 mb-4">{update.excerpt}</p>
                  <Link
                    href="/updates"
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join the Atya Patya Community</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Be part of Tiruvalur's rich sporting heritage. Connect with players, officials, and enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Register as Player
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Contact Officials
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
