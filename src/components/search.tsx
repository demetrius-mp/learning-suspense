"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [term, setTerm] = useState("");

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("term", term);
    } else {
      params.delete("term");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="join w-full">
      <input
        className="w-full input input-bordered join-item"
        placeholder={placeholder}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        defaultValue={searchParams.get("term") || ""}
      />
      <button className="btn join-item" onClick={() => handleSearch(term)}>
        Buscar
      </button>
    </div>
  );
}
