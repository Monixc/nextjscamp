import { Inter } from "next/font/google";
import Image from "next/image";
import dog from "/public/개.jpg";
const inter = Inter({ subsets: ["latin"] });
export default function Page() {
  return (
    <div>
      <h1 className={inter.className}>Page</h1>
      <Image src={dog} alt={"dog"} />
    </div>
  );
}
