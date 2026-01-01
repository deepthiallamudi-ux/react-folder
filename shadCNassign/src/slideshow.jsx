import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Slideshow() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      title: "Mountain Landscape",
      description: "Beautiful mountain scenery at sunrise"
    },
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
      title: "Beach Paradise",
      description: "Tropical beach with crystal clear water"
    },
    {
      url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=500&fit=crop",
      title: "City Lights",
      description: "Urban cityscape at night"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Image Carousel</CardTitle>
          <CardDescription>
            Browse through our beautiful collection of images
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="overflow-hidden rounded-lg bg-gray-100 aspect-video w-full mb-4">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
                        <p className="text-muted-foreground text-center">{image.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </div>
  )
}