import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle, ShoppingCart } from "lucide-react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  // Static Data
  const stats = [
    { icon: <Briefcase className="w-8 h-8 text-blue-500 dark:text-blue-400" />, title: "Experience", value: "2+ Years" },
    { icon: <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />, title: "Completed Projects", value: "30+" },
    { icon: <ShoppingCart className="w-8 h-8 text-purple-500 dark:text-purple-400" />, title: "Fiverr Orders", value: "15+" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gray-100 dark:bg-gray-900">
      {session?.user && (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full text-center">
          {/* Profile Image */}
          <Image
            alt="profileImage"
            width={120}
            height={120}
            src={session?.user?.image || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}
            className="mx-auto rounded-full border-4 border-gray-300 dark:border-gray-700"
          />

          {/* Welcome Message */}
          <h1 className="text-3xl font-bold mt-4 text-gray-800 dark:text-white">
            Welcome, {session.user.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            You are logged in as <span className="font-medium text-gray-900 dark:text-white">{session.user.email}</span>
          </p>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-md border dark:border-gray-700 bg-white dark:bg-gray-800">
            <CardHeader className="flex items-center space-x-4">
              {stat.icon}
              <CardTitle className="text-lg text-gray-800 dark:text-white">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-gray-900 dark:text-gray-200 text-center">
              {stat.value}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
