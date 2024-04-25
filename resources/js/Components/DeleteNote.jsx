import React from "react";
import { Button } from "./ui/button";
import { useForm } from "@inertiajs/react";

export default function DeleteNote({ note }) {
  const { delete: destroy } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    destroy(route("note.destroy", note.id), {
      onSuccess: () => {
        console.log("note deleted");
      },
    });
  };

  return (
    <form
      action={route("note.destroy", note.id)}
      // method="POST"
      onSubmit={handleSubmit}
    >
      <Button
        className=" border-none bg-red-500 text-white hover:bg-red-700"
        type="submit"
      >
        Supprimer
      </Button>
    </form>
  );
}
