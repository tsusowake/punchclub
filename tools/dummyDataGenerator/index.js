import { fakerJA as faker } from "@faker-js/faker";

console.log("[dummyDataGenerator] start...");

function createProgram() {
  return {
    id: faker.string.uuid().replace(/-/g, ""),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    startedAt: faker.date
      .between({
        from: "2018-01-01T00:00:00.000Z",
        to: "2024-04-01T00:00:00.000Z",
      })
      .toISOString(),
    endedAt: faker.date
      .between({
        from: "2025-01-01T00:00:00.000Z",
        to: "2029-12-31T23:59:59.999Z",
      })
      .toISOString(),

    createdAt: faker.date
      .between({
        from: "2018-01-01T00:00:00.000Z",
        to: "2024-04-01T00:00:00.000Z",
      })
      .toISOString(),
    updatedAt: faker.date
      .between({
        from: "2018-01-01T00:00:00.000Z",
        to: "2024-04-01T00:00:00.000Z",
      })
      .toISOString(),
  };
}

function createPrograms() {
  const programs = faker.helpers.multiple(createProgram, {
    count: 20,
  });
  return programs;
}

const programs = createPrograms();
console.log(JSON.stringify(programs));
