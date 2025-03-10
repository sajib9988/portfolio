/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserSession } from "@/types/session.user.type";
import { revalidateBlogs } from "@/actions/revalidationData";
import { sonarId } from "@/utils/sonarId";

const formSchema = z.object({
  image: z.string().optional(),
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  author: z.string().min(1, "Author is required."),
  date: z.string().min(1, "Date is required."),
  userEmail: z.string().email("Invalid email format"),
});

const AddBlogPost = ({ session }: { session: TUserSession }) => {
  // console.log(session?.user?.email, "user");
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      description: "",
      author: "",
      date: "",
      userEmail: session?.user?.email || "", // Set userEmail from session
    },
  });

  const handleImageChange = (file: File) => {
    setImage(file);
    // console.log(file, "test file");
    if (file) {
      setImagePreview(URL?.createObjectURL(file) || null);
    } else {
      setImagePreview(null);
    }
  };

  const onSubmit = async (data: any) => {
    toast.loading("Adding Blog Post...", { id: sonarId });

    try {
      if (!image) {
        return toast.error("Please select an image first!", { id: sonarId });
      }

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "stationery shop");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dyqm6ffjt/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      const imageUrl = result.secure_url;

      const blogData = {
        ...data,
        image: imageUrl,
      };
       await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData), // Send data to update
        }
      );
      // console.log(await createBlog.json(), "create blog response");
      await revalidateBlogs();
      toast.success("Blog create successfully!", { id: sonarId });
      form.reset();
      setImage(null);
      setImagePreview(null);
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add blog post. Please try again.", {
        id: sonarId,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span
          onClick={() => setOpen(true)}
          className="bg-gray-900 text-cyan-500 dark:bg-white dark:text-cyan-600 shadow-md py-2 px-3 hover:shadow-lg rounded cursor-pointer transition-all"
        >
          Add Blog
        </span>
      </DialogTrigger>
      <DialogContent className="px-2">
        <DialogTitle className="sr-only">Add Blog</DialogTitle>
        <div className=" max-h-[70vh] overflow-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-w-md mx-auto w-full"
            >
              {/* Show the existing image or the selected image preview */}
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Preview Image"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              )}

              <FormField
                control={form.control}
                name="image"
                render={({ fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel>Blog Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];

                          handleImageChange(file as File);
                        }}
                      />
                    </FormControl>
                    {error && <p className="text-red-500">{error.message}</p>}
                  </FormItem>
                )}
              />

              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="author"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="date"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* User Email - Read-Only */}
              <FormField
                name="userEmail"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Email</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Add Blog Post
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddBlogPost;
