import * as path from 'path';

export function getTitle(dirName: string) {
  const srcRoot = path.resolve(__dirname, '..', '..');
  const componentDir = path.resolve(dirName, '..');
  return path.relative(srcRoot, componentDir);
}
