import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navabar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Providers from "./Provider";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});




export const metadata = {
  title:{
    default: "Tutor Booking System",
    template:" %s | Tutor Booking System ",
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html
    suppressHydrationWarning
      lang="en"
      className={`${poppins.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar/>
        
          {children}
        
        <Footer/>
        <Toaster/>
        </body>
    </html>
  );
}
