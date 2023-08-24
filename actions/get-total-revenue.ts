import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storedId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId: storedId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      return orderSum + item.product.price.toNumber();
    }, 0);

    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
