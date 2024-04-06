import {
  LinksFunction,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  Form,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";

import appStyles from "./app.css?url";
import { ContactRecord, createEmptyContact, getContacts } from "./data";
import React, { FunctionComponent, useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json({ contacts, q });
};

// Form method=POST, type=submit の Action ?
export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export default function App() {
  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [query, setQuery] = useState(q || "");
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const handleSearchFormChange = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    console.group("handleSearchFormChange...");
    console.groupEnd();

    submit(event.currentTarget);
  };

  useEffect(() => {
    setQuery(q || "");
  }, [q]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form
              id="search-form"
              onChange={handleSearchFormChange}
              role="search"
            >
              <input
                id="q"
                aria-label="Search contacts"
                className={searching ? "loading" : ""}
                value={query}
                placeholder="Search"
                type="search"
                name="q"
                onChange={handleQueryChange}
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>

          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Contact contact={contact} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>
        <div
          id="detail"
          className={
            navigation.state === "loading" && !searching ? "loading" : ""
          }
        >
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

type ContactProps = {
  contact: ContactRecord;
};
const Contact: FunctionComponent<ContactProps> = ({ contact }) => {
  const name =
    contact.first || contact.last
      ? `${contact.first} ${contact.last}`
      : "No Name";

  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
      }
      to={`contacts/${contact.id}`}
    >
      {name}
      {contact.favorite ? <span>★</span> : null}
    </NavLink>
  );
};
