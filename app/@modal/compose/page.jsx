import AttachmentIcon from "@/components/icons/attachment-icon";
import DeletedIcon from "@/components/icons/deleted-icon";
import Modal from "@/components/template/modal-view";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <>
      <Modal className="h-full gap-y-4 flex flex-col ">
        <header className="text-zinc-300  h-full  flex flex-col gap-4">
          <h1> Write New email</h1>
          <div className="text-zinc-200 flex gap-4 items-center border border-zinc-600 px-2 rounded">
            <Label>To:</Label>
            <Input
              className="bg-transparent outline-none border-none "
              type="email"
              placeholder="enter emails"
            />
          </div>
          <div className="text-zinc-200 flex gap-4 items-center border border-zinc-600 px-2 rounded">
            <Label>Subject:</Label>
            <Input
              className="bg-transparent outline-none border-none "
              type="email"
              placeholder="What is the email about"
            />
          </div>{" "}
          <div className="text-zinc-200 h-full flex gap-4 items-center border border-zinc-600 px-2 rounded">
            <Textarea
              className="outline-none h-full"
              placeholder=" start writing from here "
            />
          </div>{" "}
          <div className="flex flex-row items-center  w-full justify-between">
            <div className="flex items-center gap-3">
              {" "}
              <button
                type="button"
                className="w-20 bg-green-600 px-4 rounded-xl text-center p-2"
              >
                Send
              </button>
              <AttachmentIcon />{" "}
            </div>

            <DeletedIcon className={"justify-self-end"} />
          </div>
        </header>
      </Modal>
    </>
  );
};

export default page;
