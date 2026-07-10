import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Code2,
  Gauge,
  Layers,
  PenTool,
  ShieldCheck,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryLabel: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  url: string;
}

export const services: Service[] = [
  {
    id: "react",
    title: "تطوير React",
    description:
      "بناء تطبيقات ويب تفاعلية عالية الأداء باستخدام React و Next.js مع معمارية نظيفة وقابلة للتوسع.",
    icon: Code2,
  },
  {
    id: "typescript",
    title: "استشارات TypeScript",
    description:
      "تحويل الأكواد إلى TypeScript آمن الأنواع، وتحسين جودة الشيفرة وتقليل الأخطاء في مرحلة التطوير.",
    icon: ShieldCheck,
  },
  {
    id: "uiux",
    title: "تصميم واجهات UI/UX",
    description:
      "تصميم واجهات مستخدم أنيقة وسهلة الاستخدام مع اهتمام دقيق بالتفاصيل والتجربة البصرية.",
    icon: PenTool,
  },
  {
    id: "performance",
    title: "تحسين الأداء",
    description:
      "تسريع أوقات التحميل وتحسين مؤشرات الأداء الأساسية للويب لتجربة استخدام سلسة على كل الأجهزة.",
    icon: Gauge,
  },
  {
    id: "design-systems",
    title: "أنظمة التصميم",
    description:
      "إنشاء مكتبات مكوّنات موحّدة وقابلة لإعادة الاستخدام تضمن الاتساق عبر جميع المنتجات الرقمية.",
    icon: Layers,
  },
  {
    id: "architecture",
    title: "هندسة الواجهات",
    description:
      "تصميم بنية أمامية متينة وإدارة للحالة تدعم فرق العمل الكبيرة والمشاريع طويلة الأمد.",
    icon: Boxes,
  },
];

export const projects: Project[] = [
  {
    id: "youtube",
    title:
      "برمجة وتطوير واجهة مستخدم كاملة لمنصة مشاركة فيديوهات (شبه YouTube)",
    description: `برمجة واجهة (UI/UX) لمنصة فيديوهات بتصميم عالمي، تتكون من: صفحة رئيسية بتصميم شبكي (Grid)، صفحة مشاهدة تفاعلية (مشغل، تعليقات، واقتراحات)، صفحة بحث بفلاتر متقدمة، ونافذة تسجيل دخول منبثقة (Modal) لضمان بقاء المستخدم في نفس الصفحة`,
    image: "/projects/youtubee.png",
    category: "web",
    categoryLabel: "تطبيق ويب",
    tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    demoUrl: "https://mohamed200039.github.io/mohammed_youtube",
    codeUrl: "https://github.com/mohamed200039/mohammed_youtube",
  },
  {
    id: "3limni",
    title: "موقع مدرسة ابتدائية متجاوب باستخدام HTML وSass وBootstrap وWebpack",
    description: `برمجة واجهة (UI/UX) لمنصة فيديوهات بتصميم عالمي، تتكون من: صفحة رئيسية بتصميم شبكي (Grid)، صفحة مشاهدة تفاعلية (مشغل، تعليقات، واقتراحات)، صفحة بحث بفلاتر متقدمة، ونافذة تسجيل دخول منبثقة (Modal) لضمان بقاء المستخدم في نفس الصفحة`,
    image: "/projects/3limni.png",
    category: "web",
    categoryLabel: "تطبيق ويب",
    tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
    demoUrl: "https://mohamed200039.github.io/3alemni-school",
    codeUrl: "https://github.com/mohamed200039/3alemni-school",
  },
  {
    id: "vscode",
    title: `تصميم واجهة مستخدم احترافية لمحرر أكواد (VS Code Clone)`,
    description: `تم في هذا المشروع تصميم وتطوير واجهة مستخدم (UI) عصرية وعالية الدقة تحاكي بيئة العمل الشهيرة "Visual Studio Code". يهدف التصميم إلى توفير تجربة مستخدم (UX) سلسة ومريحة للمبرمجين، مع التركيز على وضوح العناصر، وتناسق الألوان، وتوفير بيئة عمل احترافية تدعم الإنتاجية. تم تنفيذ التصميم بجودة فائقة (Ultra-High Resolution) لضمان وضوح كافة التفاصيل البرمجية والنصية`,
    image: "/projects/vscode-clone.png",
    category: "web",
    categoryLabel: "تطبيق ويب",
    tech: ["React", "TailwindCss"],
    demoUrl: "https://vscode-clone.vercel.app/",
    codeUrl: "https://github.com/mohamed200039/vscode_clone",
  },

  {
    id: "landing",
    title: "صفحة هبوط انطلاق قريبا",
    description: "صفحة هبوط بمؤقت لاطلاق منتج",
    image: "/projects/landing.png",
    category: "landing",
    categoryLabel: "صفحة هبوط",
    tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSRAP"],
    demoUrl: "https://mohamed200039.github.io/comming_soon/",
    codeUrl: "https://github.com/mohamed200039/comming_soon",
  },
];

export interface ProjectFilter {
  id: string;
  label: string;
}

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "الكل" },
  { id: "web", label: "تطبيقات ويب" },
  { id: "landing", label: "صفحات هبوط" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "@mohamed200039",
    url: "https://github.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "@mohamed200039",
    url: "https://github.com/mohamed200039",
  },
];
