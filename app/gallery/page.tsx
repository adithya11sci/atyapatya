"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Grid, List, Eye, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    loadGalleryImages()
  }, [])

  useEffect(() => {
    filterImages()
  }, [galleryImages, searchTerm, selectedCategory])

  const loadGalleryImages = () => {
    const defaultGallery = [
      {
        id: 1,
        src: "/placeholder.svg?height=300&width=400",
        title: "Championship Victory Celebration",
        description: "Team celebrating after winning the district championship with joy and pride",
        category: "Achievement",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=300&width=400",
        title: "Youth Training Session",
        description: "Young players learning fundamental techniques under expert guidance",
        category: "Training",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=300&width=400",
        title: "Traditional Court Setup",
        description: "Authentic village court showing traditional playing surface and markings",
        category: "Heritage",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=300&width=400",
        title: "Inter-Village Tournament",
        description: "Intense match between rival villages during annual tournament",
        category: "Tournament",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=300&width=400",
        title: "Cultural Festival Performance",
        description: "Atya Patya demonstration during cultural celebrations",
        category: "Culture",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=300&width=400",
        title: "Community Gathering",
        description: "Local community coming together to support their teams",
        category: "Community",
      },
      {
        id: 7,
        src: "/placeholder.svg?height=300&width=400",
        title: "Player in Action",
        description: "Skilled raider demonstrating perfect technique during match",
        category: "Tournament",
      },
      {
        id: 8,
        src: "/placeholder.svg?height=300&width=400",
        title: "Coaching Workshop",
        description: "Coaches learning new training methods and strategies",
        category: "Training",
      },
      {
        id: 9,
        src: "/placeholder.svg?height=300&width=400",
        title: "Award Ceremony",
        description: "Winners receiving trophies and recognition for their achievements",
        category: "Achievement",
      },
    ]

    const savedGallery = JSON.parse(localStorage.getItem("galleryImages") || JSON.stringify(defaultGallery))
    setGalleryImages(savedGallery)
  }

  // Listen for gallery updates
  useEffect(() => {
    const handleGalleryUpdate = () => {
      const savedGallery = localStorage.getItem("galleryImages")
      if (savedGallery) {
        const parsedGallery = JSON.parse(savedGallery)
        setGalleryImages(parsedGallery)
      }
    }

    window.addEventListener("galleryUpdated", handleGalleryUpdate)

    return () => {
      window.removeEventListener("galleryUpdated", handleGalleryUpdate)
    }
  }, [])

  const filterImages = () => {
    let filtered = galleryImages

    if (searchTerm) {
      filtered = filtered.filter(
        (image) =>
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((image) => image.category === selectedCategory)
    }

    setFilteredImages(filtered)
  }

  const categories = ["all", "Tournament", "Training", "Achievement", "Culture", "Heritage", "Community"]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Tournament: "bg-orange-500",
      Training: "bg-blue-500",
      Achievement: "bg-green-500",
      Culture: "bg-purple-500",
      Heritage: "bg-red-500",
      Community: "bg-yellow-500",
    }
    return colors[category] || "bg-gray-500"
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Visual Journey</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore the vibrant world of Atya Patya through captivating images of tournaments, training, and cultural
              celebrations
            </p>
          </div>

          {/* Quick Edit Access */}
          <div className="text-center">
            <Link href="/edit">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-2 rounded-full"
              >
                <Settings className="h-4 w-4 mr-2" />
                Manage Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40 border-orange-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredImages.length} of {galleryImages.length} images
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <Eye className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredImages.map((image, index) => (
                <Card
                  key={image.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getCategoryColor(image.category)} text-white`}>{image.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredImages.map((image, index) => (
                <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        width={400}
                        height={300}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getCategoryColor(image.category)} text-white`}>{image.category}</Badge>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{image.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Capture Your Atya Patya Moments</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
      </section>
    </div>
  )
}
