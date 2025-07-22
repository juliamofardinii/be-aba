import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="flex flex-col gap-10 p-10 pt-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">
          Nossa equipe
        </h1>
      </div>

      {/* Linhas para mobile: aparecem até o breakpoint lg */}

      <div className="flex flex-col gap-3 md:hidden pt-10 ">
        <div className="flex flex-row  justify-center gap-15 h-[220px]">
          <TeamMember name="Henrique Mofardini" role="Sócio Administrador" />
          <TeamMember name="Luana Mofardini" role="Coordenadora X" />
        </div>
        <div className="flex flex-row  justify-center gap-15 h-[180px]">
          <TeamMember name="Joana da Silva" role="Psicologa" />
          <TeamMember name="Sandra Maria" role="Psicologa" />
        </div>
        <div className="flex flex-row  justify-center gap-15 h-[180px]">
          <TeamMember name="Maria Pereira" role="Psicologa" />
        </div>
      </div>

      {/* Linhas para tablet: aparecem até o breakpoint lg */}
      <div className="md:flex flex-col gap-10 lg:hidden hidden">
        <div className="flex flex-row pt-10 justify-center gap-15">
          {/* Membros 1, 2, 3 */}
          <TeamMember name="Henrique Mofardini" role="Sócio Administrador" />
          <TeamMember name="Luana Mofardini" role="Coordenadora X" />
          <TeamMember name="Joana da Silva" role="Psicologa" />
        </div>
        <div className="flex flex-row justify-center pt-25 gap-15">
          {/* Membros 4, 5 */}
          <TeamMember name="Maria Pereira" role="Psicologa" />
          <TeamMember name="Sandra Maria" role="Psicologa" />
        </div>
      </div>

      {/* Linha única para desktop: aparece só a partir do lg */}
      <div className="hidden lg:flex flex-row justify-center gap-15 pt-10 ">
        <TeamMember name="Henrique Mofardini" role="Sócio Administrador" />
        <TeamMember name="Luana Mofardini" role="Coordenadora X" />
        <TeamMember name="Joana da Silva" role="Psicologa" />
        <TeamMember name="Maria Pereira" role="Psicologa" />
        <TeamMember name="Sandra Maria" role="Psicologa" />
      </div>
    </div>
  );
}

function TeamMember({ name, role }: { name: string; role: string }) {
  return (
    <div className="h-[100px]">
      <div className="flex items-center justify-center transition-transform duration-300 bg-white rounded-full h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 hover:scale-105">
        <Image
          src="/homem.png"
          alt="membro"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <p className="mt-4 font-semibold text-[#ffca64] text-sm md:text-base text-center">
        {name}
      </p>
      <p className="text-sm md:text-base text-neutral-500 text-center">
        {role}
      </p>
    </div>
  );
}
