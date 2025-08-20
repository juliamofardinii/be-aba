import Image from "next/image";

export default function OurTeam() {
  const team = [
    { name: "Luana Mofardini", role: "Coordenadora X", image: "/luana.png" },
    { name: "Hernique Mofardini", role: "Psicóloga", image: "/henrique.png" },
    { name: "Giovana Rocha", role: "Psicóloga", image: "/giovana.png" },
  ];

  return (
    <div className="flex flex-col gap-5 pt-5 xl:pt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
          Nossa equipe
        </h1>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="flex flex-row justify-center gap-15 h-[220px]">
          <TeamMember {...team[0]} />
          <TeamMember {...team[1]} />
        </div>
        <div className="flex flex-row justify-center gap-15 h-[180px]">
          <TeamMember {...team[2]} />
        </div>
      </div>

      {/* Tablet */}
      <div className="flex-col hidden gap-10 md:flex xl:hidden">
        <div className="flex flex-row justify-center gap-15">
          <TeamMember {...team[0]} />
          <TeamMember {...team[1]} />
          <TeamMember {...team[2]} />
        </div>
      </div>

      {/* Desktop */}
      <div className="flex-row justify-center hidden xl:flex gap-15">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

function TeamMember({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="max-w-[200px]">
      <div className="flex items-center justify-center transition-transform duration-300 h-28 w-28 md:h-32 md:w-32 lg:h-45 lg:w-45 hover:scale-105">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain rounded-full"
        />
      </div>
      <p className="mt-4 font-semibold text-[#ffca64] text-sm md:text-base text-center">
        {name}
      </p>
      <p className="text-sm text-center md:text-base text-neutral-500">
        {role}
      </p>
    </div>
  );
}
