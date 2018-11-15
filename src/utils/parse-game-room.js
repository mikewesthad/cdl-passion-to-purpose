import Url from "url-parse";

const isDev = process.env.NODE_ENV === "development";

export default function parseGameRoom() {
  const baseUrl = new Url(isDev ? "http://localhost:3000" : process.env.PUBLIC_URL);
  const currentUrl = new Url(window.location);
  const relativePath = currentUrl.pathname
    .slice()
    .replace(baseUrl.pathname, "") // Relative path to hosted URL
    .slice(1); // Remove starting slash
  return relativePath === "" ? "default" : relativePath;
}
