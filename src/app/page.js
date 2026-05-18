import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import WhyChoose from "@/components/WhyChoseUs";



export default function Home() {
  return (
    <div className="text-red-400">
      <Banner/>
      <Featured/>
      <WhyChoose/>
    </div>
  );
}
