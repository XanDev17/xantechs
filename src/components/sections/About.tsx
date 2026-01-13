import { Target, Users, Zap, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to democratizing retail technology for businesses of all sizes."
    },
    {
      icon: Users,
      title: "Customer-First",
      description: "Every feature we build starts with understanding our customers' real needs."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality and reliability are at the core of everything we do."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">About XANTECHS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Transforming Retail with Smart Technology
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a vision to revolutionize how retailers operate, XANTECHS has grown 
                to become a trusted partner for businesses worldwide. Our comprehensive suite of 
                SaaS solutions covers everything from point-of-sale operations to advanced 
                inventory management and cloud-based analytics.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over a decade of experience in retail technology, we understand the unique 
                challenges businesses face. That's why we've designed our solutions to be 
                intuitive, scalable, and powerful – helping you focus on what matters most: 
                growing your business.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
