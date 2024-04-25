import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Edit({ auth, item }) {
  const { data: note } = item;

  const { data, setData, progress, processing, errors, reset, put } = useForm({
    note: note.note,
  });

  function handleSubmit(e) {
    e.preventDefault(); // prevent the default form submission
    // update the note
    put(route("note.update", note.id), {
      onSuccess: () => {
        reset();
        // add toast message
      },
    });
  }

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Edit Note" />
      <form onSubmit={handleSubmit}>
        <div className="mt-10 bg-yellow-200 p-12">
          <Textarea
            name="note"
            label="Note"
            className="bg-white"
            value={data.note}
            onChange={(e) => setData("note", e.target.value)}
            error={errors.note}
            disabled={processing}
            autoFocus
          />
          {/* error message */}
          {errors.note && (
            <div className="text-red-500 text-sm mt-2">{errors.note}</div>
          )}
          <div className="mt-6">
            <Button
              className="bg-blue-500 text-white "
              variant
              type="submit"
              disabled={processing}
            >
              {processing ? "Edit..." : "Edit Note"}
            </Button>
          </div>
          {progress && (
            <progress value={progress.percentage} max="100">
              {progress.percentage}%
            </progress>
          )}
        </div>
      </form>
    </AuthenticatedLayout>
  );
}
