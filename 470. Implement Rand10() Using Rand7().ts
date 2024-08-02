/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
  while (true) {
    // Combina duas chamadas de rand7() para obter um número entre 1 e 49
    const num = (rand7() - 1) * 7 + rand7();

    // Mapeia o número para 1 a 10 se estiver no intervalo desejado
    if (num <= 40) {
      return (num % 10) + 1;
    }
    // Se o número for maior que 40, repete o processo
  }
}
