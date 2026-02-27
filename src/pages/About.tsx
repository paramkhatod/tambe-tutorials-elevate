import { Target, Eye, Award, Users, BookOpen, CheckCircle } from "lucide-react";
import facultyImg from "@/assets/faculty.jpg";
import studentsImg from "@/assets/students-success.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const achievements = [
  "Established in 1993 – 30+ years of academic excellence",
  "10,000+ students successfully guided",
  "Consistent 95%+ board exam results",
  "Two well-equipped branches in Nashik",
  "Recognized by parents across Nashik district",
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Shaping Futures Since 1993
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Tambe Tutorials has been the cornerstone of academic excellence in Nashik for over three decades, transforming students into achievers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <img src={facultyImg} alt="Faculty at Tambe Tutorials Nashik" className="rounded-2xl shadow-card-hover w-full" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-6">A Legacy of Trust & Excellence</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 1993, Tambe Tutorials began with a simple mission: to provide quality education that empowers every student. What started as a small coaching center near Bytco Point, Nashik Road, has grown into one of Nashik's most respected tutorial institutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Today, with two branches – Nashik Road and Gangapur Road ("Mandlik Pride", above SBI Bank, near Hotel Curry Leaves, Jehan Circle) – we continue to serve thousands of students preparing for board exams and competitive entrance tests.
                </p>
                <ul className="space-y-2">
                  {achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-xl p-8 shadow-card h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted educational partner for every family in Nashik, nurturing confident, knowledgeable, and successful students who excel in academics and life.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-card rounded-xl p-8 shadow-card h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver personalized, result-oriented education through experienced faculty, regular assessments, and a supportive learning environment that brings out the best in every student.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-12">Our Facilities</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: "Modern Classrooms", desc: "Well-ventilated, spacious classrooms with whiteboards" },
              { icon: Users, title: "Small Batch Sizes", desc: "Limited students per batch for individual attention" },
              { icon: Award, title: "Regular Testing", desc: "Weekly tests and comprehensive performance reports" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
