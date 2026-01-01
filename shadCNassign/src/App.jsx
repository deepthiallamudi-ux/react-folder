import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Slideshow from "./slideshow"
import Todo from "./Todo"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" })
  const [submissions, setSubmissions] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.feedback) {
      setSubmissions([...submissions, { ...formData, id: Date.now() }])
      setFormData({ name: "", email: "", feedback: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">shadcn UI Components</h1>
        
        <Tabs defaultValue="carousel" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="carousel">Image Carousel</TabsTrigger>
            <TabsTrigger value="todo">Todo List</TabsTrigger>
            <TabsTrigger value="feedback">Feedback Form</TabsTrigger>
          </TabsList>
          
          <TabsContent value="carousel">
            <Slideshow />
          </TabsContent>
          
          <TabsContent value="todo">
            <Todo />
          </TabsContent>
          
          <TabsContent value="feedback">
            <div className="max-w-2xl mx-auto space-y-8 mt-8">
              <Card>
            <CardHeader>
              <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
              We'd love to hear your thoughts! Share your feedback below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <textarea
                  id="feedback"
                  placeholder="Share your feedback..."
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>

        {submissions.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Submitted Feedback</CardTitle>
              <CardDescription>
                {submissions.length} feedback{submissions.length > 1 ? 's' : ''} received
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="border-b pb-4 last:border-b-0">
                  <p className="font-semibold text-sm">{submission.name}</p>
                  <p className="text-sm text-muted-foreground">{submission.email}</p>
                  <p className="mt-2 text-sm">{submission.feedback}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}