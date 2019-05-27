module.exports = {
  presets: ["@vue/app"],
  // 配置babel-plugin-import, 用于按需加载组件代码和样式
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};
