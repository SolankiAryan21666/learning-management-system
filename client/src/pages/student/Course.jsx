import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";

const Course = () => {
  return (
    <Card className="pt-0 overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXaTcUEkY4uy0FypgWiRW_CoRvYLKU-6AqfgKhlj-yQ&s=1024x1024"
        alt="course"
        className="w-full h-36 object-cover rounded-t-lg"
      />

      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="hover:underline font-bold text-lg truncate">
          Next js course
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">Aryan Solanki</h1>
          </div>
          <Badge
            className={"bg-blue-600 text-white px-2 py-1 text-xs rounded-full"}
          >
            Advanced
          </Badge>
        </div>
        <span>₹100</span>
      </CardContent>
    </Card>
  );
};

export default Course;
