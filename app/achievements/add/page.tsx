"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Trophy, Medal, Star, Award, Crown, Edit, Trash2, List, X } from "lucide-react"
import Link from "next/link"

export default function AddAchievementPage() {
  const router = useRouter()
  const [achievements, setAchievements] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [showList, setShowList] = useState(false)
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    description: "",
    category: "",
    icon: "",
    color: "",
    bgColor: "",
  })

  const iconOptions = [
    { value: "Crown", label: "Crown", icon: Crown, color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { value: "Trophy", label: "Trophy", icon: Trophy, color: "text-orange-500", bgColor: "bg-orange-50" },
    { value: "Medal", label: "Medal", icon: Medal, color: "text-green-500", bgColor: "bg-green-50" },
    { value: "Star", label: "Star", icon: Star, color: "text-blue-500", bgColor: "bg-blue-50" },
    { value: "Award", label: "Award", icon: Award, color: "text-purple-500", bgColor: "bg-purple-50" },
  ]

  const categoryOptions = [
    "Team Achievement",
    "Program Recognition",
    "Cultural Impact",
    "Social Impact",
    "Individual Excellence",
    "Community Service",
  ]

  useEffect(() => {
    loadAchievements()
  }, [])

  const loadAchievements = () => {
    const defaultAchievements = [
      {
        id: 1,
        year: "2023",
        title: "State Championship Victory",
        description: "Tiruvalur district team won the Tamil Nadu State Atya Patya Championship",
        category: "Team Achievement",
        icon: "Crown",
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
      },
      {
        id: 2,
        year: "2022",
        title: "Youth Development Excellence",
        description: "Recognized for outstanding youth training programs by Tamil Nadu Sports Authority",
        category: "Program Recognition",
        icon: "Star",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
      },
      {
        id: 3,
        year: "2021",
        title: "Cultural Heritage Award",
        description: "Honored for preserving and promoting traditional sports culture",
        category: "Cultural Impact",
        icon: "Award",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
      },
      {
        id: 4,
        year: "2020",
        title: "Community Engagement Medal",
        description: "Outstanding contribution to rural sports development during pandemic",
        category: "Social Impact",
        icon: "Medal",
        color: "text-green-500",
        bgColor: "bg-green-50",
      },
    ]

    const savedAchievements = JSON.parse(localStorage.getItem("achievements") || JSON.stringify(defaultAchievements))
    setAchievements(savedAchievements)
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Crown,
      Star,
      Award,
      Medal,
      Trophy,
    }
    return icons[iconName] || Trophy
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleIconSelect = (iconValue: string) => {
    const selectedIcon = iconOptions.find((option) => option.value === iconValue)
    if (selectedIcon) {
      setFormData((prev) => ({
        ...prev,
        icon: iconValue,
        color: selectedIcon.color,
        bgColor: selectedIcon.bgColor,
      }))
    }
  }

  const handleEdit = (achievement: any) => {
    setFormData(achievement)
    setEditingId(achievement.id)
    setShowList(false)
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this achievement?")) {
      const updatedAchievements = achievements.filter((a: any) => a.id !== id)
      setAchievements(updatedAchievements)
      localStorage.setItem("achievements", JSON.stringify(updatedAchievements))
      window.dispatchEvent(new Event("achievementsUpdated"))
    }
  }

  const resetForm = () => {
    setFormData({
      year: "",
      title: "",
      description: "",
      category: "",
      icon: "",
      color: "",
      bgColor: "",
    })
    setEditingId(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let updatedAchievements

    if (editingId) {
      // Edit existing achievement
      updatedAchievements = achievements.map((a: any) => (a.id === editingId ? { ...formData, id: editingId } : a))
    } else {
      // Add new achievement
      const newAchievement = {
        ...formData,
        id: Date.now(),
      }
      updatedAchievements = [...achievements, newAchievement]
    }

    setAchievements(updatedAchievements)
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements))
    window.dispatchEvent(new Event("achievementsUpdated"))

    resetForm()
    router.push("/achievements")
  }

  const selectedIcon = iconOptions.find((option) => option.value === formData.icon)

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-12 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/achievements">
              <Button variant="ghost" className="mr-4 hover:bg-orange-100">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Achievements
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800">{editingId ? "Edit" : "Add New"}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {editingId ? "Edit Achievement" : "Add Achievement"}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {editingId
                ? "Update the achievement details below"
                : "Record a new milestone in Atya Patya's journey of excellence"}
            </p>
          </div>
        </div>
      </section>

      {/* Achievement List Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Manage Achievements</h2>
            <Button
              onClick={() => setShowList(!showList)}
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <List className="h-4 w-4 mr-2" />
              {showList ? "Hide List" : "Show All Achievements"}
            </Button>
          </div>

          {showList && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement: any) => {
                const IconComponent = getIcon(achievement.icon)
                return (
                  <Card
                    key={achievement.id}
                    className={`hover:shadow-lg transition-all duration-300 ${
                      editingId === achievement.id ? "ring-2 ring-orange-500 bg-orange-50" : ""
                    }`}
                  >
                    <CardHeader className={`${achievement.bgColor} pb-3`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                          <div>
                            <Badge className="mb-1 bg-white text-gray-800 text-xs">{achievement.year}</Badge>
                            <CardTitle className="text-lg text-gray-800 line-clamp-1">{achievement.title}</CardTitle>
                          </div>
                        </div>
                        {editingId === achievement.id && (
                          <Badge className="bg-orange-500 text-white text-xs">Editing</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{achievement.description}</p>
                      <Badge variant="outline" className={`${achievement.color} border-current text-xs mb-4`}>
                        {achievement.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(achievement)}
                          className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50"
                          disabled={editingId === achievement.id}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(achievement.id)}
                          className="flex-1 border-red-500 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {editingId ? "Edit Achievement" : "Achievement Details"}
                    {editingId && (
                      <Button variant="ghost" size="sm" onClick={resetForm} className="text-white hover:bg-white/20">
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                      <Input
                        type="text"
                        placeholder="e.g., 2024"
                        value={formData.year}
                        onChange={(e) => handleInputChange("year", e.target.value)}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                      <Input
                        type="text"
                        placeholder="e.g., State Championship Victory"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                      <Textarea
                        placeholder="Describe the achievement in detail..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={4}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <Select
                        onValueChange={(value) => handleInputChange("category", value)}
                        value={formData.category}
                        required
                      >
                        <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categoryOptions.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Icon *</label>
                      <Select onValueChange={handleIconSelect} value={formData.icon} required>
                        <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                          <SelectValue placeholder="Select an icon" />
                        </SelectTrigger>
                        <SelectContent>
                          {iconOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center space-x-2">
                                <option.icon className={`h-4 w-4 ${option.color}`} />
                                <span>{option.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <Save className="h-5 w-5 mr-2" />
                        {editingId ? "Update Achievement" : "Save Achievement"}
                      </Button>

                      {editingId && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={resetForm}
                          className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          Cancel Edit
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Preview */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {formData.title ? (
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader className={`${formData.bgColor || "bg-gray-50"}`}>
                          <div className="flex items-center space-x-4">
                            {selectedIcon && <selectedIcon.icon className={`h-12 w-12 ${formData.color}`} />}
                            <div>
                              {formData.year && <Badge className="mb-2 bg-white text-gray-800">{formData.year}</Badge>}
                              <CardTitle className="text-xl text-gray-800">{formData.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          {formData.description && (
                            <p className="text-gray-700 mb-4 leading-relaxed">{formData.description}</p>
                          )}
                          {formData.category && (
                            <Badge variant="outline" className={`${formData.color} border-current`}>
                              {formData.category}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Trophy className="h-16 w-16 mx-auto mb-4 opacity-30" />
                        <p>Fill in the form to see preview</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      {editingId ? "Editing Tips" : "Tips for Great Achievements"}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Use clear, descriptive titles that capture the essence
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Provide context and impact in the description
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Choose icons that represent the achievement type
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Select appropriate categories for better organization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Achievement Count */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-3 text-blue-500" />
                    <h3 className="font-semibold text-gray-800 mb-2">Total Achievements</h3>
                    <p className="text-3xl font-bold text-blue-600">{achievements.length}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
