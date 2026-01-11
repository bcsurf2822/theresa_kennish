"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  username: string
}

export function Header({ username }: HeaderProps) {
  const handleLogout = () => {
    console.log("Logging out...")
  }

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src="/images/photo-1494790108377-be9c29b29330.jpeg" alt="User Profile" />
          <AvatarFallback className="bg-secondary text-foreground">{username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome, {username}</h1>
          <p className="text-muted-foreground text-sm">Manage your content and view analytics</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          onClick={handleLogout}
          variant="outline"
          className="bg-secondary border-border text-foreground hover:bg-muted gap-2"
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </header>
  )
}
