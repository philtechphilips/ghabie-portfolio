import Appointment from "@/components/Appointment";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import WorkWIthUs from "@/components/WorkWIthUs";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
       <Hero />
       <Testimonial />
       <WorkWIthUs />
       <Appointment />
      </main>
      <footer className="row-start-3 flex gap-6 py-2 flex-wrap items-center justify-center bg-black">
          <p className="text-white text-sm ">&#169; {new Date().getFullYear()} all right reserved.</p>
      </footer>

    </div>
  );
}
