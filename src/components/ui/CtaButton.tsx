import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
};

type CtaAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type CtaAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function CtaButton(props: CtaAsLink | CtaAsButton) {
  const { children, variant = "dark", className = "", ...rest } = props;
  const cls =
    variant === "light"
      ? "cta-light"
      : variant === "outline"
        ? "cta-outline"
        : "cta-dark";

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={`${cls} ${className}`} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${cls} ${className}`}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
