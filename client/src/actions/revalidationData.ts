"use server";
import { revalidateTag } from "next/cache";

export async function revalidateProjects() {
  revalidateTag("projects");
}
export async function revalidateBlogs() {
  revalidateTag("blogs");
}