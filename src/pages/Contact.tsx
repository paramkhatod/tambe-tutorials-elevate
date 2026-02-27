import { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello, I'm ${form.name}. I'm interested in ${form.course || "your courses"}. ${form.message}`.trim();
    window.open(`https://wa.me/918149500068?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main>
      <section className="pt-28 pb-16 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Have questions? We'd love to hear from you. Reach out and let us help your child succeed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">Your enquiry has been sent via WhatsApp. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Course Interested In</label>
                      <select
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                      >
                        <option value="">Select a course</option>
                        <option>Class 8th – 10th (SSC)</option>
                        <option>Class 8th – 10th (CBSE)</option>
                        <option>Class 11th – 12th Science</option>
                        <option>JEE / NEET Foundation</option>
                        <option>MHT-CET Preparation</option>
                        <option>Crash Course</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                        placeholder="Any specific questions?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold shadow-gold hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Branch 1 – Nashik Road</h3>
                  <div className="space-y-3">
                    <p className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      C' Ishwar Sankul, Gaikwad Mala Rd, near Bytco Point, Nashik Road, Nashik 422101
                    </p>
                    <p className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-secondary shrink-0" />
                      <a href="tel:08149500068" className="hover:text-secondary transition-colors">081495 00068</a>
                    </p>
                    <p className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-secondary shrink-0" />
                      Mon – Sat: 7:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Branch 2 – Gangapur Road</h3>
                  <div className="space-y-3">
                    <p className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      "Mandlik Pride", First Floor, Above SBI Bank, Near Hotel Curry Leaves, Jehan Circle, Gangapur Road
                    </p>
                    <p className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-secondary shrink-0" />
                      <a href="tel:09226560206" className="hover:text-secondary transition-colors">092265 60206</a> / <a href="tel:08149500029" className="hover:text-secondary transition-colors">081495 00029</a>
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.78!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tambe Tutorials Location on Google Maps"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
