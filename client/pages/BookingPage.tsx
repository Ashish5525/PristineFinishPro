import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Car, Clock, MapPin, Phone, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: "basic-wash", name: "Basic Wash & Vacuum", price: 50, duration: "1 hour" },
    { id: "exterior-detail", name: "Exterior Detail", price: 150, duration: "2-3 hours" },
    { id: "interior-detail", name: "Interior Detail", price: 120, duration: "2-3 hours" },
    { id: "full-detail", name: "Full Detail Package", price: 250, duration: "4-5 hours" },
    { id: "paint-protection", name: "Paint Protection", price: 800, duration: "Full day" },
    { id: "ceramic-coating", name: "Ceramic Coating", price: 1200, duration: "2 days" }
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing PristineFinishPros. We'll contact you shortly to confirm your appointment details.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Book Another Service
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const selectedServiceDetails = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Detailing Service
            </h1>
            <p className="text-xl text-gray-600">
              Schedule your appointment and restore your car's pristine finish
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Service Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <Label htmlFor="service" className="text-base font-medium">Select Service</Label>
                      <Select value={selectedService} onValueChange={setSelectedService} required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Choose your detailing service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              <div className="flex justify-between items-center w-full">
                                <span>{service.name}</span>
                                <span className="ml-4 font-semibold">${service.price}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <Label className="text-base font-medium">Select Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full mt-2 justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                            weekStartsOn={0}
                            formatters={{
                              formatWeekdayName: (date) => format(date, "E"),
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <Label className="text-base font-medium">Select Time</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className="text-sm"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Customer Information */}
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Contact Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" className="mt-1" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" className="mt-1" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" className="mt-1" required />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-1" required />
                      </div>

                      <div>
                        <Label htmlFor="address">Service Address</Label>
                        <Input id="address" placeholder="Where should we service your vehicle?" className="mt-1" required />
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-semibold">Vehicle Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="year">Year</Label>
                          <Input id="year" placeholder="2020" className="mt-1" required />
                        </div>
                        <div>
                          <Label htmlFor="make">Make</Label>
                          <Input id="make" placeholder="Toyota" className="mt-1" required />
                        </div>
                        <div>
                          <Label htmlFor="model">Model</Label>
                          <Input id="model" placeholder="Camry" className="mt-1" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="color">Vehicle Color</Label>
                        <Input id="color" placeholder="Silver" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="notes">Special Notes or Requests</Label>
                        <Textarea 
                          id="notes" 
                          placeholder="Any specific concerns or requests for your vehicle?"
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6"
                      disabled={!selectedService || !selectedDate || !selectedTime}
                    >
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedServiceDetails && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">{selectedServiceDetails.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">Price</span>
                        <span className="font-semibold">${selectedServiceDetails.price}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-600">Duration</span>
                        <span className="text-sm">{selectedServiceDetails.duration}</span>
                      </div>
                    </div>
                  )}

                  {selectedDate && (
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-gray-400" />
                      <span>{format(selectedDate, "EEEE, MMMM d, yyyy")}</span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{selectedTime}</span>
                    </div>
                  )}

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>(123) 456-7890</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>info@pristinefinishpros.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>123 Main Street, Your City, ST</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      100% Satisfaction Guaranteed
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
