import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // check if the user has already created a store
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  // if yes, redirect to the user to the Dashboard
  if (store) {
    redirect(`/${store.id}`);
  }

  // otherwise
  return <>{children}</>;
}
