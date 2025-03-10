"use client";
import { Clipboard, Mail } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface MessageCardProps {
  messageData: {
    name: string;
    subject: string;
    userEmail: string;
    message: string;
  };
}

export default function MessageCard({ messageData }: MessageCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(messageData?.userEmail);
    toast.success("Email copied to clipboard!");
  };

  return (
    <Card className="shadow-md border border-gray-200 dark:border-gray-700 transition hover:shadow-lg w-full max-w-md mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {messageData?.name}
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {messageData?.subject}
          </p>
        </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {messageData?.userEmail}
          </p>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopyEmail}
          className="hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Clipboard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Button>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {expanded
            ? messageData?.message
            : messageData?.message.slice(0, 60) +
              (messageData?.message?.length > 60 ? "..." : "")}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Button
          variant="link"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 dark:text-blue-400"
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
        <a
          href={`mailto:${messageData?.userEmail}`}
          className="text-blue-600 dark:text-blue-400 flex items-center hover:underline"
        >
          <Mail className="w-5 h-5 mr-1" />
          Reply
        </a>
      </CardFooter>
    </Card>
  );
}
