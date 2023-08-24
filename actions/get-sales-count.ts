import prismadb from "@/lib/prismadb";

export const getSalesCount = async (storedId: string) => {
  const salesCount = await prismadb.order.count({
    where: {
      storeId: storedId,
      isPaid: true,
    },
  });

  return salesCount;
};
