import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "We write maintainable, scalable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Every project features stunning UI/UX that delights users."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "We ship quality products on time, every time."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work closely with you throughout the entire process."
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
                We Turn Ideas Into Digital Reality
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                XANTECHS is a software development agency specializing in building modern 
                web applications, custom software solutions, stunning websites, and 
                high-converting landing pages.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a passion for clean code and beautiful design, we partner with 
                startups, SMBs, and enterprises to create digital products that solve 
                real problems and drive measurable results.
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
