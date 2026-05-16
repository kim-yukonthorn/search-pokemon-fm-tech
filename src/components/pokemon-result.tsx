"use client";

import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/graphql/queries";
import type { GetPokemonData, GetPokemonVars } from "@/types/pokemon";
import { TypeBadge } from "@/components/type-badge";
import { EvolutionList } from "@/components/evolution-list";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

function LoadingSkeleton() {
  return (
    <Card className="max-w-2xl">
      <CardHeader className="flex flex-row items-center gap-4">
        <Skeleton className="w-24 h-24 rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}

export function PokemonResult({ name }: { name: string }) {
  const { data, loading, error } = useQuery<GetPokemonData, GetPokemonVars>(
    GET_POKEMON,
    {
      variables: { name },
      fetchPolicy: "cache-first",
    }
  );

  if (loading) return <LoadingSkeleton />;

  if (error) {
    return (
      <Card className="max-w-2xl border-destructive">
        <CardContent className="pt-6">
          <p className="text-destructive">Error loading Pokémon data.</p>
        </CardContent>
      </Card>
    );
  }

  if (!data?.pokemon) {
    return (
      <Card className="max-w-2xl">
        <CardContent className="pt-6 text-center space-y-2">
          <p className="text-2xl">🔍</p>
          <p className="font-semibold text-lg">
            &ldquo;{name}&rdquo; not found
          </p>
          <p className="text-sm text-muted-foreground">
            Check the spelling and try again.
          </p>
        </CardContent>
      </Card>
    );
  }

  const pokemon = data.pokemon;

  return (
    <Card className="max-w-2xl w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={96}
          height={96}
          className="object-contain"
          priority
        />
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">#{pokemon.number}</p>
          <CardTitle className="text-2xl">{pokemon.name}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {pokemon.classification}
          </p>
          <div className="flex gap-1 flex-wrap">
            {pokemon.types.map((t) => (
              <TypeBadge key={t} type={t} />
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-muted p-3 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Max HP
            </p>
            <p className="text-xl font-bold">{pokemon.maxHP}</p>
          </div>
          <div className="rounded-lg bg-muted p-3 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Max CP
            </p>
            <p className="text-xl font-bold">{pokemon.maxCP}</p>
          </div>
        </div>

        {/* Attacks */}
        <div className="space-y-3">
          <h3 className="font-semibold">Attacks</h3>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              Fast
            </p>
            <div className="space-y-1">
              {pokemon.attacks.fast.map((atk) => (
                <div
                  key={atk.name}
                  className="flex items-center justify-between text-sm py-1 px-2 rounded bg-muted"
                >
                  <span>{atk.name}</span>
                  <div className="flex items-center gap-2">
                    <TypeBadge type={atk.type} />
                    <span className="font-medium w-8 text-right">
                      {atk.damage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              Special
            </p>
            <div className="space-y-1">
              {pokemon.attacks.special.map((atk) => (
                <div
                  key={atk.name}
                  className="flex items-center justify-between text-sm py-1 px-2 rounded bg-muted"
                >
                  <span>{atk.name}</span>
                  <div className="flex items-center gap-2">
                    <TypeBadge type={atk.type} />
                    <span className="font-medium w-8 text-right">
                      {atk.damage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evolutions */}
        <div className="space-y-3">
          <h3 className="font-semibold">Evolutions</h3>
          <EvolutionList evolutions={pokemon.evolutions ?? []} />
        </div>
      </CardContent>
    </Card>
  );
}
