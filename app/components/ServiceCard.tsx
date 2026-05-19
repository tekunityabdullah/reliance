import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

export default function ServiceCard({ image, title, description }: Props) {
  return (
    <div className="bg-[#e3d2b7] rounded-3xl p-6 max-w-[420px]">
      
      {/* Image */}
      <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-[#2b2115]">
          {title}
        </h3>

        <p className="text-[#3b3b3b] mt-4 leading-relaxed text-[15px]">
          {description}
        </p>

        {/* Learn more */}
        <div className="flex items-center gap-3 mt-6 cursor-pointer group">
          <span className="text-[#2b2115] font-medium">Learn More</span>

          <div className="w-7 h-7 rounded-full bg-[#c9a84c] flex items-center justify-center text-2xl">
            »
          </div>
        </div>
      </div>
    </div>
  );
}