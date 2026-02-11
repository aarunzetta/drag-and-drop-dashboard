import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-8">
          <Sparkles size={16} />
          <span>Launch Your Custom Dashboard in Minutes</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Create Stunning Dashboards
          <span className="block text-red-600 mt-2">Without Writing Code</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          The most powerful drag-and-drop dashboard builder. Visualize your
          data, track metrics, and make better decisions with beautiful,
          customizable dashboards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gap-2">
            Start Building Free
            <ArrowRight size={20} />
          </Button>
          <Button variant="secondary" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-linear-to-br from-red-400 to-blue-500 border-2 border-white"
                />
              ))}
            </div>
            <span>10,000+ users</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
