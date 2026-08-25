import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";

export default function PhoneLink({ className }: { className?: string }) {
  return (
    <a href={PHONE_HREF} className={className}>
      {PHONE_DISPLAY}
    </a>
  );
}
