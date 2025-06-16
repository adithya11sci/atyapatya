"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Trophy, Award, Edit, Trash2, Save, Eye, Crown, Medal, Star } from "lucide-react"

export default function EditPage() {
  const [carouselImages, setCarouselImages] = useState([])
  const [galleryImages, setGalleryImages] = useState([])
  const [achievements, setAchievements] = useState([])
  const [tournaments, setTournaments] = useState([])
  const [activeTab, setActiveTab] = useState("carousel")

  // Carousel form state
  const [carouselForm, setCarouselForm] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    src: "",
  })

  // Gallery form state
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    description: "",
    category: "",
    src: "",
  })

  // Achievement form state
  const [achievementForm, setAchievementForm] = useState({
    year: "",
    title: "",
    description: "",
    category: "",
    icon: "",
    color: "",
    bgColor: "",
    image: "",
  })

  // Tournament form state
  const [tournamentForm, setTournamentForm] = useState({
    name: "",
    year: "",
    winner: "",
    runnerUp: "",
    thirdPlace: "",
    participants: "",
    description: "",
    venue: "",
    date: "",
  })

  const [editingId, setEditingId] = useState(null)
  const [editingType, setEditingType] = useState("")

  useEffect(() => {
    loadAllData()
  }, [])

  const loadAllData = () => {
    // Load carousel images
    const defaultCarousel = [
      {
        id: 1,
        src: "/placeholder.svg?height=400&width=800",
        title: "Championship Final Match",
        description: "Intense moment from the 2023 District Championship final",
        category: "Tournament",
        location: "District Sports Complex",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=400&width=800",
        title: "Traditional Atya Patya Court",
        description: "Authentic village court setup showing traditional playing surface",
        category: "Heritage",
        location: "Kodavasal Village",
      },
    ]

    // Load gallery images
    const defaultGallery = [
      {
        id: 1,
        src: "/placeholder.svg?height=300&width=400",
        title: "Victory Moment",
        description: "Team celebrating championship victory",
        category: "Achievement",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=300&width=400",
        title: "Training Session",
        description: "Young players learning techniques",
        category: "Training",
      },
    ]

    const savedCarousel = JSON.parse(localStorage.getItem("carouselImages") || JSON.stringify(defaultCarousel))
    const savedGallery = JSON.parse(localStorage.getItem("galleryImages") || JSON.stringify(defaultGallery))
    const savedAchievements = JSON.parse(localStorage.getItem("achievements") || "[]")
    const savedTournaments = JSON.parse(localStorage.getItem("tournaments") || "[]")

    setCarouselImages(savedCarousel)
    setGalleryImages(savedGallery)
    setAchievements(savedAchievements)
    setTournaments(savedTournaments)
  }

  const iconOptions = [
    { value: "Crown", label: "Crown", icon: Crown, color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { value: "Trophy", label: "Trophy", icon: Trophy, color: "text-orange-500", bgColor: "bg-orange-50" },
    { value: "Medal", label: "Medal", icon: Medal, color: "text-green-500", bgColor: "bg-green-50" },
    { value: "Star", label: "Star", icon: Star, color: "text-blue-500", bgColor: "bg-blue-50" },
    { value: "Award", label: "Award", icon: Award, color: "text-purple-500", bgColor: "bg-purple-50" },
  ]

  const categoryOptions = {
    carousel: ["Tournament", "Heritage", "Training", "Achievement", "Culture", "Officials"],
    gallery: ["Tournament", "Training", "Achievement", "Culture", "Heritage", "Community"],
    achievement: [
      "Team Achievement",
      "Program Recognition",
      "Cultural Impact",
      "Social Impact",
      "Individual Excellence",
      "Community Service",
    ],
  }

  // Carousel functions
  const handleCarouselSubmit = (e) => {
    e.preventDefault()
    let updatedImages

    if (editingId && editingType === "carousel") {
      updatedImages = carouselImages.map((img) => (img.id === editingId ? { ...carouselForm, id: editingId } : img))
    } else {
      const newImage = {
        ...carouselForm,
        id: Date.now(),
        src: carouselForm.src || "/placeholder.svg?height=400&width=800",
      }
      updatedImages = [...carouselImages, newImage]
    }

    setCarouselImages(updatedImages)
    localStorage.setItem("carouselImages", JSON.stringify(updatedImages))
    window.dispatchEvent(new Event("carouselUpdated"))
    resetCarouselForm()
  }

  const editCarouselImage = (image) => {
    setCarouselForm(image)
    setEditingId(image.id)
    setEditingType("carousel")
  }

  const deleteCarouselImage = (id) => {
    if (confirm("Are you sure you want to delete this image?")) {
      const updatedImages = carouselImages.filter((img) => img.id !== id)
      setCarouselImages(updatedImages)
      localStorage.setItem("carouselImages", JSON.stringify(updatedImages))
      window.dispatchEvent(new Event("carouselUpdated"))
    }
  }

  const resetCarouselForm = () => {
    setCarouselForm({ title: "", description: "", category: "", location: "", src: "" })
    setEditingId(null)
    setEditingType("")
  }

  // Gallery functions
  const handleGallerySubmit = (e) => {
    e.preventDefault()
    let updatedImages

    if (editingId && editingType === "gallery") {
      updatedImages = galleryImages.map((img) => (img.id === editingId ? { ...galleryForm, id: editingId } : img))
    } else {
      const newImage = {
        ...galleryForm,
        id: Date.now(),
        src: galleryForm.src || "/placeholder.svg?height=300&width=400",
      }
      updatedImages = [...galleryImages, newImage]
    }

    setGalleryImages(updatedImages)
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages))
    window.dispatchEvent(new Event("galleryUpdated"))
    resetGalleryForm()
  }

  const editGalleryImage = (image) => {
    setGalleryForm(image)
    setEditingId(image.id)
    setEditingType("gallery")
  }

  const deleteGalleryImage = (id) => {
    if (confirm("Are you sure you want to delete this image?")) {
      const updatedImages = galleryImages.filter((img) => img.id !== id)
      setGalleryImages(updatedImages)
      localStorage.setItem("galleryImages", JSON.stringify(updatedImages))
      window.dispatchEvent(new Event("galleryUpdated"))
    }
  }

  const resetGalleryForm = () => {
    setGalleryForm({ title: "", description: "", category: "", src: "" })
    setEditingId(null)
    setEditingType("")
  }

  // Achievement functions
  const handleAchievementSubmit = (e) => {
    e.preventDefault()
    let updatedAchievements

    if (editingId && editingType === "achievement") {
      updatedAchievements = achievements.map((a) => (a.id === editingId ? { ...achievementForm, id: editingId } : a))
    } else {
      const newAchievement = { ...achievementForm, id: Date.now() }
      updatedAchievements = [...achievements, newAchievement]
    }

    setAchievements(updatedAchievements)
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements))
    window.dispatchEvent(new Event("achievementsUpdated"))
    resetAchievementForm()
  }

  const editAchievement = (achievement) => {
    setAchievementForm(achievement)
    setEditingId(achievement.id)
    setEditingType("achievement")
  }

  const deleteAchievement = (id) => {
    if (confirm("Are you sure you want to delete this achievement?")) {
      const updatedAchievements = achievements.filter((a) => a.id !== id)
      setAchievements(updatedAchievements)
      localStorage.setItem("achievements", JSON.stringify(updatedAchievements))
      window.dispatchEvent(new Event("achievementsUpdated"))
    }
  }

  const resetAchievementForm = () => {
    setAchievementForm({
      year: "",
      title: "",
      description: "",
      category: "",
      icon: "",
      color: "",
      bgColor: "",
      image: "",
    })
    setEditingId(null)
    setEditingType("")
  }

  // Tournament functions
  const handleTournamentSubmit = (e) => {
    e.preventDefault()
    let updatedTournaments

    if (editingId && editingType === "tournament") {
      updatedTournaments = tournaments.map((t) =>
        t.id === editingId
          ? { ...tournamentForm, id: editingId, image: "/placeholder.svg?height=200&width=300", createdAt: t.createdAt }
          : t,
      )
    } else {
      const newTournament = {
        ...tournamentForm,
        id: Date.now(),
        image: "/placeholder.svg?height=200&width=300",
        createdAt: Date.now(),
      }
      updatedTournaments = [...tournaments, newTournament]
    }

    setTournaments(updatedTournaments)
    localStorage.setItem("tournaments", JSON.stringify(updatedTournaments))
    window.dispatchEvent(new Event("tournamentsUpdated"))
    resetTournamentForm()
  }

  const editTournament = (tournament) => {
    setTournamentForm(tournament)
    setEditingId(tournament.id)
    setEditingType("tournament")
  }

  const deleteTournament = (id) => {
    if (confirm("Are you sure you want to delete this tournament?")) {
      const updatedTournaments = tournaments.filter((t) => t.id !== id)
      setTournaments(updatedTournaments)
      localStorage.setItem("tournaments", JSON.stringify(updatedTournaments))
      window.dispatchEvent(new Event("tournamentsUpdated"))
    }
  }

  const resetTournamentForm = () => {
    setTournamentForm({
      name: "",
      year: "",
      winner: "",
      runnerUp: "",
      thirdPlace: "",
      participants: "",
      description: "",
      venue: "",
      date: "",
    })
    setEditingId(null)
    setEditingType("")
  }

  const handleIconSelect = (iconValue) => {
    const selectedIcon = iconOptions.find((option) => option.value === iconValue)
    if (selectedIcon) {
      setAchievementForm((prev) => ({
        ...prev,
        icon: iconValue,
        color: selectedIcon.color,
        bgColor: selectedIcon.bgColor,
      }))
    }
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Content Management</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Edit Website Content
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive content management system for carousel images, gallery photos, achievements, and tournaments
            </p>
          </div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <ImageIcon className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{carouselImages.length}</h3>
              <p className="text-gray-600">Carousel Images</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{galleryImages.length}</h3>
              <p className="text-gray-600">Gallery Photos</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Award className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{achievements.length}</h3>
              <p className="text-gray-600">Achievements</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{tournaments.length}</h3>
              <p className="text-gray-600">Tournaments</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Edit Interface */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="carousel" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Home Carousel</span>
                <span className="sm:hidden">Carousel</span>
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">Gallery Photos</span>
                <span className="sm:hidden">Gallery</span>
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="hidden sm:inline">Achievements</span>
                <span className="sm:hidden">Awards</span>
              </TabsTrigger>
              <TabsTrigger value="tournaments" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">Tournaments</span>
                <span className="sm:hidden">Events</span>
              </TabsTrigger>
            </TabsList>

            {/* Carousel Tab */}
            <TabsContent value="carousel">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Page Carousel Management</h2>
                <p className="text-gray-600 mb-6">
                  Manage the rotating image carousel displayed on the home page. These images showcase key moments and
                  highlights of Atya Patya.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <Card>
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5" />
                      {editingId && editingType === "carousel" ? "Edit" : "Add"} Carousel Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleCarouselSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title *</label>
                        <Input
                          value={carouselForm.title}
                          onChange={(e) => setCarouselForm({ ...carouselForm, title: e.target.value })}
                          placeholder="e.g., Championship Final Match"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description *</label>
                        <Textarea
                          value={carouselForm.description}
                          onChange={(e) => setCarouselForm({ ...carouselForm, description: e.target.value })}
                          placeholder="Detailed description of the image"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Category *</label>
                          <Select
                            value={carouselForm.category}
                            onValueChange={(value) => setCarouselForm({ ...carouselForm, category: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categoryOptions.carousel.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                  {cat}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Location *</label>
                          <Input
                            value={carouselForm.location}
                            onChange={(e) => setCarouselForm({ ...carouselForm, location: e.target.value })}
                            placeholder="e.g., District Sports Complex"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Image URL</label>
                        <Input
                          value={carouselForm.src}
                          onChange={(e) => setCarouselForm({ ...carouselForm, src: e.target.value })}
                          placeholder="Leave empty for placeholder image"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                          <Save className="h-4 w-4 mr-2" />
                          {editingId && editingType === "carousel" ? "Update" : "Add"} Image
                        </Button>
                        {editingId && editingType === "carousel" && (
                          <Button type="button" variant="outline" onClick={resetCarouselForm}>
                            Cancel
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Carousel Images List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Carousel Images ({carouselImages.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {carouselImages.map((image) => (
                        <div key={image.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            className="w-16 h-10 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{image.title}</h4>
                            <p className="text-xs text-gray-600">
                              {image.category} • {image.location}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => editCarouselImage(image)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteCarouselImage(image.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery Photos Management</h2>
                <p className="text-gray-600 mb-6">
                  Manage the photo gallery displayed on the gallery page. These images showcase various aspects of Atya
                  Patya including tournaments, training, and cultural events.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <Card>
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      {editingId && editingType === "gallery" ? "Edit" : "Add"} Gallery Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleGallerySubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title *</label>
                        <Input
                          value={galleryForm.title}
                          onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                          placeholder="e.g., Victory Celebration"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description *</label>
                        <Textarea
                          value={galleryForm.description}
                          onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                          placeholder="Detailed description of the photo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Category *</label>
                        <Select
                          value={galleryForm.category}
                          onValueChange={(value) => setGalleryForm({ ...galleryForm, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categoryOptions.gallery.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Image URL</label>
                        <Input
                          value={galleryForm.src}
                          onChange={(e) => setGalleryForm({ ...galleryForm, src: e.target.value })}
                          placeholder="Leave empty for placeholder image"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                          <Save className="h-4 w-4 mr-2" />
                          {editingId && editingType === "gallery" ? "Update" : "Add"} Image
                        </Button>
                        {editingId && editingType === "gallery" && (
                          <Button type="button" variant="outline" onClick={resetGalleryForm}>
                            Cancel
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Gallery Images List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Gallery Images ({galleryImages.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {galleryImages.map((image) => (
                        <div key={image.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{image.title}</h4>
                            <p className="text-xs text-gray-600">{image.category}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => editGalleryImage(image)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteGalleryImage(image.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Achievements Management</h2>
                <p className="text-gray-600 mb-6">
                  Manage major achievements and milestones displayed on the achievements page. These represent landmark
                  accomplishments in Atya Patya excellence.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Preview Section */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Live Preview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {achievementForm.title || achievementForm.year || achievementForm.description ? (
                        <Card className="hover:shadow-lg transition-all duration-300">
                          {achievementForm.image && (
                            <div className="relative h-48 overflow-hidden rounded-t-lg">
                              <img
                                src={achievementForm.image || "/placeholder.svg?height=200&width=400"}
                                alt={achievementForm.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <CardHeader className={`${achievementForm.bgColor || "bg-gray-50"}`}>
                            <div className="flex items-center space-x-4">
                              {achievementForm.icon &&
                                (() => {
                                  const IconComponent =
                                    iconOptions.find((opt) => opt.value === achievementForm.icon)?.icon || Award
                                  return (
                                    <IconComponent
                                      className={`h-12 w-12 ${achievementForm.color || "text-gray-500"}`}
                                    />
                                  )
                                })()}
                              <div>
                                {achievementForm.year && (
                                  <Badge className="mb-2 bg-white text-gray-800">{achievementForm.year}</Badge>
                                )}
                                <CardTitle className="text-xl text-gray-800">
                                  {achievementForm.title || "Achievement Title"}
                                </CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            {achievementForm.description && (
                              <p className="text-gray-700 mb-4 leading-relaxed">{achievementForm.description}</p>
                            )}
                            {achievementForm.category && (
                              <Badge
                                variant="outline"
                                className={`${achievementForm.color || "text-gray-500"} border-current`}
                              >
                                {achievementForm.category}
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      ) : (
                        <div className="text-center py-12 text-gray-500">
                          <Award className="h-16 w-16 mx-auto mb-4 opacity-30" />
                          <p>Fill in the form to see preview</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        {editingId && editingType === "achievement" ? "Edit" : "Add"} Achievement
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <form onSubmit={handleAchievementSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Year *</label>
                            <Input
                              value={achievementForm.year}
                              onChange={(e) => setAchievementForm({ ...achievementForm, year: e.target.value })}
                              placeholder="e.g., 2024"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Icon *</label>
                            <Select value={achievementForm.icon} onValueChange={handleIconSelect}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select icon" />
                              </SelectTrigger>
                              <SelectContent>
                                {iconOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    <div className="flex items-center gap-2">
                                      <option.icon className={`h-4 w-4 ${option.color}`} />
                                      {option.label}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Title *</label>
                          <Input
                            value={achievementForm.title}
                            onChange={(e) => setAchievementForm({ ...achievementForm, title: e.target.value })}
                            placeholder="e.g., State Championship Victory"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Description *</label>
                          <Textarea
                            value={achievementForm.description}
                            onChange={(e) => setAchievementForm({ ...achievementForm, description: e.target.value })}
                            placeholder="Detailed description of the achievement"
                            rows={3}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Category *</label>
                          <Select
                            value={achievementForm.category}
                            onValueChange={(value) => setAchievementForm({ ...achievementForm, category: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categoryOptions.achievement.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                  {cat}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Achievement Image</label>
                          <Input
                            value={achievementForm.image}
                            onChange={(e) => setAchievementForm({ ...achievementForm, image: e.target.value })}
                            placeholder="Optional: Image URL for the achievement"
                          />
                          <p className="text-xs text-gray-500 mt-1">Leave empty if no image is needed</p>
                        </div>
                        <div className="flex gap-2">
                          <Button type="submit" className="flex-1">
                            <Save className="h-4 w-4 mr-2" />
                            {editingId && editingType === "achievement" ? "Update" : "Add"} Achievement
                          </Button>
                          {editingId && editingType === "achievement" && (
                            <Button type="button" variant="outline" onClick={resetAchievementForm}>
                              Cancel
                            </Button>
                          )}
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Achievements List */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements ({achievements.length})</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {achievements.map((achievement) => {
                          const IconComponent = iconOptions.find((opt) => opt.value === achievement.icon)?.icon || Award
                          return (
                            <div key={achievement.id} className="flex items-center gap-4 p-4 border rounded-lg">
                              <div className="flex items-center gap-3">
                                {achievement.image && (
                                  <img
                                    src={achievement.image || "/placeholder.svg"}
                                    alt={achievement.title}
                                    className="w-12 h-12 object-cover rounded"
                                  />
                                )}
                                <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm">{achievement.title}</h4>
                                <p className="text-xs text-gray-600">
                                  {achievement.year} • {achievement.category}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => editAchievement(achievement)}>
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => deleteAchievement(achievement.id)}
                                  className="text-red-600"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Tournaments Tab */}
            <TabsContent value="tournaments">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tournament Records Management</h2>
                <p className="text-gray-600 mb-6">
                  Manage tournament records and results displayed on the achievements page and home page. These showcase
                  competitive highlights and championship outcomes.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <Card>
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      {editingId && editingType === "tournament" ? "Edit" : "Add"} Tournament
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleTournamentSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Tournament Name *</label>
                          <Input
                            value={tournamentForm.name}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, name: e.target.value })}
                            placeholder="e.g., Annual District Championship"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Year *</label>
                          <Input
                            value={tournamentForm.year}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, year: e.target.value })}
                            placeholder="e.g., 2024"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Winner *</label>
                          <Input
                            value={tournamentForm.winner}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, winner: e.target.value })}
                            placeholder="e.g., Team Warriors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Runner-up *</label>
                          <Input
                            value={tournamentForm.runnerUp}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, runnerUp: e.target.value })}
                            placeholder="e.g., Team Fighters"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Third Place *</label>
                          <Input
                            value={tournamentForm.thirdPlace}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, thirdPlace: e.target.value })}
                            placeholder="e.g., Team Champions"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Teams *</label>
                          <Input
                            type="number"
                            value={tournamentForm.participants}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, participants: e.target.value })}
                            placeholder="e.g., 24"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Date *</label>
                          <Input
                            type="date"
                            value={tournamentForm.date}
                            onChange={(e) => setTournamentForm({ ...tournamentForm, date: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Venue *</label>
                        <Input
                          value={tournamentForm.venue}
                          onChange={(e) => setTournamentForm({ ...tournamentForm, venue: e.target.value })}
                          placeholder="e.g., District Sports Complex"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description *</label>
                        <Textarea
                          value={tournamentForm.description}
                          onChange={(e) => setTournamentForm({ ...tournamentForm, description: e.target.value })}
                          placeholder="Detailed description of the tournament"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                          <Save className="h-4 w-4 mr-2" />
                          {editingId && editingType === "tournament" ? "Update" : "Add"} Tournament
                        </Button>
                        {editingId && editingType === "tournament" && (
                          <Button type="button" variant="outline" onClick={resetTournamentForm}>
                            Cancel
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Tournaments List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tournaments ({tournaments.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {tournaments.map((tournament) => (
                        <div key={tournament.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <Trophy className="h-8 w-8 text-orange-500" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{tournament.name}</h4>
                            <p className="text-xs text-gray-600">
                              {tournament.year} • Winner: {tournament.winner}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => editTournament(tournament)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteTournament(tournament.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
