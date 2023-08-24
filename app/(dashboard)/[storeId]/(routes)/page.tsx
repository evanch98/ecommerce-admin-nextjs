import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = ({ params }) => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
