import { getGifts } from "../../helpers/getGifs";
import "@testing-library/jest-dom";

describe("Pruebas con getGifts Fetch", () => {
  test("debe de traer 10 elementos ", async () => {
    const gifs = await getGifts("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("debe de traer 0 elementos ", async () => {
    const gifs = await getGifts("");
    expect(gifs.length).toBe(0);
  });
});
