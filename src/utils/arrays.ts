/**
 * @link https://stackoverflow.com/a/2450976
 */
export function shuffle<X extends any[]>(
  array: X,
  prng: () => number = Math.random,
): void {
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(prng() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
}
