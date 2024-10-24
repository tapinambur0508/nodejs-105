function parseNumber(value, defaultValue) {
  if (typeof value !== 'string') {
    return defaultValue;
  }

  const parsedValue = parseInt(value);

  if (Number.isNaN(parsedValue) === true) {
    return defaultValue;
  }

  return parsedValue;
}

export function parsePaginationParams(query) {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
}
