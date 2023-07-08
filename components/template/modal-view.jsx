"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/40"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute bottom-10 right-20 flex flex-col  border border-zinc-700 bg-zinc-900 h-1/2 rounded-2xl w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  );
}
