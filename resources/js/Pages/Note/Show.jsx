import DeleteNote from "@/Components/DeleteNote";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Show({ data, auth }) {
  const { data: note } = data;
  return (
    <AuthenticatedLayout user={auth.user}>
      {/* <Head title={note?.title} /> */}

      <div className="mt-10 bg-yellow-200 p-12">
        <div className="flex justify-end space-x-3">
          <Button className="bg-blue-500 text-white " variant>
            <Link href={route("note.edit", note.id)}>Editer</Link>
          </Button>
          <DeleteNote note={note} />
        </div>
        <p className="text-gray-600 text-sm pb-2">{note.updated_at}</p>
        <div className="mt-6">{note.note}</div>
      </div>
    </AuthenticatedLayout>
  );
}
