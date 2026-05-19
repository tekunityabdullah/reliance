import Image from "next/image";

type PropertyCardProps = {
  image: string;
  title: string;
  type: string;
  location: string;
};

export default function PropertyCard({
  image,
  title,
  type,
  location,
}: PropertyCardProps) {
  return (
    <div
      className="
        bg-[#EFDFC9]
        rounded-[28px]
        p-[15px]
        h-full
        flex flex-col
      "
    >
      {/* Image */}
      <div className="relative w-full h-[500px] rounded-[22px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-col gap-3">
        
        {/* title + type */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-[15px] font-semibold text-[#1E1E1E] uppercase leading-snug tracking-wide">
            {title}
          </h3>

          <span className="text-[14px] text-[#2E2E2E] whitespace-nowrap">
            {type}
          </span>
        </div>

        {/* location */}
        <p className="text-[14px] text-[#2E2E2E]">
          {location}
        </p>

      </div>
    </div>
  );
}