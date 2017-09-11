export const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    header: {
      'Content-type': 'application/json'
    }
  });
};
