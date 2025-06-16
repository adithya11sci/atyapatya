import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Trophy, Clock, Flag, Shield, Zap, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function RulesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Game Guide</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Atya Patya Rules
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Master the ancient art of Atya Patya with our comprehensive guide to rules, strategies, and gameplay
            </p>
          </div>
        </div>
      </section>

      {/* Court Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">The Atya Patya Court</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the playing field is essential for mastering the game
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-2xl text-center">Official Court Dimensions</CardTitle>
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
                        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700">
                          10m
                        </div>
                        <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 rotate-90 text-sm font-semibold text-gray-700">
                          10m
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

                      <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Surface</h4>
                          <p className="text-gray-600">Soft soil or mat surface</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Basic Rules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Basic Game Rules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential rules every player must know to participate in Atya Patya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Team Formation",
                description: "Two teams of 7 players each compete against one another",
                details: [
                  "7 players per team on court",
                  "Up to 5 substitute players",
                  "One team raids, other defends",
                  "Teams switch roles each half",
                ],
                color: "orange",
              },
              {
                icon: Target,
                title: "Raiding Objective",
                description: "Raiders must tag opponents and return to their half safely",
                details: [
                  "One raider enters opponent's half",
                  "Must chant 'Kabaddi' continuously",
                  "Tag as many defenders as possible",
                  "Return to own half without being tackled",
                ],
                color: "red",
              },
              {
                icon: Shield,
                title: "Defending Strategy",
                description: "Defenders work together to tackle and stop the raider",
                details: [
                  "Prevent raider from returning",
                  "Use teamwork to tackle",
                  "Stay within court boundaries",
                  "Coordinate defensive moves",
                ],
                color: "blue",
              },
              {
                icon: Trophy,
                title: "Scoring System",
                description: "Points awarded for successful raids and defensive tackles",
                details: [
                  "1 point per tagged defender",
                  "1 point for successful tackle",
                  "2 points for 'All Out' bonus",
                  "Match decided by total points",
                ],
                color: "green",
              },
              {
                icon: Clock,
                title: "Time Rules",
                description: "Matches are played in two halves with specific time limits",
                details: [
                  "Two halves of 20 minutes each",
                  "5-minute break between halves",
                  "30-second time limit per raid",
                  "Teams switch sides at halftime",
                ],
                color: "purple",
              },
              {
                icon: Flag,
                title: "Boundary Rules",
                description: "Players must stay within designated court boundaries",
                details: [
                  "Stepping out results in elimination",
                  "Raider must cross baulk line",
                  "Defenders can't cross center line",
                  "Boundary lines are part of court",
                ],
                color: "yellow",
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
        </div>
      </section>

      {/* Advanced Rules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Advanced Rules & Techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these advanced concepts to excel in competitive Atya Patya
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
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

      {/* Officials and Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-2xl text-gray-800">Match Officials</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Referee</h4>
                      <p className="text-sm text-gray-600">Main official who controls the match</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Umpires (2)</h4>
                      <p className="text-sm text-gray-600">Assist referee and watch for violations</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Scorer</h4>
                      <p className="text-sm text-gray-600">Maintains official score record</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Timekeeper</h4>
                      <p className="text-sm text-gray-600">Manages match timing and breaks</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-gray-800">Equipment & Attire</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Playing Kit</h4>
                      <p className="text-sm text-gray-600">Shorts, sleeveless shirt, and sports shoes</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Court Surface</h4>
                      <p className="text-sm text-gray-600">Soft soil or specialized mat</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Boundary Markers</h4>
                      <p className="text-sm text-gray-600">Clear lines marking court boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Scoreboard</h4>
                      <p className="text-sm text-gray-600">Displays current score and time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Play Atya Patya?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Now that you know the rules, join a local team or tournament to experience this amazing traditional sport!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Find Local Teams
              </Button>
            </Link>
            <Link href="/achievements">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                View Tournaments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
