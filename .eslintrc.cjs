module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['import', 'unused-imports', '@typescript-eslint', 'prettier', 'react'],
    rules: {
        'no-console': 'warn',
        curly: 'error',
        'no-undef': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
            },
        ],
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-no-bind': 'error',
    },
    overrides: [
        {
            files: ['src/components/**/*', 'src/screens/**/*', 'src/hasura/cache/keys.ts'],
            rules: {
                'no-console': 'off',
            },
        },
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
};
