export type TestimonialVideo = {
  title: string;
  thumb: string;
  youtubeId: string;
};

/** Vídeos de depoimento, na mesma ordem do carrossel original. */
export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  { title: "Group 10", thumb: "/images/Group-10.png", youtubeId: "n8JRhnS1p88" },
  { title: "Group 5", thumb: "/images/Group-5.png", youtubeId: "pNWVcZ0kE30" },
  { title: "Group 9", thumb: "/images/Group-9.png", youtubeId: "IpsTWh1cNPM" },
  { title: "Tumb 1", thumb: "/images/Tumb-1.png", youtubeId: "vAMzz2NQUtY" },
  { title: "Frame 23", thumb: "/images/Frame-23.png", youtubeId: "UHV6k8O7XMQ" },
  { title: "Tumb 2", thumb: "/images/Tumb-2.png", youtubeId: "0D6jv5-IFvI" },
  { title: "Nina-1", thumb: "/images/Nina-1.webp", youtubeId: "PQxbOlaEl1o" },
];

export function youtubeEmbedUrl(id: string) {
  const origin = typeof window === "undefined" ? "" : `&origin=${encodeURIComponent(window.location.origin)}`;
  return `https://www.youtube.com/embed/${id}?feature=oembed&autoplay=1&rel=0&controls=0&enablejsapi=1${origin}`;
}
