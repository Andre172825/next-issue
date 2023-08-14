export class UtilFn {
  getRandomInt(min: number, max: number): number {
    // Asegúrate de que min sea menor que max
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }

    // Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    const randomDecimal = Math.random();

    // Calcula un número entero en el rango deseado (min - max)
    const randomInt = Math.floor(randomDecimal * (max - min + 1)) + min;

    return randomInt;
  }
}
