export default function useCheckWhiteSpace(s: string) {
  return /\s/g.test(s);
}
