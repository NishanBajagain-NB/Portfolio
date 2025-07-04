import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nishan Bajagain Portfolio",
    short_name: "Nishan Bajagain",
    description:
      "Portfolio of Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#8a7bff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
