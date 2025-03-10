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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { revalidateBlogs } from "@/actions/revalidationData";
import { sonarId } from "@/utils/sonarId";

const formSchema = z.object({
  image: z.string().min(1, "Image is required."),
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  author: z.string().min(1, "Author is required."),
  date: z.string().min(1, "Date is required."),
  // userEmail: z.string().email("Invalid email format"),
});

const EditBlogDetails = ({ blog }: { blog: any }) => {
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
      // userEmail: "",
    },
  });

  useEffect(() => {
    form.reset({
      image: blog?.image || "",
      title: blog?.title || "",
      description: blog?.description || "",
      author: blog?.author || "",
      date: blog?.date || "",
      // userEmail: blog?.userEmail || "",
    });
  }, [blog, form]);

  const handleImageChange = (file: File) => {
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Create a preview URL
  };

  const onSubmit = async (data: any) => {
    toast.loading("Updating blog...", { id: sonarId });
    try {
      let imageUrl = data.image;
      if (image) {
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
        if (!result.secure_url) throw new Error("Image upload failed");
        imageUrl = result.secure_url;
      }

      const updatedBlog = { ...data, image: imageUrl };
      // console.log("Updated Blog Data:", updatedBlog);

      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlog), // Send data to update
      });
      await revalidateBlogs();
      toast.success("Blog updated successfully!", { id: sonarId });
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update blog.", { id: sonarId });
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button onClick={() => setOpen(true)}>
            <FaEdit className="text-black cursor-pointer hover:scale-110 w-5 h-5" />
          </button>
        </DialogTrigger>
        <DialogContent className="!max-w-[600px] h-[75vh]">
          <DialogTitle>Edit Blog</DialogTitle>
          <div className="overflow-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                 {/* Show the existing image or the selected image preview */}
                 {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt={blog.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                ) : blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                ) : null}

                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e?.target?.files?.[0];
                            handleImageChange(file as File);
                          }}
                        />
                      </FormControl>
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

                {/* <FormField
                  name="userEmail"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                /> */}

                <Button type="submit" className="w-full">
                  Update Blog
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditBlogDetails;
