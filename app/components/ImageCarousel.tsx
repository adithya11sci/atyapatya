"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [carouselImages, setCarouselImages] = useState([
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=800",
      title: "Championship Final Match",
      description:
        "Intense moment from the 2023 District Championship final between Thiruthuraipoondi Warriors and Mannargudi Fighters",
      category: "Tournament",
      location: "District Sports Complex",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=800",
      title: "Traditional Atya Patya Court",
      description: "Authentic village court setup showing the traditional playing surface and boundary markings",
      category: "Heritage",
      location: "Kodavasal Village",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=800",
      title: "Youth Training Session",
      description: "Young players learning the fundamentals of Atya Patya under expert coaching guidance",
      category: "Training",
      location: "Youth Training Center",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=800",
      title: "Victory Celebration",
      description: "Team celebration after winning the Inter-Village Tournament, showcasing the joy and camaraderie",
      category: "Achievement",
      location: "Community Ground",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=800",
      title: "Cultural Festival Performance",
      description: "Atya Patya demonstration during the annual cultural festival, preserving traditional sports",
      category: "Culture",
      location: "Tiruvalur Town Hall",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=800",
      title: "Referee in Action",
      description: "Official referee making crucial decisions during a high-stakes tournament match",
      category: "Officials",
      location: "District Sports Complex",
    },
  ])

  // Load carousel images from localStorage
  useEffect(() => {
    const savedCarousel = localStorage.getItem("carouselImages")
    if (savedCarousel) {
      const parsedCarousel = JSON.parse(savedCarousel)
      if (parsedCarousel.length > 0) {
        setCarouselImages(parsedCarousel)
      }
    }
  }, [])

  // Listen for carousel updates
  useEffect(() => {
    const handleCarouselUpdate = () => {
      const savedCarousel = localStorage.getItem("carouselImages")
      if (savedCarousel) {
        const parsedCarousel = JSON.parse(savedCarousel)
        setCarouselImages(parsedCarousel)
      }
    }

    window.addEventListener("carouselUpdated", handleCarouselUpdate)

    return () => {
      window.removeEventListener("carouselUpdated", handleCarouselUpdate)
    }
  }, [])

  // Auto-rotate carousel every second
  useEffect(() => {
    if (!isPlaying || carouselImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 1000) // Change every 1 second

    return () => clearInterval(interval)
  }, [isPlaying, carouselImages.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (carouselImages.length === 0) {
    return (
      <Card className="overflow-hidden shadow-2xl">
        <div className="relative h-96 md:h-[500px] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">No carousel images available</p>
        </div>
      </Card>
    )
  }

  const currentImage = carouselImages[currentIndex]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Tournament: "bg-orange-500",
      Heritage: "bg-red-500",
      Training: "bg-blue-500",
      Achievement: "bg-green-500",
      Culture: "bg-purple-500",
      Officials: "bg-yellow-500",
    }
    return colors[category] || "bg-gray-500"
  }

  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-2xl">
        <div className="relative h-96 md:h-[500px]">
          {/* Main Image */}
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.title}
            fill
            className="object-cover transition-all duration-500"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={`${getCategoryColor(currentImage.category)} text-white`}>{currentImage.category}</Badge>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {currentImage.location}
              </Badge>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{currentImage.title}</h3>
            <p className="text-lg text-gray-200 max-w-3xl">{currentImage.description}</p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {carouselImages.length}
          </div>
        </div>
      </Card>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
        {carouselImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "ring-3 ring-orange-500 scale-110"
                : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
            {index === currentIndex && <div className="absolute inset-0 bg-orange-500/30" />}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
        <div
          className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-1000 ease-linear"
          style={{
            width: `${((currentIndex + 1) / carouselImages.length) * 100}%`,
          }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
        <div className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
        {isPlaying ? "Auto-playing" : "Paused"} • Changes every second
      </div>
    </div>
  )
}
