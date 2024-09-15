export function classnames(...args: unknown[]): string {
  return args.filter(Boolean).join(" ");
}
