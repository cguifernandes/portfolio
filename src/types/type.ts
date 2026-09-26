export type SkillsProps = {
  name: string;
  description: string;
  experience: string;
};

export type ProjectsProps = {
  id: string;
  description: string;
  name: string;
  /** sem screenshot ainda: o card mostra o placeholder hachurado */
  image?: string;
  repo?: string;
  skills: string[];
  website?: string;
  additionalLink?: string;
  /** botoes extras com texto proprio (ex: lojas de app) */
  links?: { label: string; href: string; theme?: "primary" | "outline" }[];
};

export type CompaniesProps = {
  name: string;
  image: string;
};

export type CareerProps = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  stacks: string[];
  description?: string;
};
