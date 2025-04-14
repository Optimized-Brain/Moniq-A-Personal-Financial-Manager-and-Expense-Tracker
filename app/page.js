import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/hero";
import Link from "next/link";

// Inline data for the landing page sections
const statsData = [
  { value: "10K+", label: "Active Users" },
  { value: "500+", label: "Transactions Daily" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "4.8/5", label: "Customer Rating" },
];

const featuresData = [
  {
    icon: "💡", // Representing the icon with an emoji
    title: "Real-Time Insights",
    description: "Receive immediate alerts and insights based on your spending habits.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description: "Analyze your financial data with detailed graphs and custom reports.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Your financial information is protected with industry-standard security.",
  },
];

const howItWorksData = [
  {
    icon: "1️⃣",
    title: "Connect Your Accounts",
    description: "Securely link all your financial accounts in one place.",
  },
  {
    icon: "2️⃣",
    title: "Automated Tracking",
    description: "Monitor and categorize transactions automatically.",
  },
  {
    icon: "3️⃣",
    title: "Personalized Recommendations",
    description: "Get tailored advice to save money and invest smarter.",
  },
];

const testimonialsData = [
  {
    name: "Jane Doe",
    role: "Software Engineer",
    quote: "Welth has transformed my financial habits with real-time insights and intuitive design!",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    quote: "Simple, secure, and effective—this platform takes the stress out of managing money.",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    quote: "With tailored recommendations and analytics, I now feel in control of my spending.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section with extra SVG graphic element */}
      <section className="relative pt-40 pb-20 px-4 bg-green-50">
        <HeroSection />
        {/* Inline SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#2f855a"
              fillOpacity="1"
              d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,138.7C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-green-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with extra decorative elements */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6 border border-green-200 shadow-md">
                <CardContent className="space-y-4 pt-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-green-700">
                    {feature.title}
                  </h3>
                  <p className="text-green-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Decorative SVG element */}
          <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-20">
            <svg
              width="150"
              height="150"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#68d391"
                d="M43.5,-53.2C55.2,-45.4,63.1,-31.8,64.7,-17.8C66.3,-3.9,61.7,11.5,55.1,24.4C48.6,37.2,39.2,47.6,27.4,52.4C15.6,57.3,1.4,56.7,-11.2,57.4C-23.8,58,-34,59,-43.2,54.2C-52.3,49.3,-60.3,38.5,-64.5,25.6C-68.8,12.7,-69.3,-2.4,-65.8,-16.5C-62.3,-30.7,-54.8,-43.9,-43.3,-52.7C-31.8,-61.5,-15.9,-65,-0.5,-64.8C14.9,-64.6,29.8,-60.9,43.5,-53.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-green-100 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-green-700">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-800">{step.title}</h3>
                <p className="text-green-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section without images */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-800">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 border border-green-200 shadow">
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <div className="font-semibold text-green-700">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-green-600">
                      {testimonial.role}
                    </div>
                  </div>
                  <p className="text-green-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-green-200 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are embracing smarter finance management with Welth.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-100 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
        {/* Decorative corner SVG */}
        <div className="absolute bottom-0 right-0 opacity-30">
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#68d391"
              d="M47.7,-72.4C61.4,-61,70,-43.5,73.6,-24.2C77.2,-4.9,75.8,16.3,68.1,33.4C60.3,50.5,46.2,63.5,29.5,70.3C12.8,77,-7.3,77.5,-27.6,72.7C-48,67.8,-68.4,57.5,-79.3,40.2C-90.2,22.8,-91.6,-1.7,-84,-22.8C-76.4,-43.9,-60.7,-61.5,-41.8,-73.3C-22.9,-85.1,-11.4,-91.1,4.5,-96.1C20.5,-101.1,41,-105.6,47.7,-72.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
