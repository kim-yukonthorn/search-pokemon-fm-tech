"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const LAST_SEARCH_KEY = "pokemon_last_search";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentName = searchParams.get("name") ?? "";
  const [value, setValue] = useState(currentName);

  // Sync input when URL changes (e.g. evolution click)
  useEffect(() => {
    setValue(currentName);
  }, [currentName]);

  // On first load with no URL param, restore last search from localStorage
  useEffect(() => {
    if (!currentName) {
      const last = localStorage.getItem(LAST_SEARCH_KEY);
      if (last) {
        router.replace(`/?name=${encodeURIComponent(last)}`);
      }
    }
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    const name = trimmed.toLowerCase();
    localStorage.setItem(LAST_SEARCH_KEY, name);
    router.push(`/?name=${encodeURIComponent(name)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
