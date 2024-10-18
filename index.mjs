export default {
  rules: {
    'max-len': ['error', 120, 4, {
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    semi: ['error', 'never'], // 禁止分号
    quotes: ['error',
      'single',
      { 'allowTemplateLiterals': true }
    ], // 始终是单引号
    'object-curly-spacing': ['error', 'always'], // 对象的花括号头尾保持一个空格
    'object-curly-newline': ['error', { 'consistent': true }], // 对象元素换行保持一致
    'comma-dangle': ['error', 'never'], // 禁止尾随逗号
    'array-element-newline': ['error', 'always'] // 数组元素换行保持一致
  }
}
