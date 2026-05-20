import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoseUs";



export default function Home() {
  return (
    <div>
      <Banner/>
      <Featured/>
      <WhyChoose/>
      <Testimonials/>
    </div>
  );
}
