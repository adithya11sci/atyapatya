"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Calendar, MapPin, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ImageCarousel from "./components/ImageCarousel"

export default function HomePage() {
  const [recentTournaments, setRecentTournaments] = useState([
    {
      id: 1,
      name: "Annual District Championship",
      year: "2023",
      winner: "Thiruthuraipoondi Warriors",
      runnerUp: "Mannargudi Fighters",
      thirdPlace: "Kodavasal Champions",
      participants: 24,
      description: "The biggest tournament of the year featuring teams from across Tiruvalur district",
      venue: "District Sports Complex",
      date: "2023-12-15",
      image: "/placeholder.svg?height=200&width=300",
      createdAt: Date.now() - 86400000 * 3, // 3 days ago
    },
    {
      id: 2,
      name: "Inter-Village Tournament",
      year: "2023",
      winner: "Kodavasal Champions",
      runnerUp: "Needamangalam Eagles",
      thirdPlace: "Vedaranyam Juniors",
      participants: 16,
      description: "Traditional village-level competition promoting grassroots participation",
      venue: "Community Ground, Kodavasal",
      date: "2023-10-20",
      image: "/placeholder.svg?height=200&width=300",
      createdAt: Date.now() - 86400000 * 2, // 2 days ago
    },
    {
      id: 3,
      name: "Youth League Championship",
      year: "2023",
      winner: "Tiruvalur Young Tigers",
      runnerUp: "Vedaranyam Juniors",
      thirdPlace: "Mannargudi Youth",
      participants: 20,
      description: "Dedicated tournament for young players under 18 years",
      venue: "Youth Training Center",
      date: "2023-08-10",
      image: "/placeholder.svg?height=200&width=300",
      createdAt: Date.now() - 86400000, // 1 day ago
    },
  ])

  // Load tournaments from localStorage on component mount
  useEffect(() => {
    const savedTournaments = localStorage.getItem("tournaments")
    if (savedTournaments) {
      const parsedTournaments = JSON.parse(savedTournaments)
      if (parsedTournaments.length > 0) {
        // Sort by createdAt timestamp (newest added first), fallback to id for older tournaments
        const sortedTournaments = parsedTournaments.sort((a, b) => {
          // If both have createdAt, sort by that
          if (a.createdAt && b.createdAt) {
            return b.createdAt - a.createdAt
          }
          // If only one has createdAt, prioritize it
          if (a.createdAt && !b.createdAt) return -1
          if (!a.createdAt && b.createdAt) return 1
          // If neither has createdAt, sort by id (newer ids are larger)
          return b.id - a.id
        })
        setRecentTournaments(sortedTournaments.slice(0, 3))
      }
    }
  }, [])

  // Listen for tournament updates
  useEffect(() => {
    const handleTournamentsUpdate = () => {
      const savedTournaments = localStorage.getItem("tournaments")
      if (savedTournaments) {
        const parsedTournaments = JSON.parse(savedTournaments)
        // Sort by createdAt timestamp (newest added first), fallback to id for older tournaments
        const sortedTournaments = parsedTournaments.sort((a, b) => {
          // If both have createdAt, sort by that
          if (a.createdAt && b.createdAt) {
            return b.createdAt - a.createdAt
          }
          // If only one has createdAt, prioritize it
          if (a.createdAt && !b.createdAt) return -1
          if (!a.createdAt && b.createdAt) return 1
          // If neither has createdAt, sort by id (newer ids are larger)
          return b.id - a.id
        })
        setRecentTournaments(sortedTournaments.slice(0, 3))
      }
    }

    window.addEventListener("tournamentsUpdated", handleTournamentsUpdate)

    return () => {
      window.removeEventListener("tournamentsUpdated", handleTournamentsUpdate)
    }
  }, [])

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
              <Link href="/about#rules">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn the Rules
                </Button>
              </Link>
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

      {/* Image Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Atya Patya Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the excitement and tradition of Atya Patya through these captivating moments
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Recent Tournament Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Recent Tournament Results</h2>
            <p className="text-xl text-gray-600">Latest championship outcomes and competitive highlights</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentTournaments.slice(0, 3).map((tournament, index) => (
              <Card
                key={tournament.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index === 0 ? "ring-2 ring-orange-200 bg-gradient-to-br from-orange-50 to-white" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={tournament.image || "/placeholder.svg"}
                    alt={tournament.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">{tournament.year}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/70 text-white">{tournament.participants} Teams</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">
                      {new Date(tournament.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </Badge>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-20">
                      <Badge className="bg-blue-500 text-white animate-pulse">Latest</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{tournament.name}</h3>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Venue:</strong> {tournament.venue}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Date:</strong>{" "}
                      {new Date(tournament.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Winner:</span>
                      <span className="font-semibold text-orange-600">{tournament.winner}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Runner-up:</span>
                      <span className="font-medium text-gray-700">{tournament.runnerUp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Third Place:</span>
                      <span className="font-medium text-gray-700">{tournament.thirdPlace}</span>
                    </div>
                  </div>

                  <Link href="/achievements">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      View All Results
                    </Button>
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
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"

              >
                Contact Officials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
