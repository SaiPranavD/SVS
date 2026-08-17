import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-editorial flex h-16 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="SVS Logo" className="h-9 w-9 object-contain" />
          <div className="flex flex-col">
            <span className="font-display text-xl leading-none tracking-tight text-forest-deep">SVS</span>
            <span className="text-[0.55rem] font-medium tracking-[0.28em] text-muted-foreground mt-0.5 leading-none">
              NUTRACEUTICALS
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          <Link
            to="/"
            className="text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest"
            activeProps={{ className: "text-forest" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest"
            activeProps={{ className: "text-forest" }}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest"
            activeProps={{ className: "text-forest" }}
          >
            Products
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
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
