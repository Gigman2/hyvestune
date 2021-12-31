export const pixelToRem = (px: number, baseInput = 16) => {
  const getValue = (input: any) => parseFloat(input?.value?.replace(/,/g, '.')) || 0;

  const base = () => getValue(baseInput) || 16;

  const x = base() || 16,
    rem = (1 / x) * px + 'rem';

  return rem;
};

export const stringSearch = (firstString: string, secondString: string) => {
  // keeps tracker pf number of matches
  let matches = 0;

  // secondString index
  let j;

  // looping through main stringSearch
  for (let i = 0; i < firstString.length; i++) {
    j = 0;

    // while we have a sequence to match
    while (j < secondString.length) {
      // set incremental sequence
      const sequenceIndex = j + i;
      // compare the string
      if (firstString[sequenceIndex] !== secondString[j]) break;

      // if there was a match increase matches by 1
      if (j === secondString.length - 1) matches++;

      // increase secondString index
      j++;
    }
  }

  return matches;
};
