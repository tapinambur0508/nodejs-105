function parseNumber(value) {
  if (typeof value !== 'string') {
    return undefined;
  }

  const parsedNumber = parseInt(value);

  if (Number.isNaN(parsedNumber) === true) {
    return undefined;
  }

  return value;
}

export function parseFilterParams(query) {
  const { minAge, maxAge } = query;

  const parsedMinAge = parseNumber(minAge);
  const parsedMaxAge = parseNumber(maxAge);

  return {
    minAge: parsedMinAge,
    maxAge: parsedMaxAge,
  };
}
