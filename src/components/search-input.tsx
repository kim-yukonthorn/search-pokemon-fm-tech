"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

const LAST_SEARCH_KEY = "pokemon_last_search";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentName = searchParams.get("name") ?? "";
  const inputRef = useRef<HTMLInputElement>(null);
  const didRestore = useRef(false);

  useEffect(() => {
    if (currentName) {
      localStorage.setItem(LAST_SEARCH_KEY, currentName);
    }
  }, [currentName]);

  useEffect(() => {
    if (didRestore.current) return;
    didRestore.current = true;
    if (!currentName) {
      const last = localStorage.getItem(LAST_SEARCH_KEY);
      if (last) {
        router.replace(`/?name=${encodeURIComponent(last)}`);
      }
    }
  }, [currentName, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = inputRef.current?.value.trim() ?? "";
    if (!trimmed) return;
    router.push(`/?name=${encodeURIComponent(trimmed.toLowerCase())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        key={currentName}
        ref={inputRef}
        defaultValue={currentName}
        placeholder="Search Pokémon (e.g. pikachu)"
        className="max-w-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Search
      </button>
    </form>
  );
}
