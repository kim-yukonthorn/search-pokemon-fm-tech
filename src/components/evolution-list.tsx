import Link from "next/link";
import { TypeBadge } from "@/components/type-badge";
import type { PokemonEvolution } from "@/types/pokemon";
import Image from "next/image";

export function EvolutionList({
  evolutions,
}: {
  evolutions: PokemonEvolution[];
}) {
  if (evolutions.length === 0) {
    return <p className="text-sm text-muted-foreground">No evolutions</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {evolutions.map((evo) => (
        <Link
          key={evo.id}
          href={`/?name=${encodeURIComponent(evo.name.toLowerCase())}`}
          className="flex flex-col items-center gap-1 p-3 rounded-lg border hover:bg-accent hover:border-primary transition-colors"
        >
          <Image
            src={evo.image}
            alt={evo.name}
            width={64}
            height={64}
            className="object-contain"
          />
          <span className="text-sm font-medium">{evo.name}</span>
          <div className="flex gap-1 flex-wrap justify-center">
            {evo.types.map((t) => (
              <TypeBadge key={t} type={t} />
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
