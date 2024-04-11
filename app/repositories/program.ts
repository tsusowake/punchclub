import { matchSorter } from "match-sorter";
// @ts-expect-error - no types, but it's a tiny function
import sortBy from "sort-by";
import invariant from "tiny-invariant";

import { now } from "~/utils/time";
import { uuid } from "~/utils/uuid";

export type ProgramRecord = {
  id: string;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  createdAt: string;
  updatedAt: string;
};

type ProgramMutation = Omit<ProgramRecord, "createdAt" | "updatedAt">;

const fakePrograms = {
  records: {} as Record<string, ProgramRecord>,

  async getAll(): Promise<ProgramRecord[]> {
    return Object.keys(fakePrograms.records)
      .map((key) => fakePrograms.records[key])
      .sort(sortBy("-createdAt", "name"));
  },

  async get(id: string): Promise<ProgramRecord | null> {
    return fakePrograms.records[id] || null;
  },

  async create(values: ProgramMutation): Promise<ProgramRecord> {
    const id = uuid();
    const createdAt = now().toISOString();
    const updatedAt = createdAt;
    const newProgram = { createdAt, updatedAt, ...values };
    fakePrograms.records[id] = newProgram;
    return newProgram;
  },

  _create(values: ProgramMutation): void {
    const createdAt = now().toISOString();
    const updatedAt = createdAt;
    const newProgram = { createdAt, updatedAt, ...values };
    fakePrograms.records[values.id] = newProgram;
    return;
  },

  async update(id: string, values: ProgramMutation): Promise<ProgramRecord> {
    const program = await fakePrograms.get(id);
    invariant(program, `Program not found, id: ${id}`);
    const updatedProgram = { ...program, ...values };
    fakePrograms.records[id] = updatedProgram;
    return updatedProgram;
  },

  async delete(id: string): Promise<void> {
    const program = await fakePrograms.get(id);
    if (!program) {
      return;
    }
    delete fakePrograms.records[id];
  },
};

export async function fetchPrograms(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let programs = await fakePrograms.getAll();
  if (query) {
    programs = matchSorter(programs, query, {
      keys: ["name"],
    });
  }
  return programs.sort(sortBy("-createdAt"));
}

export async function createProgram(params: ProgramMutation) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const program = await fakePrograms.create(params);
  return program;
}

export async function fetchProgram(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return fakePrograms.get(id);
}

export async function deleteProgram(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  fakePrograms.delete(id);
}

