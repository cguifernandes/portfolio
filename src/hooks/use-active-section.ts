import { useEffect, useState } from "react";

// altura do header fixo (h-14 + top-4) mais uma folga, para a secao virar
// ativa quando o topo dela cruza a linha logo abaixo da barra
const HEADER_OFFSET = 96;

/**
 * Devolve o id da secao que esta sob o header no momento, ou null quando o
 * scroll ainda esta acima da primeira delas (o hero, que nao tem item no menu).
 */
export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState<string | null>(null);

  // ids vem de um array constante, mas serializar evita reassinar o efeito
  // caso o chamador monte a lista em tempo de render
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const resolve = () => {
      // no fim da pagina a ultima secao pode nunca cruzar a linha, entao
      // ela e ativada assim que o scroll chega ao fundo
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = section.id;
        }
      }

      setActive(current);
    };

    resolve();
    window.addEventListener("scroll", resolve, { passive: true });
    window.addEventListener("resize", resolve);

    return () => {
      window.removeEventListener("scroll", resolve);
      window.removeEventListener("resize", resolve);
    };
  }, [key]);

  return active;
};
