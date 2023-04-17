export default function useCheckCapitalCase(s: string) {
  return /[A-Z]/.test(s);
}
