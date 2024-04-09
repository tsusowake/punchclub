import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { fetchPrograms } from "~/repositories/program";

export const loader = async () => {
  const programs = await fetchPrograms();
  return json({ programs });
};

export default function Programs() {
  const { programs } = useLoaderData<typeof loader>();
  return (
    <div>
      {programs.map((program) => {
        return (
          <div key={program.id}>
            <span>ProgramId: {program.id}</span>
            <span>Name: {program.name}</span>
          </div>
        );
      })}
    </div>
  );
}
