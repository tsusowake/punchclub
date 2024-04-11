import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import LinkButton from "~/components/elements/button/LinkButton";
import { fetchPrograms } from "~/repositories/program";

export const loader = async () => {
  const programs = await fetchPrograms();
  return json({ programs });
};

export default function Programs() {
  const { programs } = useLoaderData<typeof loader>();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">startedAt</th>
            <th scope="col">endedAt</th>
            <th scope="col">createdAt</th>
            <th scope="col">updatedAt</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => {
            return (
              <tr key={program.id}>
                <th scope="row">{program.id}</th>
                <td>{program.name}</td>
                <td>{program.description}</td>
                <td>{program.startedAt}</td>
                <td>{program.endedAt}</td>
                <td>{program.createdAt}</td>
                <td>{program.updatedAt}</td>
                <td>
                  <LinkButton to={`/programs/${program.id}`} label="Edit" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
