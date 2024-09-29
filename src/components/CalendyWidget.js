'use client';

import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/YOUR_CALENDLY_LINK",
        text: "Schedule time with me",
        color: "#00a2ff",
        textColor: "#ffffff",
        branding: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
