import type { Plugin } from "../plugin";

export const uppercasePlugin: Plugin = {
  name: "uppercase",
  transform: (text: string) => text.toUpperCase(),
};

export const trimPlugin: Plugin = {
  name: "trim",
  transform: (text: string) => text.trim(),
};

export const exclamationPlugin: Plugin = {
  name: "exclamation",
  transform: (text: string) => `${text}!`,
};
