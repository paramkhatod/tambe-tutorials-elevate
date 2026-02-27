import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, BookOpen, ArrowRight, CheckCircle, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import studentsImg from "@/assets/students-success.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  { icon: GraduationCap, title: "30+ Years Legacy", desc: "Trusted since 1993 in Nashik" },
  { icon: Users, title: "10,000+ Students", desc: "Shaped futures across batches" },
  { icon: Award, title: "95%+ Results", desc: "Consistent board exam excellence" },
  { icon: BookOpen, title: "Expert Faculty", desc: "Experienced & dedicated teachers" },
];

const courses = [
  { name: "Class 8th – 10th (SSC)", desc: "Complete board preparation with focus on fundamentals" },
  { name: "Class 11th – 12th Science", desc: "Physics, Chemistry, Maths & Biology" },
  { name: "JEE / NEET Foundation", desc: "Build strong competitive exam foundation early" },
  { name: "MHT-CET Coaching", desc: "Targeted preparation for Maharashtra CET" },
];

const usps = [
  "Personal attention with limited batch sizes",
  "Regular tests and performance tracking",
  "Dedicated doubt-clearing sessions",
  "Experienced faculty with 30+ years track record",
  "Two branches – Nashik Road & Gangapur Road",
  "Proven results year after year",
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Premium classroom environment at Tambe Tutorials"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/20">
              Nashik's Most Trusted Coaching Since 1993
            </span>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto">
              Where Every Student's{" "}
              <span className="text-gradient-gold">Success Story</span> Begins
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-body">
              Join 10,000+ successful students who trusted Tambe Tutorials for their academic journey. Expert guidance for Class 8th to 12th & competitive exams.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-gold text-secondary-foreground font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-20 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={30} suffix="+" label="Years of Excellence" />
            <AnimatedCounter end={10000} suffix="+" label="Students Trained" />
            <AnimatedCounter end={95} suffix="%" label="Board Results" />
            <AnimatedCounter end={2} label="Branches in Nashik" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  The Tambe Tutorials Advantage
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  For over three decades, we've been the cornerstone of academic excellence in Nashik. Our proven methodology, experienced faculty, and personalized approach ensure every student reaches their full potential.
                </p>
                <ul className="space-y-3">
                  {usps.map((usp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img
                src={studentsImg}
                alt="Successful students of Tambe Tutorials Nashik"
                className="rounded-2xl shadow-card-hover w-full"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Courses We Offer
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{course.desc}</p>
                  <Link
                    to="/courses"
                    className="text-secondary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Student & Parent Voices</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                What They Say About Us
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(i => <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />)}
                  <Star className="w-5 h-5 text-secondary fill-secondary/50" />
                </div>
                <span className="text-muted-foreground text-sm">4.3/5 on Google</span>
              </div>
            </div>
          </ScrollReveal>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-secondary" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-secondary/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Your Child's Success Starts Here
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8 text-lg">
              Limited seats available. Secure your child's future with Nashik's most trusted coaching institute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08149500068"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-gold text-secondary-foreground font-semibold shadow-gold hover:opacity-90 transition-opacity"
              >
                Call: 081495 00068
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Send Enquiry
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
