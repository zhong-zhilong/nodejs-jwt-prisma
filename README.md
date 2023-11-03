# Express JWT authentication using Prisma
# 基于 Express + JWT认证 + Prisma 的Nodejs快速API开发框架

这是一个基于 Express 和 Prisma 的 Node.js 快速开发框架，用于实现 JWT（JSON Web Token）身份验证。该框架提供了一套示例接口和处理逻辑，帮助你快速搭建具有身份验证功能的应用程序。

This is a Node.js rapid development framework based on Express and Prisma for implementing JWT (JSON Web Token) authentication. The framework provides a set of sample interfaces and processing logic to help you quickly build applications with authentication capabilities.

## 功能特点
- 使用 JWT 实现身份验证和授权
- 集成了 Prisma 数据库访问工具
- 提供了示例接口和处理逻辑，包括用户注册、登录和访问受保护资源等

## Features
- Authentication and authorization using JWT
- Integrates with the Prisma database access tool.
- Provides sample interfaces and processing logic, including user registration, login, and access to protected resources.

You can check the blog post.
 [here](https://dev.to/mihaiandrei97/jwt-authentication-using-prisma-and-express-37nk).


关于 JWT, 您可以查看 [Json-Web-Token](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).

## 安装依赖包 Setup

```
npm install
npx prisma migrate deploy
```

## 语法检查 Lint

```
npm run lint
```

## 运行测试用例 Test

```
npm run test
```

## 运行 Development

```
npm run dev
```


## 使用示例
**该框架提供了以下示例接口和处理逻辑：**

- 用户注册：POST /api/v1/auth/register
- 用户登录：POST /api/v1/auth/login
- 刷新令牌：POST /api/v1/auth/refreshToken
- 撤销用户令牌：POST /api/v1/auth/revokeRefreshTokens

- 获取当前用户信息：GET /api/v1/users/profile（需要身份验证）

- 你可以使用工具如 Postman 或 cURL 来测试这些接口。