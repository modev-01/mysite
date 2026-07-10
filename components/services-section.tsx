import { services } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="// الخدمات"
          title="خبرات أقدّمها"
          subtitle="مجموعة متكاملة من الخدمات المتخصصة في تطوير الواجهات الأمامية لبناء منتجات رقمية استثنائية."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group glass relative overflow-hidden rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-l from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
