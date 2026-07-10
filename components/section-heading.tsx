interface SectionHeadingProps {
  tag: string
  title: string
  subtitle?: string
}

export function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-sm font-medium text-primary text-glow">
        {tag}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
