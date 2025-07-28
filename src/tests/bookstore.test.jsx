import { beforeEach, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import App from "../App";

import { BrowserRouter } from "react-router-dom";
import fs from "fs";
import path from "path";

const isCartContextFileExists = fs.existsSync(
  path.resolve(__dirname, "../contexts/CartContextProvider.jsx"),
  "utf8"
);

const cartContextFile = isCartContextFileExists
  ? fs
      .readFileSync(
        path.resolve(__dirname, "../contexts/CartContextProvider.jsx"),
        "utf8"
      )
      .replaceAll(/(?:\r\n|\r|\n| )/g, "")
  : "";

const isProductContextFileExists = fs.existsSync(
  path.resolve(__dirname, "../contexts/ProductContextProvider.jsx"),
  "utf8"
);

const productContextFile = isCartContextFileExists
  ? fs
      .readFileSync(
        path.resolve(__dirname, "../contexts/ProductContextProvider.jsx"),
        "utf8"
      )
      .replaceAll(/(?:\r\n|\r|\n| )/g, "")
  : "";

const appFile = fs
  .readFileSync(path.resolve(__dirname, "../App.jsx"), "utf8")
  .replaceAll(/(?:\r\n|\r|\n| )/g, "");

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("contexts klasöründe CartContextProvider.jsx dosyası oluşturulmuş mu?", () => {
  expect(isCartContextFileExists).toBe(true);
});

test("contexts klasöründe ProductContextProvider.jsx dosyası oluşturulmuş mu?", () => {
  expect(isProductContextFileExists).toBe(true);
});

test("CartContextProvider.jsx dosyasında createContext() ile context oluşturulmuş mu?", () => {
  expect(cartContextFile).toContain("createContext()");
});

test("ProductContextProvider.jsx dosyasında createContext() ile context oluşturulmuş mu?", () => {
  expect(productContextFile).toContain("createContext()");
});

test("CartContextProvider.jsx dosyasında CartContext.Provider kullanılmış mı?", () => {
  expect(cartContextFile).toContain("CartContext.Provider");
});

test("ProductContextProvider.jsx dosyasında ProductContext.Provider kullanılmış mı?", () => {
  expect(productContextFile).toContain("ProductContext.Provider");
});

test("CartContext.Provider'a value'lar aktarılmış mı?", () => {
  expect(cartContextFile).toContain("<CartContext.Providervalue={");
});

test("ProductContext.Provider'a value'lar aktarılmış mı?", () => {
  expect(productContextFile).toContain("<ProductContext.Providervalue={");
});

test("App.jsx'de oluşturulan her 2 provider da kullanılmış mı?", () => {
  expect(appFile).toContain("Provider>");
  expect(appFile.split("Provider>")).toHaveLength(5);
});

test("App.jsxde useStateler (import ve tanımlamalar) silinmiş mi?", () => {
  expect(appFile).not.toContain("useState");
});

test("App.jsx'de Products componentine gönderilen propslar (products, addItem) silinmiş mi?", () => {
  expect(appFile).toContain("<Products/>");
});

test("App.jsxde Navigation componentine gönderilen props (cart) silinmiş mi?", () => {
  expect(appFile).toContain("<Navigation/>");
});

test("App.jsxde ShoppingCart componentine gönderilen props (cart) silinmiş mi?", () => {
  expect(appFile).toContain("<ShoppingCart/>");
});

test("ContextAPI eklendikten sonra ana sayfada 4 kitap da görünüyor mu?", async () => {
  expect(appFile).toContain("Provider>");
  expect(screen.getAllByText("Add to cart")).toHaveLength(4);
});

test("İlk kitapta 'Add to cart' butonuna tıklanınca sağ üstte 1 yazıyor mu?", async () => {
  const user = userEvent.setup();
  await user.click(screen.getAllByText("Add to cart")[0]);
  await screen.findByText("1");
});

test("İkinci kitapta Add to cart butonuna tıklanınca sağ üst cartta 2 yazıyor mu?", async () => {
  const user = userEvent.setup();
  await user.click(screen.getAllByText("Add to cart")[0]);
  await user.click(screen.getAllByText("Add to cart")[1]);
  await screen.findByText("2");
});

test("İlk kitapta 'Add to cart' butonuna tıklanınca sepete ekliyor mu?", async () => {
  const user = userEvent.setup();
  await user.click(screen.getAllByText("Add to cart")[0]);
  await user.click(screen.getByText("Cart"));
  expect(await screen.findAllByText("The Art Of War")).toHaveLength(1);
});

test("Cart sayfasında 'Remove from cart' kitabı sepetten çıkarıyor mu?", async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText("Products"));
  await user.click(screen.getAllByText("Add to cart")[0]);
  await user.click(screen.getByText("Cart"));
  expect(await screen.findAllByText("The Art Of War")).toHaveLength(1);
  await user.click(screen.getAllByText("Remove from cart")[0]);

  await waitFor(() => {
    expect(screen.queryByText("The Art Of War")).not.toBeInTheDocument();
  });
});
