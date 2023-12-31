<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->on('users')->cascadeOnDelete();
            $table->foreignId('course_id')->on('courses')->cascadeOnDelete()->nullable();
            $table->foreignId('workspacepackage_id')->on('workspacepackages')->cascadeOnDelete()->nullable();
            $table->timestamps();

            $table->unique(['user_id', 'course_id']);

            $table->unique(['user_id', 'workspacepackage_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrollments');
    }
};
