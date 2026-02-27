import { Star, TrendingUp, Award } from "lucide-react";
import studentsImg from "@/assets/students-success.jpg";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

const toppers = [
  { name: "Snehal Kulkarni", score: "98.4%", exam: "SSC Board 2024", rank: "District Rank 3" },
  { name: "Rohan Tambe", score: "96.8%", exam: "SSC Board 2024", rank: "School Topper" },
  { name: "Priya Wagh", score: "95.2%", exam: "SSC Board 2023", rank: "Distinction" },
  { name: "Amit Patil", score: "97.1%", exam: "HSC Science 2024", rank: "College Topper" },
  { name: "Sakshi Joshi", score: "94.6%", exam: "HSC Science 2023", rank: "Distinction" },
  { name: "Varun Deshmukh", score: "MHT-CET: 99.2 %ile", exam: "MHT-CET 2024", rank: "Top 1%" },
];

const Results = () => {
  return (
    <main>
      <section className="pt-28 pb-16 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Results</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Proven Track Record of Excellence
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Our students consistently achieve outstanding results in board exams and competitive entrance tests.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={95} suffix="%" label="Pass Rate (Board)" />
            <AnimatedCounter end={500} suffix="+" label="Distinctions (2024)" />
            <AnimatedCounter end={50} suffix="+" label="MHT-CET Selections" />
            <AnimatedCounter end={30} suffix="+" label="Years of Results" />
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Achievers</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2">Star Performers</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {toppers.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center border border-border">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{t.name}</h3>
                  <p className="text-2xl font-bold text-gradient-gold mt-1">{t.score}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.exam}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {t.rank}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Image */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <img src={studentsImg} alt="Successful students celebrating their results" className="rounded-2xl shadow-card-hover w-full" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Every Result Tells a Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Behind every percentage and rank is a student's journey of hard work, guided by our dedicated faculty. At Tambe Tutorials, we don't just teach subjects – we build confidence and create achievers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our structured test series, regular parent-teacher interactions, and personalized attention ensure that every student receives the support they need to excel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground">What Students & Parents Say</h2>
            </div>
          </ScrollReveal>
          <TestimonialSlider />
        </div>
      </section>
    </main>
  );
};

export default Results;
