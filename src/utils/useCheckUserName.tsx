export default function useCheckUsername(
  data: { name: string },
  userName: string
) {
  const existedUser = [];
  for (const key in data as any) {
    // @ts-ignore
    existedUser.push(data[key as any].name);
  }
  const isExisted = existedUser.includes(userName!);
  return isExisted;
}
