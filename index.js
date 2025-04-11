//argv disini berperan untuk mengambil inpoutan dari terminal
// opsi : show, add, delete, update

const opsi = process.argv[2];
const params = process.argv.slice(3);
const Ctodo = require("./controller/CTodo");
const CTodo = require("./controller/CTodo");

switch (String(opsi).toLowerCase()) {
  case "show":
    
    CTodo.show();
    break;
  case "add":
    
    CTodo.add(params);
    break;
  case "delete":
    
    CTodo.delete();
    break;
  case "update":
    
    CTodo.update();
    break;
  default:
    Ctodo.errorMessage("Opsi tidak tersedia");
}
