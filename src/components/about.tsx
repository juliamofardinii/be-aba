import "../styles/globals.css";
import Image from "next/image";
export default function AbotUs() {
  return (
    <div className="w-full max-w-[500px] mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1500px] p-10">
      <Image
        src="/sectionFundo.jpg"
        alt="Menina brincando"
        width={1100}
        height={660}
        quality={100}
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>
  );
}
