<?php

namespace Database\Seeders;

use App\Models\Note;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // User::factory(10)->create();

    // Création user with id 1
    User::factory()->create([
      'name' => 'Barak Obama',
      'email' => 'barak@example.com',
      'id' => 1,
      'password' => bcrypt('password')
    ]);

    // creation 50 notes
    Note::factory(50)->create();
  }
}
