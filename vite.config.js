import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 项目根目录（index.html 文件所在的位置）
  root: '',

  // 开发或生产环境服务的公共基础路径
  base: '/',

  // 环境变量与模式
  mode: process.env.NODE_ENV,

  // 作为静态资源服务的文件夹
  publicDir: 'public',

  // 需要用到的插件数组
  plugins: [vue()],

  // 存储缓存文件的目录
  cacheDir: 'node_modules/.vite',

  resolve: {
    // 当使用文件系统路径的别名时，请始终使用绝对路径
    // 相对路径的别名值会原封不动地被使用，因此无法被正常解析
    // alias: 
    
    // 如果你在你的应用程序中有相同依赖的副本（比如 monorepos），
    // 请使用此选项强制 Vite 始终将列出的依赖项解析为同一副本（从项目根目录）
    // dedupe: 
    
    // 解决程序包中 情景导出 时的其他允许条件
    // conditions:
  },

  css: {
    // 配置 CSS modules 的行为
    // modules: 

    // 内联的 PostCSS 配置
    // postcss: 

    // 指定传递给 CSS 预处理器的选项
    // preprocessorOptions
  },

  json: {
    // 是否支持从 .json 文件中进行按名导入
    namedExports: true,
    // 开启此项，则会禁用按名导入
    stringify: false
  },

  // ESBuildOptions 继承自 ESbuild 转换选项
  // esbuild: 

  // 静态资源处理
  // assetsInclude:

  // 调整控制台输出的级别
  logLevel: 'info',

  // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。
  // 命令行模式下可以通过 --clearScreen false 设置。
  clearScreen: true,

  // 用于加载 .env 文件的目录
  // envDir: 

  // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
  // envPrefix:

  server: {
    host: 'localhost',
    port: 9000,

    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    // strictPort:

    // 启用 TLS + HTTP/2
    // https:

    // 在开发服务器启动时自动在浏览器中打开应用程序
    open: false,

    // 为开发服务器配置自定义代理规则
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      }
    },
    // 为开发服务器配置 CORS
    cors: true,

    // 用于定义开发调试阶段生成资产的 origin
    origin: 'http://127.0.0.1:9000'
  },

  // 构建选项
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'modules',

    // 用于决定是否自动注入 module preload 的 polyfill.
    polyfillModulePreload: true,

    // 指定输出路径
    outDir: 'dist',

    // 指定生成静态资源的存放路径
    assetsDir: 'assets',

    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
    assetsInlineLimit: 4096,

    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,

    // 此选项允许用户为 CSS 的压缩设置一个不同的浏览器 target，
    // 此处的 target 并非是用于 JavaScript 转写目标。
    cssTarget: 'modules',
    
    // 构建后是否生成 source map 文件
    sourcemap: false,

    // 自定义底层的 Rollup 打包配置
    // rollupOptions: 

    // 当设置为 true，构建后将会生成 manifest.json 文件，
    // 包含了没有被 hash 的资源文件名和 hash 后版本的映射。
    manifest: false,

    // 当设置为 true 时，构建也将生成 SSR 的 manifest 文件，
    // 以确定生产中的样式链接与资产预加载指令。
    ssrManifest: false,

    // 生成面向 SSR 的构建。
    ssr: undefined,

    // 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。
    // 默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。
    minify: 'esbuild'
  },

  // 预览选项
  preview: {
    // host: 
    // port:
    // strictPort:
    // https:
    // open:
    // proxy:
    // cors:
  },

  // 依赖优化选项
  optimizeDeps: {
    // 默认情况下，Vite 会抓取你的 index.html 来检测需要预构建的依赖项
    // entries: 

    // 在预构建中强制排除的依赖项。
    // exclude:

    // 默认情况下，不在 node_modules 中的，链接的包不会被预构建。
    // include:

    // 打包器有时需要重命名符号以避免冲突
    keepNames: false
  },

  // SSR 选项
  ssr: {
    // 列出的是要为 SSR 强制外部化的依赖。
    // external:

    // 列出的是防止被 SSR 外部化依赖项。如果设为 true，将没有依赖被外部化。
    // noExternal: 

    // SSR 服务器的构建目标。
    target: 'node'
  }
})
