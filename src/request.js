/* eslint-env browser */
import { collect } from "./utils/collect.js";
import { fromStream } from "./utils/fromStream";

export const request = async ({
  onProgress,
  url,
  method = "GET",
  headers = {},
  body,
  retryAttempt = 0,
}) => {
  if (retryAttempt === 2) {
    throw new Error("Too many retries");
  }

  // streaming uploads aren't possible yet in the browser
  let collectedBody

  if (body) {
    collectedBody = await collect(body);
  }
  
  const res = await fetch(url, {
    method,
    headers,
    body: collectedBody,
    credentials: "include",
  });
  console.log('outer',)
  if (res.status === 401) {
    console.log('inner')
    const response = await fetch("https://843ic7az1e.execute-api.eu-west-1.amazonaws.com/dev/refresh", {
      method: "GET",
      headers,
      credentials: "include",
    });

    const jwt = await response.json();

    if (response.status !== 200 || response.statusText !== "OK" || !jwt) {
      throw new Error("No refresh token");
    }

    onRefresh(jwt)

    return request({
      onProgress,
      url,
      method,
      headers: {
        ...headers,
        Authorization: `Bearer ${jwt}`,
      },
      body,
      retryAttempt: retryAttempt + 1,
    });
  }

  const iter =
    res.body && res.body.getReader
      ? fromStream(res.body)
      : [new Uint8Array(await res.arrayBuffer())];
  // convert Header object to ordinary JSON
  headers = {};
  for (const [key, value] of res.headers.entries()) {
    headers[key] = value;
  }
  return {
    url: res.url,
    method: res.method,
    statusCode: res.status,
    statusMessage: res.statusText,
    body: iter,
    headers: headers,
  };
}
