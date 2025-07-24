"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-100 bg-danger-subtle py-2 text-center">
      <div className="d-flex justify-content-center">
        <Link
          href="/"
          className={clsx(
            "btn mx-2",
            pathname === "/" ? "btn-primary" : "btn-outline-primary"
          )}
        >
          Home
        </Link>

        <Link
          href="/contact"
          className={clsx(
            "btn mx-2",
            pathname === "/contact" ? "btn-success" : "btn-outline-success"
          )}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
