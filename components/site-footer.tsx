import { socialLinks } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const icons: Record<string, typeof GithubIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  // 👇 ضع رابط صورة اللوجو الخاص بك هنا بين علامتي التنصيص
  const myLogoUrl = `/modev.png`;

  return (
    <footer className="relative border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm font-bold text-foreground">
          {/* قسم اللوجو المُعدّل */}
          <span className="flex size-8 items-center justify-center overflow-hidden rounded-md bg-primary/15">
            <img
              src={myLogoUrl}
              alt="My Logo"
              className="size-full object-contain"
            />
          </span>

          <span>
            Mo<span className="text-primary">_dev</span>
          </span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {year} محمد قماري. جميع الحقوق محفوظة. صُمّم وطُوّر بشغف.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.id] ?? GithubIcon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
