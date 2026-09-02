import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export type CodeLine =
  | { key: string; kind: "string"; value: string }
  | { key: string; kind: "array"; value: string[] }
  | { key: string; kind: "number"; value: number }
  | { key: string; kind: "boolean"; value: boolean }
  | { key: string; kind: "link"; value: string; href: string };

type Props = {
  fileName: string;
  lines: CodeLine[];
  /** nome da const declarada no topo do bloco */
  variableName?: string;
  /** rotulo da linguagem na barra de status */
  language?: string;
  className?: string;
};

// Cores das traffic lights do macOS. Sao citacao de UI, nao paleta do site:
// para versao monocromatica, troque as tres por "#404040" (neutral-700).
const TRAFFIC_LIGHTS = ["#ff5f57", "#febc2e", "#28c840"];

// Realce de sintaxe: valores do tema padrao do VS Code, o Dark+ (default
// dark). Fica tudo aqui para trocar de tema num lugar so.
const SYNTAX = {
  keyword: "#569cd6", // const, true, false
  variable: "#9cdcfe", // identificador declarado
  property: "#9cdcfe", // chaves do objeto
  string: "#ce9178",
  number: "#b5cea8",
  boolean: "#569cd6",
  punctuation: "#d4d4d4", // editor.foreground
};

// Cores de chrome do editor, tambem do Dark+
const LINE_NUMBER = "#858585"; // editorLineNumber.foreground
const CARET = "#aeafad"; // editorCursor.foreground
const LINK = "#3794ff"; // textLink.foreground

const Value = ({ line }: { line: CodeLine }) => {
  if (line.kind === "number") {
    return <span style={{ color: SYNTAX.number }}>{line.value}</span>;
  }

  if (line.kind === "boolean") {
    return <span style={{ color: SYNTAX.boolean }}>{String(line.value)}</span>;
  }

  // string clicavel: o literal inteiro, aspas incluidas, vira o link
  if (line.kind === "link") {
    return (
      <a
        href={line.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: LINK }}
        className="underline-offset-2 hover:underline"
      >
        '{line.value}'
      </a>
    );
  }

  if (line.kind === "array") {
    return (
      <>
        <span style={{ color: SYNTAX.punctuation }}>[</span>
        {line.value.map((item, index) => (
          <Fragment key={item}>
            <span style={{ color: SYNTAX.string }}>'{item}'</span>
            {index < line.value.length - 1 && (
              <span style={{ color: SYNTAX.punctuation }}>, </span>
            )}
          </Fragment>
        ))}
        <span style={{ color: SYNTAX.punctuation }}>]</span>
      </>
    );
  }

  return <span style={{ color: SYNTAX.string }}>'{line.value}'</span>;
};

const CodeWindow = ({
  fileName,
  lines,
  variableName = "dev",
  language = "TypeScript",
  className,
}: Props) => {
  // +2 pela linha de abertura e a de fechamento do objeto
  const totalLines = lines.length + 2;

  return (
    <div
      className={twMerge(
        "w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/50",
        className,
      )}
    >
      <div className="relative flex items-center border-neutral-800 border-b bg-neutral-900 px-4 py-3">
        <div className="flex items-center gap-x-2">
          {TRAFFIC_LIGHTS.map((color) => (
            <span
              key={color}
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span className="pointer-events-none absolute inset-x-0 text-center font-mono text-neutral-500 text-xs">
          {fileName}
        </span>
      </div>

      <div className="flex overflow-x-auto font-mono text-xs leading-[1.9]">
        <div
          aria-hidden="true"
          className="select-none border-neutral-800/60 border-r px-3 py-4 text-right"
          style={{ color: LINE_NUMBER }}
        >
          {Array.from({ length: totalLines }, (_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: numeracao fixa
            <div key={index}>{index + 1}</div>
          ))}
        </div>

        <div className="py-4 pr-6 pl-4">
          <div className="whitespace-pre">
            <span style={{ color: SYNTAX.keyword }}>const</span>{" "}
            <span style={{ color: SYNTAX.variable }}>{variableName}</span>{" "}
            <span style={{ color: SYNTAX.punctuation }}>= {"{"}</span>
          </div>

          {lines.map((line) => (
            <div key={line.key} className="whitespace-pre">
              {"  "}
              <span style={{ color: SYNTAX.property }}>{line.key}</span>
              <span style={{ color: SYNTAX.punctuation }}>: </span>
              <Value line={line} />
              <span style={{ color: SYNTAX.punctuation }}>,</span>
            </div>
          ))}

          <div className="whitespace-pre">
            <span style={{ color: SYNTAX.punctuation }}>{"}"}</span>
            <span
              className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-pulse"
              style={{ backgroundColor: CARET }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-x-4 border-neutral-800 border-t bg-neutral-900 px-4 py-2 font-mono text-[10px] text-neutral-600">
        <span>{language}</span>
        <span>Ln {totalLines}, Col 2</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};

export default CodeWindow;
