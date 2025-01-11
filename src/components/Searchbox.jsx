"use client";
import { MicIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function Searchbox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        type="text"
        className="w-full outline-none bg-transparent"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <X
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <MicIcon className="hidden sm:inline-flex text-lg text-blue-500 border-l-2 border-gray-300 mr-3" />
      <SearchIcon
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}
