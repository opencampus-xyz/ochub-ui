import { ArrowLeft } from "./icons/ArrowLeft";

interface BackButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
}

export function BackButton({
  label = "Back",
  href,
  onClick,
}: BackButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    } else {
      window.history.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 text-white"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
