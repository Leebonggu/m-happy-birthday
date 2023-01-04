const createRandomNumber = (max: number = 45) => {
  return Math.floor(Math.random() * max) + 1;
};

const createLottoNumber = (lotto: number[] = []): number[] => {
  if (lotto.length === 6) {
    return lotto;
  }

  const randomNumber = createRandomNumber();
  if (!lotto.includes(randomNumber)) {
    lotto.push(randomNumber);
  }

  return createLottoNumber(lotto);
};

const createLottoNumbers = (count: number) => {
  return Array.from({ length: count }).map((_) => {
    return createLottoNumber();
  });
};

export { createRandomNumber, createLottoNumber, createLottoNumbers };
