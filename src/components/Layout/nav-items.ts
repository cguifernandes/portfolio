// Itens de navegacao, compartilhados entre o header e o menu mobile.
// A ordem precisa acompanhar a ordem das secoes no app.tsx, porque o
// scrollspy resolve a secao ativa percorrendo essa lista de cima para baixo.
export const NAV_ITEMS = [
  { id: "about", labelKey: "header.nav.about" },
  { id: "stacks", labelKey: "header.nav.stacks" },
  { id: "career", labelKey: "header.nav.career" },
  { id: "projects", labelKey: "header.nav.projects" },
  { id: "contact", labelKey: "header.nav.contact" },
] as const;

export const NAV_IDS = NAV_ITEMS.map((item) => item.id);
