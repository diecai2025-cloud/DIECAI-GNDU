import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://diecai2025.com"),

  title: {
    default:
      "DIECAI-2025 | International Conference on Digital Innovation in Electronics, Communication and Artificial Intelligence",
    template: "%s | DIECAI-2025",
  },

  description:
    "DIECAI-2025 is an international conference hosted by the Department of Electronics Technology, Guru Nanak Dev University, Amritsar, bringing together researchers, academicians, scientists, and industry professionals to discuss advancements in Electronics, Communication Systems, Artificial Intelligence, IoT, VLSI, Space Communication, Wireless Networks, and Sustainable Technologies.",

  keywords: [
    "DIECAI-2025",
    "International Conference",
    "Digital Innovation",
    "Electronics Conference India",
    "AI Conference 2025",
    "Communication Systems",
    "GNDU Amritsar",
    "IoT Research",
    "6G and Wireless",
    "VLSI Design",
    "Optical Networks",
    "AI and Data Science",
    "Call for Papers 2025",
    "Academic Conference",
    "Research Conference 2025",
  ],

  authors: [
    { name: "Organizing Committee – DIECAI-2025" },
    {
      name: "Rohaz Bhalla – Developer (Open to Work / Freelance)",
      url: "https://diecai2025.com",
    },
  ],

  creator: "DIECAI-2025 Web Team",
  publisher: "Guru Nanak Dev University, Amritsar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: "https://diecai2025.com",
    title:
      "DIECAI-2025 | International Conference on Digital Innovation in Electronics, Communication and AI",
    description:
      "Hosted by GNDU Amritsar, DIECAI-2025 unites global experts in Electronics, AI, Communication, IoT, VLSI, Wireless Networks and Space Communication.",
    siteName: "DIECAI-2025",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DIECAI-2025 Conference Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DIECAI-2025 | International Conference on Digital Innovation in Electronics, Communication and AI",
    description:
      "A premier international conference hosted at GNDU Amritsar, focused on Electronics, Communication, Artificial Intelligence, IoT and VLSI.",
    images: ["/og-image.png"],
    creator: "@gndu",
  },

  alternates: {
    canonical: "https://diecai2025.com",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <meta name="author" content="Rohaz Bhalla" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Guru Nanak Dev University, Amritsar",
        url: "https://www.gndu.ac.in",
        logo: "https://diecai2025.com/gndu-logo.png",
        sameAs: [
          "https://www.linkedin.com/company/department-of-electronics-technology-gndu-amritsar",
          "https://online.gndu.ac.in/department-of-electronics-technology.aspx"
        ]
      },

      {
        "@context": "https://schema.org",
        "@type": "Event",
        name: "DIECAI-2025 — International Conference on Digital Innovation in Electronics, Communication and Artificial Intelligence",
        startDate: "2025-11-13",
        endDate: "2025-11-15",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        url: "https://diecai2025.com",
        location: {
          "@type": "Place",
          name: "Guru Nanak Dev University, Amritsar",
          address: "Grand Trunk Road, Amritsar, Punjab, India"
        },
        organizer: {
          "@type": "Organization",
          name: "Department of Electronics Technology, GNDU"
        }
      },

      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rohaz Bhalla",
        jobTitle: "Full Stack Developer",
        description: "Open to Work · Freelance · MERN · Next.js · SQL · Automation",
        url: "https://github.com/Rohaz-bhalla"
      }
    ])
  }}
/>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
