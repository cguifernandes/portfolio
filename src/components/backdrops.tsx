import clsx from "clsx";

// Camadas decorativas das secoes. Todas sao passadas na prop `backdrop` do
// Container, entao sangram na largura toda da faixa e ficam atras do conteudo.
// Sao duas primitivas so — grade e brilho — variando posicao e mascara, para
// a pagina parecer um sistema e nao um efeito diferente por secao.

const GRID_LINES =
  "linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px)";

const GRID_MASKS = {
  top: "radial-gradient(ellipse 80% 70% at 50% 20%, #000, transparent)",
  bottom: "radial-gradient(ellipse 80% 70% at 50% 80%, #000, transparent)",
  center: "radial-gradient(ellipse 75% 65% at 50% 50%, #000, transparent)",
};

type GridAlign = keyof typeof GRID_MASKS;

export const GridBackdrop = ({ align = "top" }: { align?: GridAlign }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage: GRID_LINES,
      backgroundSize: "96px 96px",
      maskImage: GRID_MASKS[align],
      WebkitMaskImage: GRID_MASKS[align],
    }}
  />
);

const DOTS_MASK =
  "radial-gradient(ellipse 70% 60% at 50% 50%, #000, transparent)";

export const DotsBackdrop = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        "radial-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px)",
      backgroundSize: "26px 26px",
      maskImage: DOTS_MASK,
      WebkitMaskImage: DOTS_MASK,
    }}
  />
);

// rgba do --primary-500 (#0c91ac) do sistema
const GLOW =
  "radial-gradient(ellipse at center, rgba(12, 145, 172, 0.13), transparent 66%)";

const GLOW_POSITIONS = {
  "top-left": "-top-40 -left-40",
  "top-right": "-top-40 -right-40",
  "bottom-left": "-bottom-40 -left-40",
  "bottom-right": "-bottom-40 -right-40",
};

type GlowPosition = keyof typeof GLOW_POSITIONS;

// o wrapper com overflow-hidden impede o brilho de vazar para a faixa
// vizinha, que tem cor de fundo diferente
export const GlowBackdrop = ({ position }: { position: GlowPosition }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div
      className={clsx(
        "absolute h-[620px] w-[780px] rounded-full",
        GLOW_POSITIONS[position],
      )}
      style={{ background: GLOW }}
    />
  </div>
);
