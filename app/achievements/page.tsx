import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Star, Calendar, Users, Target, Award, Crown } from "lucide-react"
import Image from "next/image"

export default function AchievementsPage() {
  const majorAchievements = [
    {
      year: "2023",
      title: "State Championship Victory",
      description: "Tiruvalur district team won the Tamil Nadu State Atya Patya Championship",
      category: "Team Achievement",
      icon: Crown,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      year: "2022",
      title: "Youth Development Excellence",
      description: "Recognized for outstanding youth training programs by Tamil Nadu Sports Authority",
      category: "Program Recognition",
      icon: Star,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      year: "2021",
      title: "Cultural Heritage Award",
      description: "Honored for preserving and promoting traditional sports culture",
      category: "Cultural Impact",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      year: "2020",
      title: "Community Engagement Medal",
      description: "Outstanding contribution to rural sports development during pandemic",
      category: "Social Impact",
      icon: Medal,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ]

  const tournaments = [
    {
      name: "Annual District Championship",
      year: "2023",
      winner: "Thiruthuraipoondi Warriors",
      runnerUp: "Mannargudi Fighters",
      participants: 24,
      prize: "₹50,000",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Inter-Village Tournament",
      year: "2023",
      winner: "Kodavasal Champions",
      runnerUp: "Needamangalam Eagles",
      participants: 16,
      prize: "₹25,000",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Youth League Championship",
      year: "2023",
      winner: "Tiruvalur Young Tigers",
      runnerUp: "Vedaranyam Juniors",
      participants: 20,
      prize: "₹15,000",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const notablePlayers = [
    {
      name: "Karthik Selvam",
      title: "District Captain",
      achievements: ["State Champion 2023", "Best Raider Award", "3x District Champion"],
      village: "Thiruthuraipoondi",
      experience: "8 years",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Priya Lakshmi",
      title: "Women's Team Captain",
      achievements: ["State Runner-up 2023", "Best All-rounder", "Youth Mentor"],
      village: "Mannargudi",
      experience: "6 years",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Murugan Raja",
      title: "Veteran Player",
      achievements: ["Lifetime Achievement", "5x District Champion", "Coach of the Year"],
      village: "Kodavasal",
      experience: "15 years",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Divya Bharathi",
      title: "Rising Star",
      achievements: ["Youth Champion 2023", "Best Newcomer", "Future Prospect"],
      village: "Vedaranyam",
      experience: "2 years",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const statistics = [
    { label: "Total Championships", value: "25", icon: Trophy },
    { label: "Active Players", value: "500+", icon: Users },
    { label: "Villages Participating", value: "12", icon: Target },
    { label: "Years of Excellence", value: "15", icon: Calendar },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Hall of Fame</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Achievements
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Celebrating excellence, milestones, and the remarkable journey of Atya Patya in Tiruvalur district
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-2 hover:border-orange-200"
              >
                <CardContent className="p-0">
                  <stat.icon className="h-16 w-16 mx-auto mb-4 text-orange-500" />
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Major Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Landmark accomplishments that define our journey in Atya Patya excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {majorAchievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <CardHeader
                  className={`${achievement.bgColor} group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <achievement.icon className={`h-12 w-12 ${achievement.color}`} />
                      <div>
                        <Badge className="mb-2 bg-white text-gray-800">{achievement.year}</Badge>
                        <CardTitle className="text-xl text-gray-800">{achievement.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{achievement.description}</p>
                  <Badge variant="outline" className={`${achievement.color} border-current`}>
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Recent Tournament Results</h2>
            <p className="text-xl text-gray-600">Latest championship outcomes and competitive highlights</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{tournament.name}</h3>

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
                      <span className="text-sm text-gray-600">Prize Money:</span>
                      <span className="font-semibold text-green-600">{tournament.prize}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Players */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Notable Players</h2>
            <p className="text-xl text-gray-600">Champions and rising stars who represent the spirit of Atya Patya</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {notablePlayers.map((player, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 group"
              >
                <CardHeader className="pb-4">
                  <div className="relative mx-auto">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      width={150}
                      height={150}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full">
                      <Trophy className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-gray-800">{player.name}</CardTitle>
                  <p className="text-orange-600 font-medium">{player.title}</p>
                  <Badge variant="outline" className="text-xs">
                    {player.village}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4">{player.experience} experience</p>
                  <div className="space-y-2">
                    {player.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Be Part of Our Success Story</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join the legacy of champions and contribute to the rich tradition of Atya Patya in Tiruvalur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full"
            >
              Register for Tournament
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full"
            >
              View Tournament Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
