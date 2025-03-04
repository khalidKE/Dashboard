import Link from "next/link"
import { BookOpen, Users, BookMarked, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentBorrows } from "@/components/recent-borrows"
import { TopBooks } from "@/components/top-books"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <div className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl">Library Dashboard</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Overview
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Books
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Members
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Borrowing
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Reports
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                <BookMarked className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,845</div>
                <p className="text-xs text-muted-foreground">+24 added this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+18 new members this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Books Borrowed</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">432</div>
                <p className="text-xs text-muted-foreground">+87 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Overdue Returns</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">-3 from last week</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Monthly Activity</CardTitle>
                <CardDescription>Book borrowing and returns over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Books</CardTitle>
                <CardDescription>Most borrowed books this month</CardDescription>
              </CardHeader>
              <CardContent>
                <TopBooks />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Borrowing Activity</CardTitle>
              <CardDescription>Latest books borrowed and returned by members</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentBorrows />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

