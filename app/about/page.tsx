import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Target, Trophy, Heart, Globe, Zap, BookOpen, Flag, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Traditional Heritage</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              About Atya Patya
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the rich history, cultural significance, and gameplay of Tamil Nadu's beloved traditional sport
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Ancient Origins</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Atya Patya, also known as "Hadudu" in some regions, is an ancient contact sport that originated in the
                  Indian subcontinent over 4,000 years ago. The game has deep roots in Tamil culture and has been played
                  in the villages of Tiruvalur district for generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The name "Atya Patya" comes from the Tamil words meaning "to attack" and "to defend," perfectly
                  capturing the essence of this strategic team sport that requires both physical prowess and mental
                  agility.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <Clock className="h-8 w-8 text-orange-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">4000+ Years</h4>
                    <p className="text-sm text-gray-600">Ancient Heritage</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <Globe className="h-8 w-8 text-red-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">Regional Sport</h4>
                    <p className="text-sm text-gray-600">Tamil Tradition</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Historical Atya Patya"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Heart className="h-8 w-8 text-red-500 mb-2" />
                <p className="font-semibold text-gray-800">Cultural Pride</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Game Guide</Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Game Rules & Gameplay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the strategic depth and excitement of Atya Patya
            </p>
          </div>

          {/* Court Layout */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="overflow-hidden shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-2xl text-center">The Atya Patya Court</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Court Image */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg border-4 border-green-600">
                      {/* Court Diagram */}
                      <div className="relative bg-green-300 rounded-lg p-6 min-h-96">
                        {/* Center Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white transform -translate-x-1/2"></div>

                        {/* Team A Side */}
                        <div className="absolute top-4 left-4 right-1/2 bottom-4 border-2 border-white rounded-l-lg bg-orange-200/50">
                          <div className="text-center mt-8">
                            <h3 className="font-bold text-orange-800">Team A</h3>
                            <p className="text-sm text-orange-700">Defending Side</p>
                          </div>
                          {/* Baulk Line */}
                          <div className="absolute bottom-12 left-2 right-2 h-1 bg-white"></div>
                          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-800">
                            Baulk Line
                          </div>
                        </div>

                        {/* Team B Side */}
                        <div className="absolute top-4 left-1/2 right-4 bottom-4 border-2 border-white rounded-r-lg bg-red-200/50">
                          <div className="text-center mt-8">
                            <h3 className="font-bold text-red-800">Team B</h3>
                            <p className="text-sm text-red-700">Raiding Side</p>
                          </div>
                          {/* Baulk Line */}
                          <div className="absolute bottom-12 left-2 right-2 h-1 bg-white"></div>
                          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-red-800">
                            Baulk Line
                          </div>
                        </div>

                        {/* Center Circle */}
                        <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-yellow-200/50">
                          <div className="text-center mt-4 text-xs font-bold">CENTER</div>
                        </div>

                        {/* Dimensions */}
                        <div className="absolute -bottom-8 left-0 right-0 text-center text-sm font-semibold text-gray-700">
                          13m × 10m
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Court Specifications */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Court Specifications</h3>

                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                        <div className="w-4 h-4 bg-orange-500 rounded-full mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Total Dimensions</h4>
                          <p className="text-gray-600">13 meters × 10 meters</p>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-red-50 rounded-lg">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Each Half</h4>
                          <p className="text-gray-600">6.5 meters × 10 meters</p>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Baulk Line</h4>
                          <p className="text-gray-600">3.75 meters from back line</p>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-green-50 rounded-lg">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Center Line</h4>
                          <p className="text-gray-600">Divides court into two equal halves</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Basic Rules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Team Formation",
                description: "Two teams of 7 players each, with specific roles for raiders and defenders",
                details: ["1 Raider at a time", "6 Defenders", "Strategic positioning"],
                color: "orange",
              },
              {
                icon: Target,
                title: "Objective",
                description: "Raiders must touch opponents and return to their half while holding breath",
                details: ["Tag opponents", "Return safely", "Continuous chanting"],
                color: "red",
              },
              {
                icon: Trophy,
                title: "Scoring",
                description: "Points awarded for successful raids and defensive tackles",
                details: ["1 point per tag", "Bonus for all-out", "Time-based rounds"],
                color: "green",
              },
              {
                icon: Clock,
                title: "Time Rules",
                description: "Matches are played in two halves with specific time limits",
                details: ["Two halves of 20 minutes", "5-minute break", "30-second raid limit"],
                color: "purple",
              },
              {
                icon: Flag,
                title: "Boundary Rules",
                description: "Players must stay within designated court boundaries",
                details: ["Stepping out eliminates", "Cross baulk line", "Boundary lines count"],
                color: "yellow",
              },
              {
                icon: Shield,
                title: "Defending Strategy",
                description: "Defenders work together to tackle and stop the raider",
                details: ["Prevent return", "Use teamwork", "Stay in bounds"],
                color: "blue",
              },
            ].map((rule, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className={`bg-${rule.color}-50 pb-4`}>
                  <rule.icon className={`h-12 w-12 text-${rule.color}-500 mb-4`} />
                  <CardTitle className="text-xl text-gray-800">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{rule.description}</p>
                  <ul className="space-y-2">
                    {rule.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-${rule.color}-500 rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advanced Rules */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Zap className="h-6 w-6 mr-3" />
                  Special Situations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">All Out</h3>
                    <p className="text-gray-600 text-sm">
                      When all players of a team are eliminated, the opposing team gets 2 bonus points and all
                      eliminated players return to the game.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Super Tackle</h3>
                    <p className="text-gray-600 text-sm">
                      When 3 or fewer defenders successfully tackle a raider, they earn an additional bonus point.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Technical Point</h3>
                    <p className="text-gray-600 text-sm">
                      Awarded when the opposing team commits a technical foul or violation of rules.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Do-or-Die Raid</h3>
                    <p className="text-gray-600 text-sm">
                      If a team fails to score in two consecutive raids, the third raid becomes a do-or-die situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="h-6 w-6 mr-3" />
                  Key Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Raiding Techniques</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Hand Touch: Quick tag with hand</li>
                      <li>• Toe Touch: Tag with foot while maintaining balance</li>
                      <li>• Dubki: Duck under defenders' arms</li>
                      <li>• Escape: Quick movements to avoid tackles</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Defensive Techniques</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ankle Hold: Grab raider's ankle</li>
                      <li>• Thigh Hold: Control raider's movement</li>
                      <li>• Chain Tackle: Coordinated team tackle</li>
                      <li>• Block: Prevent raider's escape route</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Breathing Technique</h3>
                    <p className="text-gray-600 text-sm">
                      Raiders must chant "Kabaddi" continuously without taking a breath. This requires excellent lung
                      capacity and breath control.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Cultural Significance in Tiruvalur</h2>
              <p className="text-xl text-gray-600">
                More than just a game - a celebration of community, tradition, and Tamil heritage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Bonding</h3>
                  <p className="text-gray-700">
                    Atya Patya serves as a powerful tool for bringing together people from different villages, fostering
                    unity and friendship across Tiruvalur district.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Festival Integration</h3>
                  <p className="text-gray-700">
                    The game is an integral part of local festivals and celebrations, with major tournaments coinciding
                    with harvest festivals and religious occasions.
                  </p>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Youth Development</h3>
                  <p className="text-gray-700">
                    The sport plays a crucial role in developing physical fitness, mental toughness, and leadership
                    qualities among the youth of Tiruvalur.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Preservation</h3>
                  <p className="text-gray-700">
                    By maintaining and promoting Atya Patya, Tiruvalur district preserves an important aspect of Tamil
                    cultural heritage for future generations.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Experience Atya Patya?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Now that you know about our rich heritage and game rules, join the community and be part of this amazing
            traditional sport!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
          </div>
        </div>
      </section>
    </div>
  )
}
