import { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss(), tsconfigPaths()],
} satisfies UserConfig;
