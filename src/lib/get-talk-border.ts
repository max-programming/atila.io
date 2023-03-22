import type { z } from "zod";
import type { talkTypesSchema } from "./db.server";

type TalkType = z.infer<typeof talkTypesSchema>;

/**
 * This keyword soup is inferring a tuple from `TalkType` Zod schema.
 * Without `as const` and `readonly` it becomes an Array of a Union.
 * With them, it's a tuple.
 */
export const TALK_TYPES = [
  "podcast",
  "conference",
  "meetup",
  "workshop",
] as const satisfies readonly TalkType[];

export function getTalkBorder(type: TalkType) {
  console.log(type);
  switch (type) {
    case "podcast":
      return "from-blue-500 via-cyan-300 to-teal-400";
    case "conference":
      return "from-indigo-500 via-purple-500 to-pink-500";
    case "meetup":
      return "from-pink-700 via-pink-600 to-red-500";
    case "workshop":
      return "from-yellow-500 via-amber-500 to-orange-500";
    default:
      return "from-zinc-500 via-slate-400 to-zinc-400";
  }
}
