export default function About({ lang }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold border-b-4 border-blue-800 pb-2 mb-4">
        {lang === "fa" ? "معرفی شرکت" : "About Us"}
      </h2>
      <p className="text-lg leading-relaxed">
        {lang === "fa"
          ? "شرکت ما یکی از برترین ارائه‌دهندگان خدمات در زمینه فناوری است."
          : "Our company is a leading provider of technology services."}
      </p>
    </div>
  );
}
