import { existsSync } from 'fs';
import { getEsbuildConfig } from '../config';

describe('ESBuild config', () => {
  const devConfig = getEsbuildConfig('development');

  test('entry point to be existing', () => {
    const entryPoint = (devConfig.esbuildOptions.entryPoints as string[])[0];
    expect({
      entryPoint,
      exists: existsSync(entryPoint),
    }).toEqual({
      entryPoint,
      exists: true,
    });
  });

  it('throws if mode is wrong', () => {
    expect(() => getEsbuildConfig('sss' as any)).toThrow();
  });
});
