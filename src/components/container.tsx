import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  id: string;
  children: ReactNode;
  /** classes do conteudo interno (o bloco de max-w-7xl) */
  className?: string;
  /** classes da <section> externa, que ocupa a largura toda da faixa */
  sectionClassName?: string;
  /** camada decorativa atras do conteudo, sangrando na largura toda da faixa */
  backdrop?: ReactNode;
};

// Padrao de largura das secoes: a <section> sangra de ponta a ponta para a
// faixa de cor pegar a tela inteira, e o conteudo fica travado em max-w-7xl
// centralizado. Os dois className passam por twMerge, entao sobrescrever
// py/gap/px numa secao especifica funciona sem duplicar classe.
const Container = ({
  id,
  children,
  className,
  sectionClassName,
  backdrop,
}: Props) => (
  <section
    id={id}
    className={twMerge(
      "relative py-20 scroll-mt-8 px-10 flex justify-center w-full",
      sectionClassName,
    )}
  >
    {backdrop}
    <div
      className={twMerge(
        "relative flex flex-col gap-y-10 max-w-7xl w-full",
        className,
      )}
    >
      {children}
    </div>
  </section>
);

export default Container;
