import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={isHome ? "absolute top-0 left-0 right-0 z-40 border-none bg-transparent" : "sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur"}>
      <div className="container-editorial flex h-20 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="SVS Logo" className="h-9 w-9 object-contain brightness-0 invert" />
          <div className="flex flex-col">
            <span className={isHome ? "font-display text-xl leading-none tracking-tight text-white" : "font-display text-xl leading-none tracking-tight text-forest-deep"}>SVS</span>
            <span className={isHome ? "text-[0.55rem] font-semibold tracking-[0.28em] text-white/80 mt-0.5 leading-none" : "text-[0.55rem] font-medium tracking-[0.28em] text-muted-foreground mt-0.5 leading-none"}>
              NUTRACEUTICALS
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className={isHome ? "text-[0.85rem] font-semibold tracking-wide text-white/95 transition-colors hover:text-white" : "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest"}
            activeProps={{ className: isHome ? "text-white underline decoration-2 underline-offset-8" : "text-forest" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={isHome ? "text-[0.85rem] font-semibold tracking-wide text-white/80 transition-colors hover:text-white" : "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest"}
            activeProps={{ className: isHome ? "text-white" : "text-forest" }}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={isHome ? "text-[0.85rem] font-semibold tracking-wide text-white/80 transition-colors hover:text-white" : "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest"}
            activeProps={{ className: isHome ? "text-white" : "text-forest" }}
          >
            Products
          </Link>
        </nav>
        <button className={isHome ? "md:hidden text-white" : "md:hidden text-foreground"} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden animate-slide-down">
          <nav className="container-editorial flex flex-col gap-1 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary"
            >
              About Us
            </Link>
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary"
            >
              Products
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
