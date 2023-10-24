const saludo = alert("Bienvenido al Cajero automático");

let saldoTotal = 10000;
let operaciones;

let reiniciarBucle = true;
const mensajeSalida = "Gracias por venir, vuelva pronto";

do {
  operaciones = parseInt(
    prompt(`¿Qué operación desea realizar?
  1- Consultar saldo
  2- Depositar saldo
  3- Extraer saldo
  4- Salir`)
  );

  switch (operaciones) {
    case 1:
      alert(`Su saldo total es $${saldoTotal}`);
      if (!confirm("¿Desea realizar otra operación?")) {
        alert(mensajeSalida);
        reiniciarBucle = false;
      }
      break;
    case 2:
      const montoAgregado = parseInt(
        prompt("¿Cuál es el monto que desea agregar?")
      );
      saldoTotal += montoAgregado;
      alert(`Su nuevo saldo total es $${saldoTotal}`);
      if (!confirm("¿Desea realizar otra operación?")) {
        alert(mensajeSalida);
        reiniciarBucle = false;
      }
      break;
    case 3:
      const quitarMonto = parseInt(
        prompt("¿Cuál es el monto que desea retirar?")
      );
      if (quitarMonto <= saldoTotal) {
        saldoTotal -= quitarMonto;
        alert(`Su nuevo saldo total es $${saldoTotal}`);
      } else {
        alert("Saldo insuficiente para retirar esa cantidad.");
      }
      if (!confirm("¿Desea realizar otra operación?")) {
        alert(mensajeSalida);
        reiniciarBucle = false;
      }
      break;
    case 4:
      const confirmSalir = confirm("¿Está seguro de que desea salir?");
      if (!confirmSalir) {
        reiniciarBucle = true;
        break;
      }
      alert(mensajeSalida);
      reiniciarBucle = false;
      break;
    default:
      alert("Opción no válida. Por favor, elija una opción válida.");
  }
} while (reiniciarBucle);
