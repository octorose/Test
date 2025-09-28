import { Card } from "@/components";
import { SAMPLE_BOOKINGS } from "@/data/bookings";

export default function ModificationRequestsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Modification Requests</h1>
        <div className="space-y-4">
          {SAMPLE_BOOKINGS.map((booking) => (
            <Card 
              key={booking.id} 
              type="booking" 
              data={booking} 
              onManage={(id) => console.log("manage", id)} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