[
  {
    id: "0cca5ec6d14f422fb8b85932930c7dbb",
    name: "Unbranded Wooden Ball",
    description: "The Football Is Good For Training And Recreational Purposes",
    startedAt: "2018-08-31T17:13:18.730Z",
    endedAt: "2025-04-23T00:45:19.206Z",
    createdAt: "2019-12-22T20:53:02.748Z",
    updatedAt: "2018-07-07T11:45:57.883Z",
  },
  {
    id: "45cc6e3667d64e56ad0ab60e52591e75",
    name: "Oriental Soft Hat",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    startedAt: "2020-12-08T19:11:38.753Z",
    endedAt: "2029-07-12T14:37:48.838Z",
    createdAt: "2020-08-03T00:06:35.415Z",
    updatedAt: "2022-12-14T04:41:20.862Z",
  },
  {
    id: "c32f85f89b6148be905bc42f7321d87c",
    name: "Rustic Steel Sausages",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    startedAt: "2021-06-19T21:52:30.916Z",
    endedAt: "2027-01-15T20:45:49.263Z",
    createdAt: "2021-03-20T16:14:43.918Z",
    updatedAt: "2019-11-11T07:16:31.867Z",
  },
  {
    id: "07080da22aa34745b00b51b370827275",
    name: "Generic Frozen Towels",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    startedAt: "2021-04-01T01:05:35.995Z",
    endedAt: "2025-06-14T05:40:08.311Z",
    createdAt: "2021-02-26T01:56:28.787Z",
    updatedAt: "2023-06-11T18:24:17.128Z",
  },
  {
    id: "6df20e19a28c456a8c6f8b18b3b7dde0",
    name: "Handcrafted Fresh Gloves",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    startedAt: "2020-05-09T22:52:01.934Z",
    endedAt: "2029-03-02T13:05:27.635Z",
    createdAt: "2018-08-17T12:50:58.598Z",
    updatedAt: "2020-10-24T03:55:21.475Z",
  },
  {
    id: "fa62e8d4e9e1467099f503a6840fc742",
    name: "Luxurious Cotton Cheese",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    startedAt: "2018-02-19T22:58:56.619Z",
    endedAt: "2025-08-06T23:59:42.387Z",
    createdAt: "2018-03-03T07:38:59.632Z",
    updatedAt: "2020-06-15T08:12:33.082Z",
  },
  {
    id: "d79b288f0eef453996e4a00cc4c8bb8a",
    name: "Oriental Granite Towels",
    description: "The Football Is Good For Training And Recreational Purposes",
    startedAt: "2018-08-25T23:31:52.871Z",
    endedAt: "2027-03-05T11:28:58.516Z",
    createdAt: "2022-12-14T16:20:15.035Z",
    updatedAt: "2022-04-03T12:49:25.171Z",
  },
  {
    id: "da9f23847ce94e809691636d6bf147f0",
    name: "Licensed Soft Gloves",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    startedAt: "2022-03-21T02:37:40.380Z",
    endedAt: "2026-12-08T22:42:38.568Z",
    createdAt: "2023-04-28T06:57:40.896Z",
    updatedAt: "2019-11-13T15:51:25.314Z",
  },
  {
    id: "b5775648156243ba81e019c7ce99d875",
    name: "Handcrafted Concrete Bike",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    startedAt: "2022-02-06T13:11:19.067Z",
    endedAt: "2025-12-25T21:34:22.863Z",
    createdAt: "2019-06-30T08:07:51.262Z",
    updatedAt: "2021-09-11T00:34:19.437Z",
  },
  {
    id: "8e5e5018e91845f9ba83028ffb8c1c9b",
    name: "Licensed Soft Tuna",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    startedAt: "2019-08-19T09:46:51.006Z",
    endedAt: "2028-04-08T16:03:19.083Z",
    createdAt: "2024-01-19T15:08:54.313Z",
    updatedAt: "2024-01-19T21:24:52.755Z",
  },
  {
    id: "3011955d0c80477f8a47c590d509ad27",
    name: "Practical Metal Chips",
    description: "The Football Is Good For Training And Recreational Purposes",
    startedAt: "2021-03-18T04:25:15.563Z",
    endedAt: "2028-08-06T06:33:13.682Z",
    createdAt: "2019-02-10T05:59:48.072Z",
    updatedAt: "2018-09-19T07:25:08.639Z",
  },
  {
    id: "538cc8cd893a449b88056fb86dfccec4",
    name: "Elegant Plastic Pizza",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    startedAt: "2019-11-05T17:56:59.496Z",
    endedAt: "2025-08-22T06:04:17.588Z",
    createdAt: "2022-05-24T18:28:14.032Z",
    updatedAt: "2018-02-17T05:14:54.090Z",
  },
  {
    id: "fcb3ce7d0e6b41fdbd889eb5ffffa465",
    name: "Handmade Soft Soap",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    startedAt: "2023-08-28T19:34:24.781Z",
    endedAt: "2028-08-01T06:12:40.433Z",
    createdAt: "2023-08-04T02:46:52.435Z",
    updatedAt: "2022-06-25T23:14:53.420Z",
  },
  {
    id: "313b7ef1ffb34d578c20f05a9fe3d4cf",
    name: "Oriental Fresh Pizza",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    startedAt: "2023-09-14T15:50:43.404Z",
    endedAt: "2028-12-10T08:05:31.082Z",
    createdAt: "2022-11-07T10:40:48.503Z",
    updatedAt: "2023-09-16T21:06:53.362Z",
  },
  {
    id: "91727c1809bb4f69b5eca7b0e203c467",
    name: "Unbranded Wooden Cheese",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    startedAt: "2020-05-03T16:56:39.406Z",
    endedAt: "2027-02-25T16:14:39.654Z",
    createdAt: "2018-01-15T06:02:53.145Z",
    updatedAt: "2023-02-07T17:34:45.370Z",
  },
  {
    id: "f0b5c5bd3ddc40af950d233e0e2515ab",
    name: "Incredible Plastic Gloves",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    startedAt: "2019-09-03T06:51:39.392Z",
    endedAt: "2029-10-31T01:39:26.523Z",
    createdAt: "2022-03-08T17:04:35.375Z",
    updatedAt: "2019-01-13T06:25:44.066Z",
  },
  {
    id: "60b95587d7034ff99808e39675020036",
    name: "Intelligent Soft Salad",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    startedAt: "2020-11-05T22:47:00.573Z",
    endedAt: "2025-11-05T05:09:56.521Z",
    createdAt: "2019-12-06T22:49:39.642Z",
    updatedAt: "2018-09-24T15:31:20.067Z",
  },
  {
    id: "87c77cb52e5d45dba1bd39135c8158d9",
    name: "Gorgeous Steel Pizza",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    startedAt: "2022-10-31T08:28:14.291Z",
    endedAt: "2029-01-04T14:24:04.193Z",
    createdAt: "2019-01-13T23:05:26.416Z",
    updatedAt: "2020-11-18T19:04:53.830Z",
  },
  {
    id: "23ea1ccb542f408ba0f2f8f57bb5d599",
    name: "Fantastic Granite Cheese",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    startedAt: "2020-05-08T17:39:33.903Z",
    endedAt: "2028-08-22T04:45:51.787Z",
    createdAt: "2023-10-25T01:44:41.633Z",
    updatedAt: "2020-03-10T03:10:13.813Z",
  },
  {
    id: "177ae88b525a416e9d6c42a786862f8f",
    name: "Handmade Bronze Car",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    startedAt: "2021-08-19T19:23:50.895Z",
    endedAt: "2029-10-02T02:36:57.915Z",
    createdAt: "2019-07-21T15:53:44.077Z",
    updatedAt: "2023-09-23T05:18:01.085Z",
  },
].forEach((program: ProgramRecord) => {
  fakePrograms._create({
    ...program,
  });
});
