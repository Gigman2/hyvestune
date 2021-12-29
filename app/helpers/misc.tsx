export const pixelToRem = (px: number, baseInput = 16) => {
  const getValue = (input: any) => parseFloat(input?.value?.replace(/,/g, '.')) || 0;

  const base = () => getValue(baseInput) || 16;

  const x = base() || 16,
    rem = (1 / x) * px + 'rem';

  return rem;
};
