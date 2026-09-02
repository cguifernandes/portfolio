import { useI18n } from "../../i18n/useI18n";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils/utils";

const Footer = () => {
  const { t, language } = useI18n();
  const resumeHref = language === "pt" ? "/curriculo.pdf" : "/resume.pdf";

  const links = [
    { label: "GitHub", href: GITHUB_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
    { label: t("footer.resume"), href: resumeHref },
  ];

  // mesma estrutura do Container: a faixa sangra de ponta a ponta e o
  // conteudo trava em max-w-7xl, para alinhar com as secoes acima
  return (
    <footer className="flex w-full justify-center border-neutral-800 border-t bg-neutral-950 px-10 py-10">
      <div className="flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 text-neutral-500 text-xs uppercase tracking-[0.06em]">
        <span>© {new Date().getFullYear()} Guilherme Fernandes</span>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 ease-in-out hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
