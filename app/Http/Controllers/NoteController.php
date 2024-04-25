<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoteRequest;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $notes = Note::where('user_id', auth()->id())->orderBy('created_at', 'desc')->paginate(10);;
    return inertia('Note/Index', [
      'notes' => NoteResource::collection($notes) // NoteResource::collection($notes) is used to format the data
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('Note/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(NoteRequest $request)
  {
    $note = Note::create([
      'note' => $request->note,
      'user_id' => auth()->id(),
    ]);

    return to_route('note.show', $note->id);
  }

  /**
   * Display the specified resource.
   */
  public function show(Note $note)
  {

    return inertia('Note/Show', [
      'data' => NoteResource::make($note) // NoteResource::make($note) is used to format the data,
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Note $note)
  {
    // check if the note belongs to the authenticated user
    if ($note->user_id !== auth()->id()) {
      return redirect()->route('note.index');
      // or return abort(403);
    }
    return inertia('Note/Edit', [
      'item' => NoteResource::make($note) // NoteResource::make($note) is used to format the data,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(NoteRequest $request, Note $note)
  {
    // check if the note belongs to the authenticated user
    if ($note->user_id !== auth()->id()) {
      return redirect()->route('note.index');
    }

    // update the note and updated_at to the current time
    $note->update([
      'note' => $request->note,
      'updated_at' => now(),
    ]);

    return to_route('note.show', $note->id)->with('message', 'Note updated successfully!');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Note $note)
  {
    // check if the note belongs to the authenticated user
    if ($note->user_id !== auth()->id()) {
      return redirect()->route('note.index');
      // or return abort(403);
    }
    $note->delete();
    return to_route('note.index')->with('message', 'Note deleted successfully!');
  }
}
