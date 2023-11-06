class XORShift {
    private seed: number;
  
    constructor(seed: number) {
      if (seed === 0) {
        throw new Error("Seed can't be zero");
      }
      this.seed = seed;
    }
  
    // Generates the next random number
    private next(): number {
      let x = this.seed;
      x ^= x << 13;
      x ^= x >>> 17;
      x ^= x << 5;
      this.seed = x;
      return x;
    }
  
    // Generates a random number between min (inclusive) and max (exclusive)
    randomInt(min: number, max: number): number {
      if (min >= max) {
        throw new Error('Minimum value must be less than maximum value');
      }
      const range = max - min;
      return (this.next() % range) + min;
    }
  
    // Generates a random number between 0 (inclusive) and 1 (exclusive)
    random(): number {
      return this.next() / 0x100000000; // divide by 2^32 to get a value between 0 and 1
    }
}

export const xorRNG = new XORShift(42);