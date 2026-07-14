"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const FULL_NAME = "محمد قماري";
const ROLE = "Junior Front-End Developer";

export function HeroSection() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(ROLE.slice(0, i));
      if (i >= ROLE.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      // 1. تمت إضافة overflow-x-hidden و w-full لمنع أي تمدد أفقي خارج الشاشة
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-x-hidden px-4 py-24 lg:pb-0 lg:pt-24"
    >
      {/* 2. تمت إضافة min-w-0 هنا لتقييد الـ Grid ومنعه من التمدد خارج حدود الهاتف */}
      <div className="grid w-full min-w-0 max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Text block */}
        {/* 3. إضافة min-w-0 للقسم النصي */}
        <div className="animate-fade-up min-w-0 w-full text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <Sparkles className="size-3.5" />
            متاح لمشاريع جديدة
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {FULL_NAME}
            <span className="mt-2 block text-glow text-primary">
              مطور واجهات أمامية محترف
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0">
            أصمّم وأبني تجارب رقمية سريعة، أنيقة، وسهلة الوصول باستخدام React و
            TypeScript. أحوّل الأفكار المعقّدة إلى واجهات بسيطة تسعد المستخدمين.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              استعرض أعمالي
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              لنعمل معًا
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://github.com/mohamed200039"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D9%82%D9%85%D8%A7%D8%B1%D9%8A-14097a375/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>

        {/* Terminal / code editor mock */}
        {/* 4. إضافة min-w-0 هنا لتجبر عنصر محاكي الأكواد أن يلتزم بعرض الشاشة بدلاً من التمدد */}
        <div
          className="animate-fade-up animate-float min-w-0 w-full"
          style={{ animationDelay: "0.15s" }}
          dir="ltr"
        >
          <div className="glass w-full overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border bg-background/40 px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-3/70" />
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                developer.tsx
              </span>
            </div>
            {/* 5. تأكيد w-full و max-w-full لكي يعمل التمرير الداخلي (Scroll) فقط للأكواد بدون كسر الموقع */}
            <pre className="max-w-full w-full overflow-x-auto p-4 sm:p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-chart-2">const</span>{" "}
                <span className="text-primary">developer</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>
                {"\n"}
                {"  "}name<span className="text-muted-foreground">:</span>{" "}
                <span className="text-primary">&apos;{typed}</span>
                <span className="animate-blink text-primary">▋</span>
                <span className="text-primary">&apos;</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}stack<span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">[</span>
                <span className="text-chart-3">&apos;React&apos;</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-chart-3">&apos;TypeScript&apos;</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-chart-3">&apos;Next.js&apos;</span>
                <span className="text-muted-foreground">],</span>
                {"\n"}
                {"  "}focus<span className="text-muted-foreground">:</span>{" "}
                <span className="text-chart-3">&apos;UI/UX&apos;</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}available<span className="text-muted-foreground">:</span>{" "}
                <span className="text-chart-2">true</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                <span className="text-muted-foreground">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border p-1.5">
          <span className="size-1.5 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
