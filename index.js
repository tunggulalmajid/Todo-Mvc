//argv disini berperan untuk mengambil inpoutan dari terminal
// opsi : show, add, delete, update

const opsi = process.argv[2];
const params = process.argv.slice(3);

switch (String(opsi).toLowerCase()) {
  case "show":
    const fs = require('fs');
    let data = fs.readFileSync('./data.json', 'utf8');
    let todos = JSON.parse(data);
    console.log(todos);

    break;
  case "add":
    console.log("add");
    break;
  case "delete":
    console.log("delete");
    break;
  case "update":
    console.log("update");
    break;
  default:
    console.log("Opsi tidak tersedia");
}
