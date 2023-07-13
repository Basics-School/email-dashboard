import EmailView from "@/components/template/email-view";
import { fakeData } from "@/lib/data";

const page = ({ params }) => {
  let id = params.email_id;
  const email = fakeData.emails.find((email) => email.email_id == id);
  return (
   <EmailView email={email}/>
  );
};

export default page;
