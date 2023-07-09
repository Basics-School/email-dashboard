import EmailList from "@/components/template/email-list";

export default function Home() {
  return (
    <div className="flex flex-row h-full relative w-full lg:hidden">
      {" "}
      <EmailList />
    </div>
  );
}
