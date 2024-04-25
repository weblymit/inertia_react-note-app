import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index({ auth, notes }) {
  const { data: allNotes } = notes;
  // substring(0, 10) notes
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Note" />

      <div className="flex justify-end">
        <Link
          href={route("note.create")}
          className="bg-blue-500 text-white p-3 rounded-lg"
        >
          Create Note
        </Link>
      </div>
      <h1 className="text-2xl font-semibold mt-4 text-white pb-6">All Notes</h1>

      <div className="grid grid-cols-3 gap-4">
        {allNotes?.map((note) => (
          <Link
            href={route("note.show", note.id)}
            key={note.id}
            className="bg-yellow-200 text-black p-6"
          >
            <p>{note.id}</p>
            <div className="mt-4">{truncateString(note.note, 300)}</div>
            <p className="text-gray-600 pt-3 text-sm text-right">
              {note.updated_at}
            </p>
          </Link>
        ))}
      </div>
      <Pagination links={notes.meta.links} />
    </AuthenticatedLayout>
  );
}
