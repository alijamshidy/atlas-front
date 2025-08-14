export default function Gallery({ lang }) {
  const images = [
    "https://picsum.photos/id/1025/300/200",
    "https://picsum.photos/id/1026/300/200",
    "https://picsum.photos/id/1027/300/200",
    "https://picsum.photos/id/1028/300/200",
  ];
  return (
    <div>
      <h2 className="text-3xl font-semibold border-b-4 border-blue-800 pb-2 mb-4">
        {lang === "fa" ? "گالری تصاویر" : "Gallery"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            className="rounded-md cursor-pointer hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
