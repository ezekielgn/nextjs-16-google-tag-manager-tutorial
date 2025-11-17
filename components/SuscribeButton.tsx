"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

const SuscribeButton = () => {
  const path = usePathname();

  return (
    <button
      onClick={() =>
        sendGTMEvent({
          event: "subscribe_newsletter",
          page_location: path,
        })
      }
      type="submit"
      className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-5 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
    >
      Subscribe
    </button>
  );
};

export default SuscribeButton;
