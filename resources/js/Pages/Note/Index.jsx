import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index({ auth, notes }) {
  const { data: allNotes } = notes;
  console.log("allNotes:", allNotes);
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

      <pre className="text-white">{JSON.stringify(notes, null, 2)}</pre>

      <div className="grid grid-cols-3 gap-4">
        {allNotes?.map((note) => (
          <Link
            href={route("note.show", note.id)}
            key={note.id}
            className="bg-yellow-200 text-black p-6"
          >
            <div className="mt-4">{truncateString(note.note, 300)}</div>
            <p className="text-gray-600 pt-3 text-sm text-right">
              {note.updated_at}
            </p>
          </Link>
        ))}
      </div>
    </AuthenticatedLayout>
  );
}
