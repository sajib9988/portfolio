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
import { revalidateBlogs } from "@/actions/revalidationData";
import { sonarId } from "@/utils/sonarId";
import { TUserSession } from "@/types/session.user.type";

const formSchema = z.object({
  image: z.string().optional(),
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  techStack: z.array(z.string()).min(1, "Tech Stack is required."),
  githubLink: z.string().min(1, "GitHub Link is required."),
  liveLink: z.string().min(1, "Live Link is required."),
  userEmail: z.string().email("Invalid email format"),
});

const AddProjectPost = ({ session }: { session: TUserSession }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      description: "",
      techStack: [],
      githubLink: "",
      liveLink: "",
      userEmail: session?.user?.email || "",
    },
  });

  const handleImageChange = (file: File) => {
    setImage(file);
  
    if (file) {
      setImagePreview(URL?.createObjectURL(file));
    }else{
      setImagePreview(null);
    }
  };

  const onSubmit = async (data: any) => {
    toast.loading("creating project...", { id: sonarId });
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

      const updateProject = { ...data, image: imageUrl };
      // console.log("Updated Blog Data:", updateProject);

      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProject),
      });
      await revalidateBlogs();
      toast.success("Project created successfully!", { id: sonarId });
      form.reset();
      setImage(null);
      setImagePreview(null);
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create  project.", { id: sonarId });
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <span
          onClick={() => setOpen(true)}
          className="bg-gray-900 text-cyan-500 dark:bg-white dark:text-cyan-600 shadow-md py-2 px-3 hover:shadow-lg rounded cursor-pointer transition-all"
        >
          Add Project
        </span>
        </DialogTrigger>
        <DialogContent className="!max-w-[600px] h-[75vh]">
          <DialogTitle>Edit Blog</DialogTitle>
          <div className="overflow-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {imagePreview && (
                  <Image
                    src={imagePreview}
                    alt={"project image"}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                )}

                <FormField
                  name="image"
                  control={form.control}
                  render={() => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleImageChange(e.target.files?.[0] as File)
                          }
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
                  name="techStack"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tech Stack (comma-separated)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.value.split(","))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="githubLink"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub Link</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="liveLink"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Live Link</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
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

export default AddProjectPost;
