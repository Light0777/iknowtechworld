import { Footer } from "@/components/Footer";
import Home from "./home/home";
import Navbar from "./navbar";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full mx-auto px-5 mb-10">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Page;
