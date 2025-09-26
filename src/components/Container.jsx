// Reusable layout container to provide consistent horizontal padding and max-width.
// Usage: <Container size="md" className="space-y-8">...</Container>
// Sizes map to Tailwind max-width utilities; default is lg (max-w-7xl).
export default function Container({ children, size = "lg", className = "" }) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    full: "max-w-none",
  };
  const sizeClass = sizes[size] || sizes.lg;
  return (
    <div className={`px-4 md:px-8 mx-auto ${sizeClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
