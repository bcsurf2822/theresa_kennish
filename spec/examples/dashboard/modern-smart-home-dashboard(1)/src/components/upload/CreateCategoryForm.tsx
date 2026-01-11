"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ImageData {
  id: string
  file: File
  preview: string
  title: string
  description: string
}

export function CreateCategoryForm() {
  const [categoryName, setCategoryName] = useState("")
  const [images, setImages] = useState<ImageData[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))
    addImages(files)
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      addImages(files)
    }
  }

  const addImages = (files: File[]) => {
    const newImages: ImageData[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      title: "",
      description: "",
    }))
    setImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (id: string) => {
    setImages((prev) => {
      const image = prev.find((img) => img.id === id)
      if (image) URL.revokeObjectURL(image.preview)
      return prev.filter((img) => img.id !== id)
    })
  }

  const updateImage = (id: string, field: "title" | "description", value: string) => {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, [field]: value } : img)))
  }

  const handleSubmit = () => {
    console.log("Creating category:", { categoryName, images })
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="category-name" className="text-muted-foreground">
          Category Name
        </Label>
        <Input
          id="category-name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name..."
          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDragging ? "border-primary bg-primary/10" : "border-border hover:border-muted-foreground"
        }`}
      >
        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-foreground mb-2">Drag and drop images here</p>
        <p className="text-muted-foreground text-sm mb-4">or</p>
        <label>
          <input type="file" multiple accept="image/*" onChange={handleFileSelect} className="hidden" />
          <Button
            type="button"
            variant="outline"
            className="bg-secondary border-border text-foreground hover:bg-muted"
            asChild
          >
            <span className="cursor-pointer">
              <Plus size={16} className="mr-2" />
              Browse Files
            </span>
          </Button>
        </label>
      </div>

      {images.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Uploaded Images ({images.length})</h3>
          <div className="grid gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-secondary border border-border rounded-lg p-4 flex flex-col sm:flex-row gap-4"
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={image.preview || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full sm:w-24 h-24 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(image.id)}
                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/80 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
                <div className="flex-1 space-y-3">
                  <Input
                    value={image.title}
                    onChange={(e) => updateImage(image.id, "title", e.target.value)}
                    placeholder="Image title..."
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground text-sm"
                  />
                  <Textarea
                    value={image.description}
                    onChange={(e) => updateImage(image.id, "description", e.target.value)}
                    placeholder="Image description..."
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground text-sm resize-none"
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={handleSubmit}
        disabled={!categoryName || images.length === 0}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Category
      </Button>
    </div>
  )
}
