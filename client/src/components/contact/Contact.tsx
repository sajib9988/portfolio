"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { getSession } from "next-auth/react";
import image from "@/assets/images/contact.jpg"
import Image from "next/image";
import { toast } from "sonner";
import { sonarId } from "@/utils/sonarId";

type FormData = {
  name: string;
  subject: string;
  userEmail: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Get user session to auto-fill email
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user?.email) {
        setUserEmail(session.user.email);
        setValue("userEmail", session.user.email);
      }
    };
    fetchSession();
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Form Data:", data);
    toast.loading("Sending Message...", { id: sonarId });
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send data to update
        }
      );
      toast.success("Message sent successfully!", { id: sonarId });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message!", { id: sonarId });
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="container mx-auto min-h-[100vh] max-w-5xl p-6 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Animation Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">Let&apos;s Connect!</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Have a question or feedback? Send me a message!
        </p>

        <motion.div
       
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
             <Image
          src={image}
          width={300}
          height={300}
          alt="Contact Illustration"
          className="mt-6  mx-auto md:mx-0"/>
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-900"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {submitted ? (
          <motion.div
            className="p-4 text-center text-green-600 border border-green-400 rounded-lg bg-green-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Your message has been sent!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <Input
                type="text"
                placeholder="Enter subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            {/* Email Input (Auto-filled, Uneditable) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input
                type="email"
                value={userEmail}
                disabled
                className="cursor-not-allowed bg-gray-200 dark:bg-gray-700"
                {...register("userEmail")}
              />
            </div>

            {/* Comment Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Comment
              </label>
              <Textarea
                placeholder="Write your comment..."
                rows={4}
                {...register("message", { required: "Comment cannot be empty" })}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            {
                userEmail?  <Button type="submit" className="w-full flex items-center gap-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>:
              <p className="text-red-500 text-sm">Please sign in to send a message.</p>
            }
          
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
