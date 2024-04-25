const express = require("express");
const app = express();

const { usuariosData, filtroData, dataObj } = require("./datos");

const marketing = filtroData(usuariosData, "marketing");
const developer = filtroData(usuariosData, "desarrolladores");
const QAs = filtroData(usuariosData, "QAs");
const ventas = filtroData(usuariosData, "ventas");
const allDataMarketing = dataObj(marketing);
const allDataDeveloper = dataObj(developer);
const allDataQAs = dataObj(QAs);
const allDataVentas = dataObj(ventas);

console.log(marketing);
console.log(developer);
console.log(QAs);
console.log(ventas);
console.log(allDataMarketing);
console.log(allDataDeveloper);
console.log(allDataQAs);
console.log(allDataVentas);

app.get("/", (req, res) => {
  res.send(
    "<h1>Home Page</h1>" +
      '<a href="/marketing">Marketing</a> ' +
      '<a href="/desarrolladores">Developers</a> ' +
      '<a href="/QAs">QAs</a> ' +
      '<a href="/ventas">ventas</a> '
  );
});
app.get("/marketing", (req, res) => {
  const marketingHTML = `
  <h1>Marketing Page</h1>
  <p>Number of persons: ${marketing.length}</p>
  <ul>${JSON.stringify(allDataMarketing)}</ul>
  <a href="/">Home</a>
`;
  res.send(marketingHTML);
});

app.get("/desarrolladores", (req, res) => {
  const desarrolladoresHTML = `
  <h1>Developer Page</h1>
  <p>Number of persons: ${developer.length}</p>
  <ul>${JSON.stringify(allDataDeveloper)}</ul>

  <a href="/">Home</a>
`;
  res.send(desarrolladoresHTML);
});

app.get("/QAs", (req, res) => {
  const QAsHTML = `
  <h1>QAs Page</h1>
  <p>Number of persons: ${QAs.length}</p>
  <ul>${JSON.stringify(allDataQAs)}</ul>
  <a href="/">Home</a>
`;
  res.send(QAsHTML);
});

app.get("/ventas", (req, res) => {
  const ventasHTML = `
  <h1>Ventas Page</h1>
  <p>Number of persons: ${ventas.length}</p>
  <ul>${JSON.stringify(allDataVentas)}</ul>
  <a href="/">Home</a>
`;
  res.send(ventasHTML);
});

app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1><a href="/">Home Page</a>');
});

app.listen(3000, () => {
  console.log("puerto 3000");
});
