import { Link } from "@remix-run/react";

type Props = {
  to: string;
  label: string;
};
export default function LinkButton({ to, label }: Props) {
  return (
    <Link to={to} className="text-lg font-bold text-sky-700 hover:text-sky-400">
      {label}
    </Link>
  );
}
