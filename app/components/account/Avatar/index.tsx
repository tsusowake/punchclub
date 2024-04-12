type Props = {
  name: string;
};
export default function Avatar({ name }: Props) {
  return (
    <span className="flex align-center justify-center text-white text-3xl  w-8 h-8 bg-lime-300 rounded-full">
      {name}
    </span>
  );
}
