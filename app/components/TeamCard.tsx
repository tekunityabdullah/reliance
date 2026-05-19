import Link from "next/link";
type Props = {
  name: string;
  image: string;
  link: string;
};

export default function TeamCard({ name, image, link }: Props) {
  return (
    <div className="relative w-[320px] h-[375px] rounded-2xl overflow-hidden group shadow-lg">
      
      {/* image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* top right arrow */}
      <Link href={link} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#e7d6bd] flex items-center justify-center text-4xl font-bold">
          »
      </Link>

      {/* bottom name bar */}
    <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[90%] 
                text-white text-[20px] font-semibold capitalize text-center
                backdrop-blur-[28px] 
                border border-[#E7D4B9] rounded-[10px] 
                py-[10px] bg-white/10">
  <p>{name}</p>
</div>
    </div>
  );
}