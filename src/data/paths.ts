/** The page's clean path ("/", "/work", "/work/artists"), the same in dev and in the built .html files. */
export function cleanPath(pathname: string): string {
  return pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
}
