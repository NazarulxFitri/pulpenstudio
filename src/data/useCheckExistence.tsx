export default function useCheckExistence(
  data: { name: string; layout: string }[],
  itemName?: string
) {
  const existingName = [];
  for (const key in data as any) {
    existingName.push(data[key as any].name);
  }

  const isExisted = existingName.includes(itemName!);

  return isExisted;
}
