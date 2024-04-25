<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoteRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {

    return [
      'note' => 'required|string|min:3|max:255',
    ];
  }

  /**
   * Get the error messages for the defined validation rules.
   *
   * @return array<string, string>
   */

  public function messages(): array
  {
    return [
      'note.required' => 'Champs requis',
      'note.max' => 'Le champ ne doit pas dépasser 255 caractères',
      'note.min' => 'Le champ doit contenir au moins 3 caractères',
      'note.string' => 'Le champ doit être une chaîne de caractères',
    ];
  }
}
