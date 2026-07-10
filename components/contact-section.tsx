"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const socialIcons: Record<string, typeof GithubIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6e37739f-d848-46d6-8e5a-3b3ddc9077d7", // 🔴 ضع المفتاح الذي سيصلك للإيميل هنا بدلاً من النقاط الثلاث
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        console.error("حدث خطأ في الإرسال:", result);
        alert("عذراً، حدث خطأ أثناء إرسال الرسالة.");
      }
    } catch (error) {
      console.error("خطأ في الاتصال:", error);
      alert("عذراً، يرجى التحقق من اتصالك بالإنترنت.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="// تواصل"
          title="لنبنِ شيئًا رائعًا"
          subtitle="هل لديك فكرة مشروع أو فرصة عمل؟ راسلني وسأعود إليك في أقرب وقت."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info side */}
          <div className="lg:col-span-2">
            <div className="glass flex h-full flex-col justify-between rounded-2xl border border-border p-8">
              <div>
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary text-glow">
                  <Mail className="size-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  راسلني مباشرة
                </h3>
                <a
                  href="mailto:modev01contact@gmail.com"
                  dir="ltr"
                  className="mt-2 block text-right font-mono text-sm text-primary transition-opacity hover:opacity-80"
                >
                  modev01contact@gmail.com
                </a>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  أرد عادة خلال 24 ساعة. يسعدني الحديث عن المشاريع الجديدة
                  والتعاون والأفكار المبتكرة.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.id] ?? GithubIcon;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form side */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl border border-border p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  الاسم
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="اسمك الكريم"
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  dir="ltr"
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-right text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                الرسالة
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="أخبرني عن مشروعك..."
                className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
            >
              {isSubmitting ? (
                "جاري الإرسال..."
              ) : sent ? (
                <>
                  <CheckCircle2 className="size-4" />
                  تم الإرسال بنجاح
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  إرسال الرسالة
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
