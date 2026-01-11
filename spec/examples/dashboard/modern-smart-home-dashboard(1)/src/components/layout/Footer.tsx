"use client"

import { useState } from "react"
import { AlertCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const issueTypes = [
  { value: "bug", label: "Bug Report" },
  { value: "feature", label: "Feature Request" },
  { value: "performance", label: "Performance Issue" },
  { value: "security", label: "Security Concern" },
  { value: "other", label: "Other" },
]

const emailRecipients = [
  { value: "support", label: "Support Team" },
  { value: "technical", label: "Technical Team" },
  { value: "admin", label: "Admin Team" },
]

export function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const [issueType, setIssueType] = useState("")
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    console.log("Submitting issue:", { issueType, recipient, subject, description })
    setIsOpen(false)
    setIssueType("")
    setRecipient("")
    setSubject("")
    setDescription("")
  }

  const isFormValid = issueType && recipient && subject && description

  return (
    <footer className="border-t border-border bg-card px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Smart Home Dashboard. All rights reserved.</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-secondary border-border text-foreground hover:bg-muted gap-2">
              <AlertCircle size={16} />
              Report an Issue
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border text-foreground sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-foreground">Report an Issue</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Describe the issue you're experiencing and we'll look into it.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label className="text-muted-foreground">Issue Type</Label>
                <Select value={issueType} onValueChange={setIssueType}>
                  <SelectTrigger className="bg-secondary border-border text-foreground">
                    <SelectValue placeholder="Select issue type..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {issueTypes.map((type) => (
                      <SelectItem
                        key={type.value}
                        value={type.value}
                        className="text-foreground hover:bg-muted focus:bg-muted"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground">Send To</Label>
                <Select value={recipient} onValueChange={setRecipient}>
                  <SelectTrigger className="bg-secondary border-border text-foreground">
                    <SelectValue placeholder="Select recipient..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {emailRecipients.map((r) => (
                      <SelectItem
                        key={r.value}
                        value={r.value}
                        className="text-foreground hover:bg-muted focus:bg-muted"
                      >
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground">Subject</Label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief summary of the issue..."
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground">Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue in detail..."
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
                  rows={4}
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed gap-2"
              >
                <Send size={16} />
                Submit Report
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  )
}
