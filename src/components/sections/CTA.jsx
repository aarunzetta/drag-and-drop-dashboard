import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-24 bg-linear-to-r from-red-600 to-yellow-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Data?
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          Join thousands of teams already building better dashboards. Start your
          free trial today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 hover:scale-105 transform transition"
          >
            Get Started Free
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-white border-2 border-white/30 hover:bg-white/10"
          >
            Talk to Sales
          </Button>
        </div>

        <p className="mt-8 text-red-100 text-sm">
          Free 14-day trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
