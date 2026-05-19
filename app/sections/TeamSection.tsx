"use client";
import TeamCard from "../components/TeamCard";

type Member = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const team: Member[] = [
  { id: 1, name: "Brian Newman", image: "/team-1.webp", link: "/our-team/brian-newman"},
  { id: 2, name: "Danny Newman", image: "/team-2.webp", link: "/our-team/danny-newman"},
  { id: 3, name: "Josh Erdman", image: "/team-3.webp", link: "/our-team/josh-erdman"},
  { id: 4, name: "Amanda Schmieder", image: "/team-4.webp", link: "/our-team/amanda-schmieder"},
  { id: 5, name: "Chuck Newman", image: "/team-5.webp", link: "/our-team/chuck-newman"},
];

export default function TeamSection() {
  return (
    <section className="bg-[#E7D4B9] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-[#b8873a] tracking-[0.25em] text-sm mb-3">
          OUR TEAM
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2b2115] mb-16">
          OUR TEAM
        </h2>

     
        <div
          className="
            grid gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:flex xl:justify-between xl:items-start
          "
        >
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
}