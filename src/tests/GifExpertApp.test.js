import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
//import GifGrid from "../../components/GifGrid";
//import { useFetchGifs } from "../../hooks/useFetchGifs";
//jest.mock("../../hooks/useFetchGifs");

describe("Pruebas de GifExpertApp", () => {
  test("debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
