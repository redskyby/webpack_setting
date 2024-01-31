module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json",
            },
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier",
                "plugin:prettier/recommended",
            ],
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": ["warn"],
        "@typescript-eslint/no-unused-vars": "warn",
    },
};
