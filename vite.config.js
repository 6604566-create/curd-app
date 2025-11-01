const { defineConfig } = require('vite')

// Export a function/promise so we can dynamically import the ESM plugin
module.exports = async () => {
  const { default: react } = await import('@vitejs/plugin-react')
  return defineConfig({
    plugins: [react()],
    server: {
      port: 5173
    }
  })
}
