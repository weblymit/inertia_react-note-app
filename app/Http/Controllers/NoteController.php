<?php

namespace App\Http\Controllers;

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
    $notes = Note::paginate(10);
    return inertia('Note/Index', [
      'notes' => NoteResource::collection($notes) // NoteResource::collection($notes) is used to format the data
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
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
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Note $note)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Note $note)
  {
    //
  }
}
