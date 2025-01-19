import { Plugin } from "./types";

export class TextProcessor {
  private plugins: Plugin[] = [];

  use(plugin: Plugin) {
    this.plugins.push(plugin);
    return this;
  }

  process(text: string): string {
    return this.plugins.reduce((result, plugin) => {
      return plugin.transform(result);
    }, text);
  }
}
