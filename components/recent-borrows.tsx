import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentBorrows = [
  {
    id: "1",
    member: {
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    book: "The Alchemist",
    status: "borrowed",
    date: "2023-03-01",
    dueDate: "2023-03-15",
  },
  {
    id: "2",
    member: {
      name: "Fatima Ali",
      email: "fatima@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    book: "1984",
    status: "returned",
    date: "2023-02-28",
    dueDate: "2023-03-14",
  },
  {
    id: "3",
    member: {
      name: "Mohammed Khalid",
      email: "mohammed@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    book: "To Kill a Mockingbird",
    status: "borrowed",
    date: "2023-02-27",
    dueDate: "2023-03-13",
  },
  {
    id: "4",
    member: {
      name: "Layla Ibrahim",
      email: "layla@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    book: "The Great Gatsby",
    status: "overdue",
    date: "2023-02-15",
    dueDate: "2023-03-01",
  },
  {
    id: "5",
    member: {
      name: "Omar Farooq",
      email: "omar@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    book: "Pride and Prejudice",
    status: "returned",
    date: "2023-02-25",
    dueDate: "2023-03-11",
  },
]

export function RecentBorrows() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Book</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentBorrows.map((borrow) => (
          <TableRow key={borrow.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={borrow.member.avatar} alt={borrow.member.name} />
                  <AvatarFallback>{borrow.member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{borrow.member.name}</div>
                  <div className="text-xs text-muted-foreground">{borrow.member.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{borrow.book}</TableCell>
            <TableCell>
              <Badge
                variant={
                  borrow.status === "borrowed" ? "default" : borrow.status === "returned" ? "outline" : "destructive"
                }
              >
                {borrow.status}
              </Badge>
            </TableCell>
            <TableCell>{borrow.date}</TableCell>
            <TableCell>{borrow.dueDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

