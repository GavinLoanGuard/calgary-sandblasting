"use client";

import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { trackEvent } from "@/lib/gtag";

export default function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      onClick={() => trackEvent("click_to_call", { link_url: PHONE_HREF })}
    >
      {PHONE_DISPLAY}
    </a>
  );
}
