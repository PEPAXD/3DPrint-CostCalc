import fs from "fs/promises";
import puppeteer from "puppeteer";
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.API_KEY;

const URL =
  "https://proyectocolor.com.ar/categorias/impresion-3d/insumos-3d/filamentos/";

async function main() {

  const response = await fetch(
    `http://api.scraperapi.com/?api_key=${API_KEY}&url=${URL}&render=true`
  );
  const data = await response.text();

  // await fs.writeFile("output.html", data);
  // console.log(data);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(data);

  const productsData = await page.evaluate(() => {
    const productsElements = document.querySelectorAll(
      "div.product-details.content-bg.entry-content-wrap"
    );
    const productsData = [];

    productsElements.forEach((productElement) => {
      const priceElement = productElement.querySelector(
        "span.woocommerce-Price-amount.amount"
      );

      const titleElement = productElement.querySelector(
        "h2.woocommerce-loop-product__title"
      );

      console.log(priceElement.textContent, titleElement.textContent);

      productsData.push({
        title: titleElement.textContent,
        price: priceElement.textContent,
      });
    });

    return productsData;

  });

  console.log(productsData);
  await browser.close();
}

main();
