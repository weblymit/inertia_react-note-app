import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

export default function Create({ auth, note }) {
  const { data, setData, post, progress, processing, errors, reset } = useForm({
    note: "",
  });

  function handleSubmit(e) {
    e.preventDefault(); // prevent the default form submission
    // update the note
    post(route("note.store"), {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Create Note" />
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
            // required
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
              {processing ? "Creating..." : "Create Note"}
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
