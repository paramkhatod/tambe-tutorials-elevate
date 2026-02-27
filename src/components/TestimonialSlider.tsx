import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sneha Patil",
    text: "Tambe Tutorials transformed my daughter's approach to studies. She scored 95% in her SSC exams. The personal attention from teachers is remarkable.",
    role: "Parent",
    rating: 5,
  },
  {
    name: "Rahul Deshmukh",
    text: "The best coaching in Nashik. Nice teaching methodology and regular tests helped me crack MHT-CET with a top score. Highly recommended!",
    role: "Student – MHT-CET",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "My son struggled with Maths and Science. After joining Tambe Tutorials, his confidence and marks improved drastically. Thank you!",
    role: "Parent",
    rating: 4,
  },
  {
    name: "Amit Joshi",
    text: "30+ years of experience shows in their teaching quality. The doubt-clearing sessions and test series are extremely helpful for board preparation.",
    role: "Student – Class 10th",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center relative">
        <Quote className="w-10 h-10 text-secondary/30 mx-auto mb-6" />
        <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8 font-body">
          "{t.text}"
        </p>
        <div className="flex items-center justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < t.rating ? "text-secondary fill-secondary" : "text-muted"}`}
            />
          ))}
        </div>
        <h4 className="font-heading font-semibold text-lg text-foreground">{t.name}</h4>
        <p className="text-sm text-muted-foreground">{t.role}</p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-secondary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
