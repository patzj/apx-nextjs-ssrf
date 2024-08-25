"use server";

import { redirect } from "next/navigation";

export async function getStarted() {
  return redirect("/maintenance");
}
