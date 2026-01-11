import { Grid3X3, Lightbulb, Music2, Coffee, Sun, Thermometer, Shield, Bell, Settings } from "lucide-react"

const navItems = [
  { icon: Grid3X3, label: "Dashboard", isActive: true },
  { icon: Lightbulb, label: "Lighting" },
  { icon: Music2, label: "Media" },
  { icon: Coffee, label: "Kitchen" },
  { icon: Sun, label: "Environment" },
  { icon: Thermometer, label: "Temperature" },
  { icon: Shield, label: "Security" },
]

const bottomItems = [
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
]

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-card border-r border-border flex flex-col items-center py-8 overflow-y-auto scrollbar-hide">
      <div className="text-xl font-light text-foreground tracking-tight mb-4 flex-shrink-0">sync</div>

      <div className="flex flex-col items-center space-y-6 flex-1 min-h-0 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col items-center space-y-6">
          {navItems.map(({ icon: Icon, label, isActive }) => (
            <button
              key={label}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors flex-shrink-0 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              title={label}
            >
              <Icon size={20} strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 mb-4 flex-shrink-0">
        {bottomItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-12 h-12 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            title={label}
          >
            <Icon size={20} strokeWidth={1.5} />
          </button>
        ))}
      </div>

      <div className="relative w-16 h-16 rounded-full border-2 border-primary flex-shrink-0 overflow-hidden bg-secondary">
        <img
          src="/images/photo-1494790108377-be9c29b29330.jpeg"
          alt="User Profile"
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            e.currentTarget.style.display = "none"
            e.currentTarget.parentElement!.innerHTML =
              '<div class="w-full h-full bg-secondary rounded-full flex items-center justify-center text-foreground text-sm font-medium">A</div>'
          }}
        />
      </div>
    </nav>
  )
}
