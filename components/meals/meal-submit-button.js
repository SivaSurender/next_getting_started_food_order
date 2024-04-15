"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function MealSubmission() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Share Meal"}
    </button>
  );
}

export default MealSubmission;
