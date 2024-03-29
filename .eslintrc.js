// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "indent": ["error", 2, {"SwitchCase": 1}], // 换行空格占位2位
    "semi": ["error", "always"],//语句强制分号结尾
    "comma-dangle": ["error", "always-multiline"], //对象字面量项尾不能有逗号
    "keyword-spacing": ["error", { "before": true }],
    "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    "object-curly-spacing": ["error", "always"], //大括号内是否允许不必要的空格
    "space-infix-ops": ["error", {"int32Hint": true}], //中缀操作符周围要不要有空格
    "padded-blocks": ["error", "never"], //块语句内行首行尾是否要空行
    "no-var": 2,// //禁用var，用let和const代替
    "no-undef": 2, // //不能有未定义的变量
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-tabs": 0, 
    "no-unneeded-ternary": 0, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-extra-boolean-cast": 0, // //禁止不必要的bool转换
    "no-alert": 2,//禁止使用alert confirm prompt
    "no-console": 0,//禁止使用console
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "prefer-const": 0,//首选const
    "vue/require-default-prop": 0,
    "vue/this-in-template": 0,
    "vue/require-prop-types": 0,
    "vue/no-unused-vars": 0,
    "vue/no-unused-components": 0, // 后续考虑打开
    // allow async-await
    "generator-star-spacing": "off",
    "vue/no-v-html": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "quote-props": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
}
