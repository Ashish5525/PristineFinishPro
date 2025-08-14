import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Shield, 
  Clock, 
  Award, 
  Car, 
  Sparkles, 
  PhoneCall,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const services = [
    {
      title: "Exterior Detailing",
      description: "Complete wash, clay, polish, and wax to restore your car's shine",
      price: "From $150",
      features: ["Paint wash & dry", "Clay bar treatment", "Polish & wax", "Tire & wheel cleaning"]
    },
    {
      title: "Interior Detailing", 
      description: "Deep cleaning and protection for your vehicle's interior",
      price: "From $120",
      features: ["Vacuum & steam clean", "Leather conditioning", "Dashboard protection", "Stain removal"]
    },
    {
      title: "Paint Protection",
      description: "Advanced ceramic coating and paint protection film",
      price: "From $800",
      features: ["Ceramic coating", "Paint correction", "UV protection", "Hydrophobic finish"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely amazing work! My car looks better than when I first bought it. The attention to detail is incredible.",
      service: "Full Detail Package"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional service and fair pricing. They treated my car like it was their own. Highly recommend!",
      service: "Ceramic Coating"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Outstanding results every time. The team is knowledgeable and the facility is top-notch.",
      service: "Interior Detail"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground">
              Premium Car Detailing Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Restore Your Car's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"> Pristine Finish</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional automotive detailing that brings back that showroom shine. Expert care for your vehicle's exterior and interior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/book">
                  Book Your Detail
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="tel:+1234567890">
                  <PhoneCall className="mr-2 w-5 h-5" />
                  Call (123) 456-7890
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span>5.0 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From basic wash to premium protection, we offer comprehensive detailing services for every need and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Car className="w-8 h-8 text-primary" />
                    <Badge variant="secondary" className="text-primary font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose PristineFinishPros?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just another car wash. We're passionate professionals who treat every vehicle with the care it deserves.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Products</h3>
                    <p className="text-gray-600">We use only the highest quality detailing products and equipment for superior results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Efficient</h3>
                    <p className="text-gray-600">Professional service that respects your schedule with convenient booking options.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-gray-600">100% satisfaction guarantee - if you're not happy, we'll make it right.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Car className="w-24 h-24 mb-6 opacity-20" />
                  <h3 className="text-2xl font-bold mb-4">Over 500+ Happy Customers</h3>
                  <p className="text-lg opacity-90">Join our growing family of satisfied car owners who trust us with their vehicles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Restore Your Car's Shine?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference professional detailing makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/book">
                Schedule Your Detail
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="tel:+1234567890">
                <PhoneCall className="mr-2 w-5 h-5" />
                Call (123) 456-7890
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
