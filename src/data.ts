// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getItemsCount(_term: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 3;
}

export async function getItems(term: string, page: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const items = Array.from({ length: 3 }, (_, i) => {
    const id = page * 3 + i;

    return {
      id,
      name: `${term} Item ${id}`,
      job: `${term} Job ${id}`,
      favoriteColor: `${term} Color ${id}`,
    };
  });

  return items;
}
