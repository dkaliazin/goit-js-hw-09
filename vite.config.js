import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-09/',
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        gallery:'src/1-gallery.html',
        form: 'src/2-form.html'
      }
    }
  }
});