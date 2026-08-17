import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/products" });
  },
  component: () => null,
});
