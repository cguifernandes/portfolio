export type SkillsProps = {
  name: string;
  description: string;
};

export type ProjectsProps = {
  description: string;
  name: string;
  image: string;
  repo?: string;
  skills: string[];
  website?: string;
  additionalLink?: string;
};

export type CompaniesProps = {
  name: string;
  image: React.ReactNode;
};

export type CareerProps = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  stacks: string[];
  description?: string;
};
