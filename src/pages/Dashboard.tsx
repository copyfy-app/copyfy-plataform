
import { Suspense } from 'react';
import Dashboard from '@/components/Dashboard';
import { Skeleton } from "@/components/ui/skeleton";

const DashboardPage = () => {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Dashboard />
    </Suspense>
  );
};

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4 lg:p-8">
      <div className="container mx-auto">
        <Skeleton className="h-16 w-full mb-8 rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Skeleton className="h-[500px] w-full rounded-lg" />
          <Skeleton className="h-[500px] w-full lg:col-span-2 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
