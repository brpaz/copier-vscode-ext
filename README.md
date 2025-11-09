# Copier VSCode Extension

<p align="center">

[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-black.json&style=for-the-badge)](https://github.com/copier-org/copier)
[![Build Status](https://img.shields.io/github/actions/workflow/status/brpaz/copier-typescript/ci.yml?branch=main&style=for-the-badge)](https://github.com/brpaz/copier-typescript/actions)

</p>

> A [Copier](https://copier.readthedocs.io/en/stable/) template to scaffold a VSCode Extension project using TypeScript.

## 📦 What is included?

- [PNPM](https://pnpm.io/) as the package manager
- [Husky](https://typicode.github.io/husky/#/) to manage Git hooks
- [ESLint](https://eslint.org/) to enforce code quality
- [Prettier](https://prettier.io/) to enforce code formatting
- [Vitest](https://vitest.dev/) as the testing framework
- [TSDown](https://tsdown.dev/) for bundling.
- [Commitlint](https://commitlint.js.org/#/) to enforce conventional commits
- [GitHHub Actions](https://docs.github.com/en/actions) for CI/CD
- [Renovate](https://docs.renovatebot.com/) to keep dependencies up to date
- [Vitepress](https://vitepress.vuejs.org/) for documentation
- [VSCE](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for packaging and publishing to the VSCode Marketplace

## 🚀 Getting Started

### Pre-Requisites

This template is built with [Copier](https://copier.readthedocs.io/en/stable/), a Python based project templating tool.

To install copier on your system, follow the instructions at [Copier Website](https://copier.readthedocs.io/en/stable/#installation)

### Usage

To create a new project using this template, run the following command:

```bash
copier copy gh:brpaz/copier-vscode-ext /path/to/your/new/project
```

And answer the prompts to customize your new project.

## TODO

- Add vscode-test setup

## 🗒️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.