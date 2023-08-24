import prismadb from "@/lib/prismadb";

export const getStockCount = async (storedId: string) => {
  const stockCount = await prismadb.product.count({
    where: {
      storeId: storedId,
      isArchived: false,
    },
  });

  return stockCount;
};
