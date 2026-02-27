import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const courses = [
  {
    title: "Class 8th – 10th (SSC Board)",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    features: ["Complete syllabus coverage", "Board exam preparation", "Regular unit tests", "Doubt-clearing sessions"],
    batch: "Morning & Evening Batches",
    duration: "Full Academic Year",
  },
  {
    title: "Class 8th – 10th (CBSE Board)",
    subjects: ["Mathematics", "Science", "English"],
    features: ["NCERT-focused preparation", "CBSE pattern practice", "Monthly assessments", "Parent-teacher meetings"],
    batch: "Morning & Evening Batches",
    duration: "Full Academic Year",
  },
  {
    title: "Class 11th – 12th Science",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    features: ["Concept-based teaching", "Board + competitive prep", "Weekly test series", "Study material provided"],
    batch: "Flexible Batches",
    duration: "Full Academic Year",
  },
  {
    title: "JEE / NEET Foundation (Class 8–10)",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology (NEET)"],
    features: ["Early competitive exposure", "Olympiad preparation", "Analytical thinking focus", "NTSE / Scholarship prep"],
    batch: "Weekend & After-school",
    duration: "Year-round Program",
  },
  {
    title: "MHT-CET Preparation",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: ["Maharashtra CET focused", "Previous year paper practice", "Mock tests", "Shortcut techniques"],
    batch: "Intensive Batches",
    duration: "6 Months / 1 Year",
  },
  {
    title: "Crash Course (Board Exams)",
    subjects: ["All Subjects", "Revision", "Paper Practice"],
    features: ["Fast-paced revision", "Important questions focus", "Exam strategy sessions", "Last-minute tips"],
    batch: "Before Board Exams",
    duration: "2–3 Months",
  },
];

const Courses = () => {
  return (
    <main>
      <section className="pt-28 pb-16 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Courses & Programs
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Comprehensive coaching programs designed for academic excellence and competitive exam success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col overflow-hidden">
                  <div className="bg-gradient-navy p-6">
                    <h3 className="font-heading text-lg font-semibold text-primary-foreground">{course.title}</h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-secondary" /> Subjects
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {course.subjects.map((s, j) => (
                          <span key={j} className="px-2.5 py-1 bg-muted rounded-md text-xs text-muted-foreground">{s}</span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {course.features.map((f, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border pt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> {course.duration}</div>
                      <div className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> {course.batch}</div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
                    >
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
