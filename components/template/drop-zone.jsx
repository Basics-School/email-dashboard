"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import RemoveIcon from "../icons/remove-icon";
import DropIcon from "../icons/drop-icon";

const Dropzone = ({ className }) => {
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
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
    <div className="flex relative flex-row h-2/3 items-center justify-around w-full bg-slate-300 ">
      <section className="mt-10">
        
        <ul className="mt-">
          {files.map((file) => (
            <li key={file.name} className="relative h-32 rounded-md shadow-lg">
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="h-full w-full rounded-md object-contain"
              />
              <button
                type="button"
                className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center group hover:scale-105"
                onClick={() => removeFile(file.name)}
              >
                <RemoveIcon className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-green-400" />
              </button>
              <p className="mt-2 text-[12px] font-medium text-stone-500">
                {file.name}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <input {...getInputProps({ name: "file" })} />
        <div className="flex flex-col items-center justify-center gap-4">
          <DropIcon className="h-5 w-5 text-zinc-300 " />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
