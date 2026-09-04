import Image from "next/image";
import { BUSINESS_NAME } from "@/config/site";

/**
 * The "CS" spray-nozzle mark, chipped onto a light tag so it reads cleanly
 * on both the light header and the dark footer/hero — the source art has a
 * near-black "S" that disappears without a light backing.
 */
export default function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    <span className={`clip-tag inline-flex shrink-0 items-center bg-steel-50 px-1.5 py-1 ${className}`}>
      <Image
        src="/images/logo-mark.png"
        alt={`${BUSINESS_NAME} logo`}
        width={932}
        height={554}
        className="h-full w-auto"
        priority
      />
    </span>
  );
}
