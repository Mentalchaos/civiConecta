const rutValidator = rutValue => {
  rutValue = typeof(rutValue) == 'number' ? rutValue = rutValue.toString() : rutValue.replace(/[.-]/g, '');

  if (rutValue.length !== 8 && rutValue.length !== 9) {
    return false;
  }

  const dv = rutValue.charAt(rutValue.length - 1);
  const digitos = rutValue.slice(0, -1);

  if (!/^\d+$/.test(digitos)) {
    return false;
  }

  let suma = 0;
  let factor = 2;
  for (let i = digitos.length - 1; i >= 0; i--) {
    suma += parseInt(digitos.charAt(i)) * factor;
    factor = (factor + 1) % 8 || 2;
  }
  const dvEsperado = String(11 - suma % 11);
  const dvCalculado = (dvEsperado === '11') ? '0' : (dvEsperado === '10') ? 'k' : dvEsperado;

  return dv.toLowerCase() === dvCalculado.toLowerCase();
}

export { rutValidator };
