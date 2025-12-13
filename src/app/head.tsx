export default function Head() {
  return (
    <>
      <title>Vedansh | Full Stack Developer</title>
      <meta
        name="description"
        content="Welcome to my internet home. I build clean, scalable web applications."
      />

      {/* Open Graph */}
      <meta property="og:title" content="Vedansh | Full Stack Developer" />
      <meta
        property="og:description"
        content="Welcome to my internet home. I build clean, scalable web applications."
      />
      <meta
        property="og:image"
        content="https://vedanshworks.vercel.app/og.png"
      />
      <meta
        property="og:url"
        content="https://vedanshworks.vercel.app"
      />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Vedansh | Full Stack Developer"
      />
      <meta
        name="twitter:description"
        content="Welcome to my internet home."
      />
      <meta
        name="twitter:image"
        content="https://vedanshworks.vercel.app/og.png"
      />
    </>
  );
}
