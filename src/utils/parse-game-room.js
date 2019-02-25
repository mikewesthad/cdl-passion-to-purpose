import Url from "url-parse";

const isDev = process.env.NODE_ENV === "development";

export default function parseGameRoom() {
  // Find relative path to hosted URL and use that as the room name
  const baseUrl = new Url(isDev ? "http://localhost:3000" : process.env.PUBLIC_URL);
  const currentUrl = new Url(window.location);
  let relativePath = currentUrl.pathname.slice().replace(baseUrl.pathname, "");
  if (relativePath.startsWith("/")) relativePath = relativePath.slice(1);
  return relativePath === "" ? "default" : relativePath;
}
