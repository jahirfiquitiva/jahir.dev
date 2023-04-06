type ApiResponse =
  | {
      success: true;
    }
  | {
      success: false;
      error: string;
    };

export const buildApiResponse = (
  status: number,
  response: ApiResponse & Record<string, unknown>,
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
