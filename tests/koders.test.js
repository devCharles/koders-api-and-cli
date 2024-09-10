import kodersUseCase from "../src/usecases/koders.usecases";
import { describe, test, it, expect, expectTypeOf } from "vitest";

const testKoder = {
  firstName: "test",
  lastName: "testing",
  email: "signup@example.com",
  password: "Kodemia123",
};

describe("Koders use cases", () => {
  it("Should list all koders", async () => {
    const kodersList = await kodersUseCase.getAll();

    // expect(kodersList).toBeInstanceOf(Array);
    // expect(kodersList).toBe([])
    expect(kodersList).toBeDefined();
    expectTypeOf(kodersList).toBeArray();
    expect(kodersList).toHaveLength(0);
  });

  it("Should register a new koder", async () => {
    const newKoder = await kodersUseCase.signUp(testKoder);

    expectTypeOf(newKoder).toBeObject();
    expect(newKoder.firstName).toBe(testKoder.firstName);
    expect(newKoder.lastName).toBe(testKoder.lastName);
    expect(newKoder.email).toBe(testKoder.email);
    expect(newKoder.password).not.toBe(testKoder.password);
    expect(newKoder._id).toBeDefined();
  });

  it("Should not register a koder without required data and throw error", async () => {
    expect(kodersUseCase.signUp({})).rejects.toThrowError();
  });

  it("Should not register 2 koders with same email", async () => {
    const firstKoder = await kodersUseCase.signUp(testKoder);

    expect(firstKoder).toBeDefined();
    expectTypeOf(firstKoder).toBeObject();
    expect(firstKoder._id).toBeDefined();

    expect(kodersUseCase.signUp(testKoder)).rejects.toThrowError();
  });
});
