"use client";
import AttachmentIcon from "@/components/icons/attachment-icon";
import DeletedIcon from "@/components/icons/deleted-icon";
import DropIcon from "@/components/icons/drop-icon";
import RemoveIcon from "@/components/icons/remove-icon";
import Dropzone from "@/components/template/drop-zone";
import Modal from "@/components/template/modal-view";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const ComposePage = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        // If allowing multiple files
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    // accept: {
    //   "image/*": [],
    //   ""
    // },
    // maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <>
      <Modal className="border border-zinc-700 bg-zinc-900 rounded-xl w-11/12 mx-auto">
        <header className="text-zinc-300  h-full w-full  flex flex-col gap-y-4">
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
          <div
            {...getRootProps({})}
            className="text-zinc-200 relative h-full overflow-y-scroll scrollbar-w-1 scrollbar scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full  flex gap-4 items-center border flex-col max-h-60 border-zinc-600 px-2 rounded"
          >
            {isDragActive && (
              <div className="h-full absolute flex items-center justify-center flex-col w-full bg-gray-800">
                <DropIcon className="h-5 w-5 text-green-600 " />
                <p>Release the file here </p>
              </div>
            )}
            <Textarea
              className="outline-none h-full"
              placeholder="start writing from here or drop file as attachments"
            />
            {/* <Dropzone /> */}

            <div className="flex flex-row h-2/3  w-full ">
              <section className="">
                <ul className=" flex  flex-row gap-2 flex-wrap ">
                  {files.map((file) => (
                    <li
                      key={file.name}
                      className="relative h-32 rounded-md shadow-lg"
                    >
                      <Image
                        src={file.preview}
                        alt={file.name}
                        width={50}
                        height={50}
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview);
                        }}
                        className="h-full w-full z-10 relative rounded-md object-contain"
                      />
                      <button
                        type="button"
                        className=" flex   h-7 w-7 items-center justify-center group hover:scale-105 absolute z-20 -right-3 -top-3"
                        onClick={() => removeFile(file.name)}
                      >
                        <RemoveIcon className="h-5 w-5  text-zinc-300 transition-colors  hover:text-red-400" />
                      </button>
                      <p className="mt-2 text-[12px] font-medium text-stone-500">
                        {file.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
              <div></div>
            </div>
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
              <button type="button" onClick={open}>
                <AttachmentIcon className={"cursor-pointer"} />
              </button>{" "}
            </div>

            <DeletedIcon className={"justify-self-end"} />
          </div>
        </header>
      </Modal>
    </>
  );
};

export default ComposePage;
