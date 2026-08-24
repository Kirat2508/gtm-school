import Image from "next/image";
import { partnersAndSupportedBy } from "@/content/backed";

function CornerMarks() {
  const arm = "absolute h-3 w-3 border-[#E8C547]";
  return (
    <>
      <span className={`${arm} top-0 left-0 border-t-2 border-l-2`} aria-hidden />
      <span className={`${arm} top-0 right-0 border-t-2 border-r-2`} aria-hidden />
      <span className={`${arm} bottom-0 left-0 border-b-2 border-l-2`} aria-hidden />
      <span className={`${arm} right-0 bottom-0 border-r-2 border-b-2`} aria-hidden />
    </>
  );
}

export function BackedBy() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#FBF6EE] px-5 py-14 md:px-10 md:py-16"
    >
      <svg
        className="pointer-events-none absolute top-10 right-[8%] hidden h-12 w-16 opacity-25 md:block"
        viewBox="0 0 64 48"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 28c8-10 18-10 24-2 6-8 16-7 22 2"
          stroke="#1B2A4A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M40 12c2.5 1.5 5 1.5 7.5 0"
          stroke="#1B2A4A"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[720px]">
        <p className="text-center text-[11px] font-medium tracking-[0.06em] text-[#E8C547]">
          Partners and supported by
        </p>

        <div className="relative mt-8 px-2 md:mt-10 md:px-3">
          <CornerMarks />

          <div className="grid grid-cols-3">
            {partnersAndSupportedBy.map((logo, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              return (
                <div
                  key={logo.name}
                  className="relative flex min-h-[88px] items-center justify-center px-4 py-6 md:min-h-[100px] md:px-6 md:py-7"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={48}
                    unoptimized={logo.name === "Leap Scholar"}
                    className={`w-auto object-contain ${
                      logo.name === "Leap Scholar"
                        ? "h-7 max-w-[130px] md:h-8 md:max-w-[150px]"
                        : "h-8 max-w-[120px] md:h-9 md:max-w-[140px]"
                    }`}
                  />
                  {/* vertical dividers between columns */}
                  {col < 2 ? (
                    <span
                      className="absolute top-[20%] right-0 bottom-[20%] w-px bg-[rgba(27,42,74,0.12)]"
                      aria-hidden
                    />
                  ) : null}
                  {/* horizontal divider between rows */}
                  {row === 0 ? (
                    <span
                      className="absolute right-[12%] bottom-0 left-[12%] h-px bg-[rgba(27,42,74,0.1)]"
                      aria-hidden
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
