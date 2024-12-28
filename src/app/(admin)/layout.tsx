import CustomSidebar from "@/components/custom-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="md:w-64 lg:w-64 bg-gray-100">
        <CustomSidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-6xl px-4">{children}</div>
      </div>
    </div>
  );
}
