import { Suspense } from "react";
import { SearchInput } from "@/components/search-input";
import { PokemonResult } from "@/components/pokemon-result";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Pokémon Search</h1>
          <p className="text-muted-foreground">
            Search for any Pokémon to see its stats, attacks, and evolutions.
          </p>
        </div>

        <Suspense>
          <SearchInput />
        </Suspense>

        {name && (
          <Suspense
            fallback={
              <div className="space-y-3">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-48 w-full max-w-2xl" />
              </div>
            }
          >
            <PokemonResult name={name} />
          </Suspense>
        )}
      </div>
    </main>
  );
}
