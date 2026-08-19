import InitiateChat from "@/src/components/initiate-chat";
import Sidebar from "@/src/components/sidebar";

export default function Dashboard() {
  return (
    <div className="h-screen flex bg-[#0B0C0E] text-[#E7E5E1]">
      <Sidebar />
      <InitiateChat />
    </div>
  );
}