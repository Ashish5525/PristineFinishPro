import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Sparkles,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Palette,
  Home,
  Droplets,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const services = [
    {
      id: "basic-wash",
      title: "Basic Wash & Vacuum",
      price: "From $50",
      duration: "1 hour",
      description: "Essential cleaning to keep your car fresh and presentable.",
      icon: Droplets,
      features: [
        "Exterior hand wash with premium soap",
        "Wheel and tire cleaning",
        "Interior vacuum (seats, floor, trunk)",
        "Window cleaning (interior & exterior)",
        "Dashboard and console wipe down"
      ],
      popular: false
    },
    {
      id: "exterior-detail",
      title: "Exterior Detail",
      price: "From $150",
      duration: "2-3 hours",
      description: "Complete exterior restoration that brings back your car's original shine.",
      icon: Car,
      features: [
        "Clay bar treatment to remove contaminants",
        "Paint polishing to restore clarity",
        "Premium carnauba wax application",
        "Tire shine and wheel detailing",
        "Chrome and trim restoration",
        "Door jamb cleaning"
      ],
      popular: true
    },
    {
      id: "interior-detail",
      title: "Interior Detail",
      price: "From $120",
      duration: "2-3 hours",
      description: "Deep cleaning and conditioning for your vehicle's interior.",
      icon: Vacuum,
      features: [
        "Steam cleaning of all surfaces",
        "Leather conditioning and protection",
        "Fabric protection treatment",
        "Deep vacuum including crevices",
        "Stain and odor removal",
        "UV protection for dashboard"
      ],
      popular: false
    },
    {
      id: "full-detail",
      title: "Full Detail Package",
      price: "From $250",
      duration: "4-5 hours",
      description: "Complete interior and exterior detailing for the ultimate car care experience.",
      icon: Sparkles,
      features: [
        "Everything from Exterior Detail",
        "Everything from Interior Detail",
        "Engine bay cleaning",
        "Headlight restoration",
        "Paint sealant application",
        "Complete protection package"
      ],
      popular: true
    },
    {
      id: "paint-protection",
      title: "Paint Protection Film",
      price: "From $800",
      duration: "Full day",
      description: "Invisible protection film that shields your paint from chips and scratches.",
      icon: Shield,
      features: [
        "High-quality PPF installation",
        "Self-healing technology",
        "UV protection",
        "Rock chip prevention",
        "Maintains paint warranty",
        "10-year manufacturer warranty"
      ],
      popular: false
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      price: "From $1200",
      duration: "2 days",
      description: "Advanced nano-ceramic protection that provides years of gloss and protection.",
      icon: Palette,
      features: [
        "Multi-step paint correction",
        "Professional ceramic coating application",
        "Hydrophobic water beading",
        "Chemical resistance",
        "Enhanced gloss and depth",
        "5-year coating warranty"
      ],
      popular: false
    }
  ];

  const addons = [
    { name: "Pet Hair Removal", price: "$25" },
    { name: "Headlight Restoration", price: "$75" },
    { name: "Engine Bay Detail", price: "$100" },
    { name: "Odor Elimination", price: "$50" },
    { name: "Carpet Shampoo", price: "$40" },
    { name: "Leather Repair", price: "$150" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Detailing Services
            </h1>
            <p className="text-xl opacity-90 mb-8">
              From basic washes to premium protection, we offer comprehensive car care solutions tailored to your needs and budget.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/book">
                Book Your Service
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className={`relative group hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                      <Link to="/book">
                        Book This Service
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Add-On Services
              </h2>
              <p className="text-xl text-gray-600">
                Enhance your detailing package with these specialized services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-2xl font-bold text-primary">{addon.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600">
                We follow a meticulous process to ensure every detail is perfect
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Inspection", description: "Thorough assessment of your vehicle's condition" },
                { step: "2", title: "Preparation", description: "Careful preparation and protection of surrounding areas" },
                { step: "3", title: "Detailing", description: "Professional application of our services" },
                { step: "4", title: "Quality Check", description: "Final inspection to ensure perfection" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Choose the perfect service for your car and book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/book">
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Call for Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
