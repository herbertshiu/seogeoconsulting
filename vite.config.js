import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import fs from 'node:fs';
import path from 'node:path';

function prettyHtmlRoutes() {
  const routes = {
    '/playbook': '/playbook.html',
    '/authority': '/authority.html',
    '/advisory': '/advisory.html',
    '/zh/advisory': '/advisory-zh.html',
  };
  const apply = (req) => {
    if (!req.url) return;
    const q = req.url.indexOf('?');
    const pathname = (q === -1 ? req.url : req.url.slice(0, q)).replace(/\/$/, '') || '/';
    const query = q === -1 ? '' : req.url.slice(q);
    if (routes[pathname]) req.url = routes[pathname] + query;
  };
  return {
    name: 'pretty-html-routes',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => { apply(req); next(); });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => { apply(req); next(); });
    },
  };
}

function stabilizeAssetNames() {
  return {
    name: 'stabilize-asset-names',
    apply: 'build',
    enforce: 'post',
    writeBundle(options) {
      const outDir = options.dir || path.resolve('dist');
      const assetsDir = path.join(outDir, 'assets');
      if (!fs.existsSync(assetsDir)) return;

      const files = fs.readdirSync(assetsDir);
      const jsFiles = files.filter((file) => file.endsWith('.js'));
      const cssFiles = files.filter((file) => file.endsWith('.css'));

      const largestJs = jsFiles
        .map((file) => ({ file, size: fs.statSync(path.join(assetsDir, file)).size }))
        .sort((a, b) => b.size - a.size)[0]?.file;

      if (largestJs && largestJs !== 'main.js') {
        fs.renameSync(path.join(assetsDir, largestJs), path.join(assetsDir, 'main.js'));
      }
      for (const file of jsFiles) {
        if (file !== largestJs && file !== 'main.js') {
          fs.unlinkSync(path.join(assetsDir, file));
        }
      }

      const cssFile = cssFiles[0];
      if (cssFile && cssFile !== 'main.css') {
        fs.renameSync(path.join(assetsDir, cssFile), path.join(assetsDir, 'main.css'));
      }
      for (const file of cssFiles) {
        if (file !== cssFile && file !== 'main.css') {
          fs.unlinkSync(path.join(assetsDir, file));
        }
      }

      for (const htmlName of ['index.html', 'playbook.html', 'authority.html', 'advisory.html', 'advisory-zh.html']) {
        const htmlPath = path.join(outDir, htmlName);
        if (!fs.existsSync(htmlPath)) continue;
        const html = fs
          .readFileSync(htmlPath, 'utf8')
          .replace(/\/assets\/[^"'\\\s]+\.js/g, '/assets/main.js')
          .replace(/\/assets\/[^"'\\\s]+\.css/g, '/assets/main.css');
        fs.writeFileSync(htmlPath, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), prettyHtmlRoutes(), stabilizeAssetNames()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        playbook: resolve(import.meta.dirname, 'playbook.html'),
        authority: resolve(import.meta.dirname, 'authority.html'),
        advisory: resolve(import.meta.dirname, 'advisory.html'),
        advisoryZh: resolve(import.meta.dirname, 'advisory-zh.html'),
      },
    },
  },
  server: {
    allowedHosts: ['.manus.computer', '5173-iaxal4cjab6t6ippcas8v-f3888328.sg2.manus.computer'],
  },
});
