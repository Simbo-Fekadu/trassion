// Simple image wrapper that serves ONLY the original asset in /images.
// Usage: <ResponsiveImage file="logo.png" alt="Company Logo" className="h-12" />
export default function ResponsiveImage({
  file,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority,
}) {
  const src = `/images/${file}`;
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
      onError={(e) => {
        console.warn(`Missing image: ${src}`);
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
