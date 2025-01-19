export interface Plugin {
  name: string;
  transform: (text: string) => string;
}
