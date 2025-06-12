export function generateMetadata({
  title = "Renz Cruz - Software Developer",
  description = "Discover a unique section of Renz's portfolio showcasing software engineering projects.",
  path = "",
  image,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}) {
  const baseUrl = "https://www.renzcruz.dev"
  const url = `${baseUrl}${path}`

  // Generate dynamic OG image URL
  const ogImageUrl =
    image ||
    `${baseUrl}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&theme=dark`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Renz Cruz Portfolio",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Preview Image`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: "@renzcruz", // Replace with your Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
