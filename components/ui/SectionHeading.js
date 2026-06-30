export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-brand-accent mt-3 rounded-full ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-slate-600 mt-4 max-w-2xl text-lg leading-relaxed  ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
