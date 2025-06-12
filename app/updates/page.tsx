import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Users, Megaphone, ArrowRight, Bell } from "lucide-react"
import Image from "next/image"

export default function UpdatesPage() {
  const latestNews = [
    {
      id: 1,
      title: "Annual Championship 2024 Registration Opens",
      excerpt:
        "The biggest Atya Patya tournament of the year is now accepting team registrations. Don't miss this opportunity to compete at the highest level.",
      content:
        "The much-awaited Annual Championship 2024 registration is now live! Teams from across Tiruvalur district can register until March 1st, 2024. This year's championship promises to be the most competitive yet, with enhanced prize money and new tournament format.",
      date: "2024-02-15",
      time: "10:00 AM",
      category: "Tournament",
      priority: "high",
      image: "/placeholder.svg?height=300&width=500",
      author: "Tournament Committee",
      tags: ["Championship", "Registration", "2024"],
    },
    {
      id: 2,
      title: "New Youth Training Center Inaugurated",
      excerpt:
        "State-of-the-art training facility opens in Mannargudi to nurture young talent and promote traditional sports among youth.",
      content:
        "A new youth training center has been inaugurated in Mannargudi with modern facilities and expert coaching staff. The center will provide free training to young athletes and help preserve the traditional art of Atya Patya.",
      date: "2024-02-10",
      time: "3:00 PM",
      category: "Infrastructure",
      priority: "medium",
      image: "/placeholder.svg?height=300&width=500",
      author: "District Sports Officer",
      tags: ["Youth", "Training", "Infrastructure"],
    },
    {
      id: 3,
      title: "International Recognition for Tiruvalur Team",
      excerpt:
        "Our district team receives special recognition at the National Traditional Games Festival for outstanding performance and sportsmanship.",
      content:
        "The Tiruvalur Atya Patya team has been honored with the 'Best Team Spirit' award at the National Traditional Games Festival held in New Delhi. This recognition highlights our commitment to fair play and excellence.",
      date: "2024-02-05",
      time: "6:00 PM",
      category: "Achievement",
      priority: "high",
      image: "/placeholder.svg?height=300&width=500",
      author: "Team Management",
      tags: ["Recognition", "National", "Achievement"],
    },
  ]

  const upcomingEvents = [
    {
      title: "Inter-Village Championship",
      date: "2024-03-15",
      time: "9:00 AM",
      venue: "District Sports Complex",
      description: "Annual competition between villages of Tiruvalur district",
      participants: "16 teams",
      registrationDeadline: "2024-03-01",
    },
    {
      title: "Youth Development Workshop",
      date: "2024-03-22",
      time: "2:00 PM",
      venue: "Community Hall, Thiruthuraipoondi",
      description: "Training session for young players and coaches",
      participants: "50 participants",
      registrationDeadline: "2024-03-15",
    },
    {
      title: "Cultural Festival Exhibition",
      date: "2024-04-05",
      time: "10:00 AM",
      venue: "Tiruvalur Town Hall",
      description: "Atya Patya demonstration during cultural celebrations",
      participants: "Open to all",
      registrationDeadline: "2024-03-25",
    },
  ]

  const announcements = [
    {
      title: "New Rules Implementation",
      message: "Updated tournament rules will be effective from March 2024. All teams must review the new guidelines.",
      type: "important",
      date: "2024-02-12",
    },
    {
      title: "Equipment Subsidy Program",
      message: "Government announces financial support for purchasing Atya Patya equipment for rural schools.",
      type: "info",
      date: "2024-02-08",
    },
    {
      title: "Coaching Certification Course",
      message: "Applications open for Level 1 coaching certification. Limited seats available.",
      type: "opportunity",
      date: "2024-02-01",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Stay Informed</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Latest Updates
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stay connected with the latest news, events, and announcements from the Atya Patya community in Tiruvalur
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-8 text-center">
              <Bell className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Never Miss an Update</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest news, tournament updates, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email address" className="flex-1" />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Latest News</h2>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-8">
            {latestNews.map((news, index) => (
              <Card
                key={news.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index === 0 ? "border-l-4 border-l-orange-500" : ""}`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={500}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge
                        className={`${
                          news.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : news.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(news.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {news.time}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-orange-600 transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">{news.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {news.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">By {news.author}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these exciting Atya Patya events and competitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <Calendar className="h-8 w-8" />
                    <Badge className="bg-white/20 text-white">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-orange-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-orange-500" />
                      {event.participants}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="bg-orange-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-orange-800">
                      <strong>Registration Deadline:</strong>{" "}
                      {new Date(event.registrationDeadline).toLocaleDateString()}
                    </p>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Important Announcements</h2>
            <p className="text-xl text-gray-600">Official notices and updates from the Atya Patya administration</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement, index) => (
              <Card
                key={index}
                className={`border-l-4 hover:shadow-lg transition-all duration-300 ${
                  announcement.type === "important"
                    ? "border-l-red-500 bg-red-50"
                    : announcement.type === "opportunity"
                      ? "border-l-green-500 bg-green-50"
                      : "border-l-blue-500 bg-blue-50"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Megaphone
                          className={`h-5 w-5 ${
                            announcement.type === "important"
                              ? "text-red-500"
                              : announcement.type === "opportunity"
                                ? "text-green-500"
                                : "text-blue-500"
                          }`}
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{announcement.title}</h3>
                        <Badge
                          className={`${
                            announcement.type === "important"
                              ? "bg-red-100 text-red-800"
                              : announcement.type === "opportunity"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {announcement.type}
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-3">{announcement.message}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="ml-4">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Social Media Updates</h2>
            <p className="text-xl text-gray-600">
              Follow us on social media for real-time updates and community highlights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                platform: "Facebook",
                content: "Amazing performance by our youth team in today's practice session! 🏆",
                time: "2 hours ago",
                likes: 45,
                comments: 12,
              },
              {
                platform: "Instagram",
                content: "Behind the scenes from the championship preparation. The dedication is inspiring! 📸",
                time: "5 hours ago",
                likes: 78,
                comments: 23,
              },
              {
                platform: "Twitter",
                content: "Registration for the annual championship is filling up fast. Don't miss out! #AtyaPatya",
                time: "1 day ago",
                likes: 34,
                comments: 8,
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-orange-100 text-orange-800">{post.platform}</Badge>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              Follow Us on Social Media
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
