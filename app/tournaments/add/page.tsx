"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Trophy, Edit, Trash2, List, X } from "lucide-react"
import Link from "next/link"

export default function AddTournamentPage() {
  const router = useRouter()
  const [tournaments, setTournaments] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [showList, setShowList] = useState(false)
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    loadTournaments()
  }, [])

  const loadTournaments = () => {
    const defaultTournaments = [
      {
        id: 1,
        name: "Annual District Championship",
        year: "2023",
        winner: "Thiruthuraipoondi Warriors",
        runnerUp: "Mannargudi Fighters",
        thirdPlace: "Kodavasal Champions",
        participants: "24",
        description: "The biggest tournament of the year featuring teams from across Tiruvalur district",
        venue: "District Sports Complex",
        date: "2023-12-15",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        name: "Inter-Village Tournament",
        year: "2023",
        winner: "Kodavasal Champions",
        runnerUp: "Needamangalam Eagles",
        thirdPlace: "Vedaranyam Juniors",
        participants: "16",
        description: "Traditional village-level competition promoting grassroots participation",
        venue: "Community Ground, Kodavasal",
        date: "2023-10-20",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        name: "Youth League Championship",
        year: "2023",
        winner: "Tiruvalur Young Tigers",
        runnerUp: "Vedaranyam Juniors",
        thirdPlace: "Mannargudi Youth",
        participants: "20",
        description: "Dedicated tournament for young players under 18 years",
        venue: "Youth Training Center",
        date: "2023-08-10",
        image: "/placeholder.svg?height=200&width=300",
      },
    ]

    const savedTournaments = JSON.parse(localStorage.getItem("tournaments") || JSON.stringify(defaultTournaments))
    setTournaments(savedTournaments)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEdit = (tournament: any) => {
    setFormData(tournament)
    setEditingId(tournament.id)
    setShowList(false)
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this tournament?")) {
      const updatedTournaments = tournaments.filter((t: any) => t.id !== id)
      setTournaments(updatedTournaments)
      localStorage.setItem("tournaments", JSON.stringify(updatedTournaments))
      window.dispatchEvent(new Event("tournamentsUpdated"))
    }
  }

  const resetForm = () => {
    setFormData({
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
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let updatedTournaments

    if (editingId) {
      // Edit existing tournament
      updatedTournaments = tournaments.map((t: any) =>
        t.id === editingId ? { ...formData, id: editingId, image: "/placeholder.svg?height=200&width=300" } : t,
      )
    } else {
      // Add new tournament
      const newTournament = {
        ...formData,
        id: Date.now(),
        image: "/placeholder.svg?height=200&width=300",
      }
      updatedTournaments = [...tournaments, newTournament]
    }

    setTournaments(updatedTournaments)
    localStorage.setItem("tournaments", JSON.stringify(updatedTournaments))
    window.dispatchEvent(new Event("tournamentsUpdated"))

    resetForm()
    router.push("/achievements")
  }

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
              {editingId ? "Edit Tournament" : "Add Tournament"}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {editingId
                ? "Update the tournament details below"
                : "Record a new tournament in Atya Patya's competitive history"}
            </p>
          </div>
        </div>
      </section>

      {/* Tournament List Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Manage Tournaments</h2>
            <Button
              onClick={() => setShowList(!showList)}
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <List className="h-4 w-4 mr-2" />
              {showList ? "Hide List" : "Show All Tournaments"}
            </Button>
          </div>

          {showList && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament: any) => (
                <Card
                  key={tournament.id}
                  className={`hover:shadow-lg transition-all duration-300 ${
                    editingId === tournament.id ? "ring-2 ring-orange-500 bg-orange-50" : ""
                  }`}
                >
                  <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Trophy className="h-8 w-8 text-orange-500" />
                        <div>
                          <Badge className="mb-1 bg-white text-gray-800 text-xs">{tournament.year}</Badge>
                          <CardTitle className="text-lg text-gray-800 line-clamp-1">{tournament.name}</CardTitle>
                        </div>
                      </div>
                      {editingId === tournament.id && (
                        <Badge className="bg-orange-500 text-white text-xs">Editing</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Winner:</span>
                        <span className="font-semibold text-orange-600">{tournament.winner}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Runner-up:</span>
                        <span className="font-medium text-gray-700">{tournament.runnerUp}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Third Place:</span>
                        <span className="font-medium text-gray-700">{tournament.thirdPlace}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Teams:</span>
                        <span className="font-medium text-gray-700">{tournament.participants}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tournament.description}</p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(tournament)}
                        className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50"
                        disabled={editingId === tournament.id}
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(tournament.id)}
                        className="flex-1 border-red-500 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                    {editingId ? "Edit Tournament" : "Tournament Details"}
                    {editingId && (
                      <Button variant="ghost" size="sm" onClick={resetForm} className="text-white hover:bg-white/20">
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tournament Name *</label>
                        <Input
                          type="text"
                          placeholder="e.g., Annual District Championship"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
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
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Winner *</label>
                        <Input
                          type="text"
                          placeholder="e.g., Team Warriors"
                          value={formData.winner}
                          onChange={(e) => handleInputChange("winner", e.target.value)}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Runner-up *</label>
                        <Input
                          type="text"
                          placeholder="e.g., Team Fighters"
                          value={formData.runnerUp}
                          onChange={(e) => handleInputChange("runnerUp", e.target.value)}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Third Place *</label>
                        <Input
                          type="text"
                          placeholder="e.g., Team Champions"
                          value={formData.thirdPlace}
                          onChange={(e) => handleInputChange("thirdPlace", e.target.value)}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Teams *</label>
                        <Input
                          type="number"
                          placeholder="e.g., 24"
                          value={formData.participants}
                          onChange={(e) => handleInputChange("participants", e.target.value)}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Venue *</label>
                      <Input
                        type="text"
                        placeholder="e.g., District Sports Complex"
                        value={formData.venue}
                        onChange={(e) => handleInputChange("venue", e.target.value)}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                      <Textarea
                        placeholder="Describe the tournament details..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={4}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <Save className="h-5 w-5 mr-2" />
                        {editingId ? "Update Tournament" : "Save Tournament"}
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
                    {formData.name ? (
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <div className="relative">
                          <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                            <Trophy className="h-16 w-16 text-orange-500" />
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-orange-500 text-white">{formData.year}</Badge>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-black/70 text-white">{formData.participants} Teams</Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4 text-gray-800">{formData.name}</h3>

                          <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Winner:</span>
                              <span className="font-semibold text-orange-600">{formData.winner || "TBD"}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Runner-up:</span>
                              <span className="font-medium text-gray-700">{formData.runnerUp || "TBD"}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Third Place:</span>
                              <span className="font-medium text-gray-700">{formData.thirdPlace || "TBD"}</span>
                            </div>
                          </div>

                          {formData.description && <p className="text-gray-600 text-sm mb-4">{formData.description}</p>}

                          {formData.venue && (
                            <div className="text-sm text-gray-600">
                              <strong>Venue:</strong> {formData.venue}
                            </div>
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
                      {editingId ? "Editing Tips" : "Tips for Tournament Records"}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Use descriptive tournament names
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Include complete team names for winners
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Provide detailed venue information
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                        Add context about tournament significance
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Tournament Count */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-3 text-blue-500" />
                    <h3 className="font-semibold text-gray-800 mb-2">Total Tournaments</h3>
                    <p className="text-3xl font-bold text-blue-600">{tournaments.length}</p>
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
