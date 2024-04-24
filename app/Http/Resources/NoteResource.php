<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return (
      [
        'id' => $this->id,
        'note' => $this->note,
        // 'created_at' => (new Carbon($this->created_at))->format('d-m-Y'),
        'created_at' => (new Carbon($this->created_at))->diffForHumans(),
        'updated_at' => (new Carbon($this->updated_at))->diffForHumans(),
      ]
    );
  }
}
