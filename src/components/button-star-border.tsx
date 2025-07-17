import StarBorder from "../components/react-bits/Animations/StarBorder/StarBorder";
import Button from "./button";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  className?: string;
  color?: string;
  speed?: React.CSSProperties["animationDuration"];
  delay?: number;
  children: React.ReactNode;
};

const ButtonStarBorder = ({ children, delay, className, ...props }: Props) => {
  if (delay) {
    return (
      <div className={className}>
        <StarBorder {...props} as="button">
          <Button className="w-96 relative z-1" theme="primary">
            {children}
          </Button>
        </StarBorder>
      </div>
    );
  }

  return (
    <StarBorder {...props} as="button" className={className}>
      <Button className="w-96 relative z-1" theme="primary">
        {children}
      </Button>
    </StarBorder>
  );
};

export default ButtonStarBorder;
