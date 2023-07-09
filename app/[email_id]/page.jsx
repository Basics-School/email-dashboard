import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fakeData } from "@/lib/data";
import { format } from "date-fns";
const page = ({ params }) => {
  let id = params.email_id;
  const email = fakeData.emails.find((email) => email.email_id == id);
  return (
    <div className="md:px-6 p-2 md:py-4 overflow-y-scroll scrollbar-w-1 scrollbar scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full  border-b border-zinc-800 h-full text-white ">
      <div className="flex flex-col px-2 gap-10">
        <div className="flex md:flex-row flex-col justify-between  w-full">
          <div className="text-gray-600 flex flex-row  gap-4 items-center">
            <Avatar className="">
              <AvatarFallback className="bg-green-700 text-white">
                {
                  fakeData.users
                    .find((user) => user.user_id == email?.sender_id)
                    .username.split("")[0]
                }
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-gray-200">
                {" "}
                {
                  fakeData.users.find(
                    (user) => user.user_id == email?.sender_id
                  ).username
                }
              </h1>
              <p>
                {
                  fakeData.users.find(
                    (user) => user.user_id == email?.sender_id
                  ).email
                }
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700 pl-14">
            {format(email.timestamp, "PPP")}
          </p>
        </div>

        <h1>{email?.subject}</h1>
        <p>{email.body}</p>
      </div>
    </div>
  );
};

export default page;
