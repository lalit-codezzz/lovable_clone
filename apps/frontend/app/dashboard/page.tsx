import InitiateChat from "@/src/components/initiate-chat";
import Sidebar from "@/src/components/sidebar";

export default function Dashboard () {
    return <div className="border-4 border-red-500 h-full flex">
        <Sidebar />
        <InitiateChat />
    </div>
}