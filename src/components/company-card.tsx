import { CompaniesProps } from "../types/type";
import { Tooltip } from "./tooltip";

const CompanyCard = ({ name, image }: CompaniesProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Tooltip content={name}>
        <div className="flex items-center size-20 justify-center">{image}</div>
      </Tooltip>
    </div>
  );
};

export default CompanyCard;
