"use client"

import { useState } from "react"
import { BarChart3, MousePointerClick, Users, Clock, TrendingUp, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const metricsData = {
  totalClicks: 12847,
  pageViews: 45230,
  uniqueVisitors: 8934,
  avgSessionDuration: "3m 42s",
  bounceRate: 42.3,
  topPages: [
    { name: "Homepage", views: 15420, clicks: 4230 },
    { name: "Living Room", views: 8340, clicks: 2180 },
    { name: "Kitchen", views: 6720, clicks: 1890 },
    { name: "Bedroom", views: 5430, clicks: 1420 },
    { name: "Backyard", views: 4120, clicks: 980 },
  ],
  dailyData: [
    { day: "Mon", views: 6420, clicks: 1820 },
    { day: "Tue", views: 7130, clicks: 2040 },
    { day: "Wed", views: 6890, clicks: 1950 },
    { day: "Thu", views: 7450, clicks: 2180 },
    { day: "Fri", views: 8120, clicks: 2390 },
    { day: "Sat", views: 5430, clicks: 1520 },
    { day: "Sun", views: 4790, clicks: 1290 },
  ],
}

export function DiagnosticsSection() {
  const [timeRange, setTimeRange] = useState<"daily" | "weekly" | "monthly">("weekly")

  const maxViews = Math.max(...metricsData.dailyData.map((d) => d.views))

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Site Diagnostics
        </h2>
        <Tabs value={timeRange} onValueChange={(v) => setTimeRange(v as typeof timeRange)}>
          <TabsList className="bg-secondary border border-border">
            <TabsTrigger
              value="daily"
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Daily
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Monthly
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <MetricCard
          icon={MousePointerClick}
          label="Total Clicks"
          value={metricsData.totalClicks.toLocaleString()}
          trend="+12%"
        />
        <MetricCard icon={Eye} label="Page Views" value={metricsData.pageViews.toLocaleString()} trend="+8%" />
        <MetricCard
          icon={Users}
          label="Unique Visitors"
          value={metricsData.uniqueVisitors.toLocaleString()}
          trend="+15%"
        />
        <MetricCard icon={Clock} label="Avg. Session" value={metricsData.avgSessionDuration} trend="+5%" />
        <MetricCard
          icon={TrendingUp}
          label="Bounce Rate"
          value={`${metricsData.bounceRate}%`}
          trend="-3%"
          trendPositive={true}
        />
        <MetricCard icon={BarChart3} label="Engagement" value="78%" trend="+10%" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-foreground">Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {metricsData.dailyData.map((day) => (
                <div key={day.day} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-10">{day.day}</span>
                  <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${(day.views / maxViews) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-foreground w-16 text-right">{day.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-foreground">Popular Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {metricsData.topPages.map((page, index) => (
                <div key={page.name} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-medium w-6">{index + 1}</span>
                    <span className="text-foreground text-sm">{page.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      <Eye className="inline h-3 w-3 mr-1" />
                      {page.views.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      <MousePointerClick className="inline h-3 w-3 mr-1" />
                      {page.clicks.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  trendPositive,
}: {
  icon: typeof BarChart3
  label: string
  value: string
  trend: string
  trendPositive?: boolean
}) {
  const isPositive = trendPositive ?? trend.startsWith("+")

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xl font-bold text-foreground">{value}</span>
          <span className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>{trend}</span>
        </div>
      </CardContent>
    </Card>
  )
}
