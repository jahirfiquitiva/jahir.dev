export const buildApiResponse = (
  status: number,
  response: Record<string, unknown>,
  headers: Record<string, string> = {},
) => {
  return new Response(JSON.stringify(response), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      ...headers,
    },
  });
};
