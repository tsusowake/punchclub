import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { fetchProgram } from "~/repositories/program";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.programId, "Missing programId");
  const program = await fetchProgram(params.programId);
  if (!program) {
    throw new Response("Program not found", { status: 404 });
  }
  return json({ program });
};

export default function Program() {
  const { program } = useLoaderData<typeof loader>();
  return <div id="program">{program.id}</div>;
}
