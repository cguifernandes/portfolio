export type SkillsProps = {
  name: string;
  description: string;
  experience: string;
};

export type ProjectsProps = {
  id: string;
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
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  stacks: string[];
  description?: string;
};
