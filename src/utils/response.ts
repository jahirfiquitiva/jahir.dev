export const buildApiResponse = (
  status: number,
  response: unknown,
  headers: Record<string, string> = {},
) => {
  return new Response(JSON.stringify(response), {
    status,
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
  });
};
