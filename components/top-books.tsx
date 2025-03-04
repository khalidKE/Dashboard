import { BookOpen } from "lucide-react"

const topBooks = [
  {
    id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
    borrows: 42,
    available: true,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    borrows: 38,
    available: false,
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    borrows: 35,
    available: true,
  },
  {
    id: "4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    borrows: 32,
    available: true,
  },
  {
    id: "5",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    borrows: 30,
    available: true,
  },
]

export function TopBooks() {
  return (
    <div className="space-y-8">
      {topBooks.map((book) => (
        <div key={book.id} className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{book.title}</p>
            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium">{book.borrows} borrows</p>
            <p className="text-sm text-muted-foreground">{book.available ? "Available" : "Borrowed"}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

