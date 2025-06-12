import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Target, Trophy, Heart, Globe } from "lucide-react"
import Image from "next/image"

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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Game Rules & Gameplay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the strategic depth and excitement of Atya Patya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Team Formation",
                description: "Two teams of 7 players each, with specific roles for raiders and defenders",
                details: ["1 Raider at a time", "6 Defenders", "Strategic positioning"],
              },
              {
                icon: Target,
                title: "Objective",
                description: "Raiders must touch opponents and return to their half while holding breath",
                details: ["Tag opponents", "Return safely", "Continuous chanting"],
              },
              {
                icon: Trophy,
                title: "Scoring",
                description: "Points awarded for successful raids and defensive tackles",
                details: ["1 point per tag", "Bonus for all-out", "Time-based rounds"],
              },
            ].map((rule, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <rule.icon className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-xl text-gray-800">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{rule.description}</p>
                  <ul className="space-y-2">
                    {rule.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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

      {/* Game Variations */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Game Variations in Tiruvalur</h2>
            <p className="text-xl text-gray-600">Different styles and formats played across the district</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Village Style",
                description: "Classic format played during village festivals with traditional rules",
                features: ["Open ground", "No time limits", "Community participation"],
              },
              {
                title: "Tournament Format",
                description: "Standardized rules for competitive play in district championships",
                features: ["Timed matches", "Official referees", "Point-based scoring"],
              },
              {
                title: "Youth League",
                description: "Modified rules for younger players to learn and develop skills",
                features: ["Shorter duration", "Smaller teams", "Educational focus"],
              },
            ].map((variation, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{variation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{variation.description}</p>
                  <Separator className="my-4" />
                  <ul className="space-y-2">
                    {variation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
