import Avatar from "../Avatar";

export default function AccountButton() {
  return (
    <button className="flex items-center gap-3 w-full p-2 rounded-lg transition cursol-pointer">
      <span className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar name="T" />
      </span>
    </button>
  );
}
