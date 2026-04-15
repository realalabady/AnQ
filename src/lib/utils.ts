export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

/**
 * Splits a string at every occurrence of "Cypher" and returns
 * React elements with the "C" in green and "ypher" in white.
 */
import { createElement, Fragment, type ReactNode } from "react";

export function styleCypher(text: string): ReactNode {
  const parts = text.split(/(Cypher)/g);
  if (parts.length === 1) return text;
  return createElement(
    Fragment,
    null,
    ...parts.map((part, i) =>
      part === "Cypher"
        ? createElement(
            Fragment,
            { key: i },
            createElement("span", { className: "text-[#1d9b47]" }, "C"),
            createElement("span", { className: "text-white" }, "ypher"),
          )
        : part,
    ),
  );
}
