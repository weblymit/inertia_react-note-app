import { Link } from "@inertiajs/react";
import React from "react";

export default function BtnAction() {
  return (
    <Link
      href="/note/create"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Create Note
    </Link>
  );
}
