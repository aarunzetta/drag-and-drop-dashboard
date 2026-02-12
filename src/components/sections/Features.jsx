import {
  LayoutDashboard,
  Palette,
  Zap,
  Lock,
  Cloud,
  LineChart,
} from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    icon: LayoutDashboard,
    title: "Drag & Drop Builder",
    description:
      "Intuitive interface to arrange widgets, charts, and data visualizations exactly how you want them.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Match your brand with custom themes, colors, fonts, and layouts. Make it truly yours.",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description:
      "See your data refresh instantly. Connect to any API or data source for live insights.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, SSO, and compliance with SOC 2, GDPR, and HIPAA standards.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "Access your dashboards anywhere. Automatic backups and 99.9% uptime guarantee.",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description:
      "Built-in charts, tables, and visualization tools. Export reports in seconds.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Better Dashboards
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that help teams visualize data and make informed
            decisions faster
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
