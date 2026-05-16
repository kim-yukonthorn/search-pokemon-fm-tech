import { Badge } from "@/components/ui/badge";

const TYPE_COLORS: Record<string, string> = {
  Fire: "bg-orange-500 text-white",
  Water: "bg-blue-500 text-white",
  Grass: "bg-green-500 text-white",
  Electric: "bg-yellow-400 text-black",
  Psychic: "bg-pink-500 text-white",
  Ice: "bg-cyan-400 text-black",
  Dragon: "bg-indigo-600 text-white",
  Dark: "bg-gray-800 text-white",
  Fairy: "bg-pink-300 text-black",
  Fighting: "bg-red-700 text-white",
  Flying: "bg-sky-400 text-black",
  Poison: "bg-purple-500 text-white",
  Ground: "bg-amber-600 text-white",
  Rock: "bg-stone-500 text-white",
  Bug: "bg-lime-500 text-black",
  Ghost: "bg-violet-700 text-white",
  Steel: "bg-slate-400 text-black",
  Normal: "bg-gray-400 text-black",
};

export function TypeBadge({ type }: { type: string }) {
  const color = TYPE_COLORS[type] ?? "bg-gray-300 text-black";
  return <Badge className={`${color} border-0`}>{type}</Badge>;
}
