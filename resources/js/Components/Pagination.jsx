import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-10">
      {links.map((link) => (
        <span key={link.label} className="inline-block mx-1">
          <Link
            preserveScroll
            href={link.url || "#"}
            className={`px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
              link.active ? "bg-blue-400" : ""
            }`}
            // dangerouslySetInnerHTML={{ __html: link.label }}
          >
            {link.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
