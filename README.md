<img src="https://i.ibb.co/Fqgxjt1N/Gemini-Generated-Image-m7irhdm7irhdm7ir.png" alt="StackVerify Logo" width="100%" style="max-width: 900px;">

# StackVerify Forms

[![npm version](https://img.shields.io/npm/v/@stackverify/forms)](https://www.npmjs.com/package/@stackverify/forms)
[![npm downloads](https://img.shields.io/npm/dm/@stackverify/forms)](https://www.npmjs.com/package/@stackverify/forms)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/npm/l/@stackverify/forms)](LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@stackverify/forms)](https://bundlephobia.com/package/@stackverify/forms)

A lightweight JavaScript and TypeScript SDK for submitting forms to StackVerify.

Collect submissions from any website or application without building your own backend. Every submission is securely stored, delivered to your StackVerify dashboard, and can trigger email notifications, webhooks, WhatsApp workflows, and future automations.

---

## Why StackVerify Forms?

Building and maintaining infrastructure for a simple contact form shouldn't slow down your product.

StackVerify Forms gives you:

* Instant form endpoints
* Submission storage
* Dashboard for managing responses
* Email notifications
* Webhook support
* WhatsApp automation
* TypeScript support
* Framework-agnostic SDK
* Zero runtime dependencies

Instead of building APIs, databases, and notification systems, simply submit your data and let StackVerify handle the rest.

---

## Installation


[![NPM](https://nodei.co/npm/db-migrate.png?downloads=true&downloadRank=true)](https://nodei.co/npm/@stackverify/formsa/)


```bash
npm install @stackverify/forms
```

```bash
yarn add @stackverify/forms
```

```bash
pnpm add @stackverify/forms
```

---

# Quick Start

Create a form from your StackVerify dashboard.

You'll receive a unique Form ID.

```ts
import { submitForm } from "@stackverify/forms";

await submitForm({
    formId: "frm_xxxxxxxxx",
    data: {
        name: "Jane Doe",
        email: "jane@example.com",
        company: "Acme Inc.",
        message: "I'd like to schedule a demo."
    }
});
```

Your submission is immediately available inside your StackVerify dashboard.

---

# React

```tsx
import { submitForm } from "@stackverify/forms";

export default function ContactForm() {

    async function handleSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(
            new FormData(e.target)
        );

        await submitForm({
            formId: "frm_xxxxxxxxx",
            data
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" />
            <input name="email" />
            <textarea name="message" />
            <button>Send</button>
        </form>
    );
}
```

---

# Next.js

```ts
import { submitForm } from "@stackverify/forms";

await submitForm({
    formId: process.env.NEXT_PUBLIC_FORM_ID!,
    data: {
        email,
        message
    }
});
```

---

# Vue

```ts
import { submitForm } from "@stackverify/forms";

await submitForm({
    formId: "frm_xxxxxxxxx",
    data: {
        name,
        email
    }
});
```

---

# Svelte

```ts
import { submitForm } from "@stackverify/forms";

await submitForm({
    formId: "frm_xxxxxxxxx",
    data
});
```

---

# Node.js

```ts
import { submitForm } from "@stackverify/forms";

await submitForm({
    formId: "frm_xxxxxxxxx",
    data: {
        userId: 123,
        event: "signup"
    }
});
```

---

# Vanilla JavaScript

```js
import { submitForm } from "@stackverify/forms";

submitForm({
    formId: "frm_xxxxxxxxx",
    data: {
        email: "john@example.com"
    }
});
```

---

# HTML

Every form automatically includes a public endpoint.

```html
<form action="https://stackverify.site/api/f/YOUR_FORM_ID" method="POST">

    <input
        name="name"
        required>

    <input
        type="email"
        name="email"
        required>

    <button type="submit">
        Submit
    </button>

</form>
```

No backend required.

---

# API

```ts
submitForm({
    formId,
    data,
    timeout,
    baseUrl,
    fetch
});
```

| Option  | Type                | Description                 |
| ------- | ------------------- | --------------------------- |
| formId  | string              | StackVerify Form ID         |
| data    | Record<string, any> | Form data                   |
| timeout | number              | Request timeout             |
| baseUrl | string              | Custom API URL              |
| fetch   | Fetch               | Custom fetch implementation |

---

# TypeScript

Built-in TypeScript definitions are included.

```ts
import type { SubmitOptions } from "@stackverify/forms";
```

---

# Supported Frameworks

| Frontend           | Backend            |
| ------------------ | ------------------ |
| React              | Node.js            |
| Next.js            | Express            |
| Vue                | Bun                |
| Nuxt               | Deno               |
| Angular            | Fastify            |
| Svelte             | NestJS             |
| SvelteKit          | Cloudflare Workers |
| Astro              |                    |
| Remix              |                    |
| SolidJS            |                    |
| Vite               |                    |
| Vanilla JavaScript |                    |

---

# Typical Workflow

```
Application
      │
      ▼
StackVerify Forms SDK
      │
      ▼
StackVerify API
      │
      ├── Stores submissions
      ├── Dashboard
      ├── Email notifications
      ├── Webhooks
      └── Automation
```

---

# Use Cases

* Contact forms
* Newsletter subscriptions
* Lead generation
* Landing pages
* SaaS onboarding
* Product orders
* Event registration
* Customer feedback
* Internal business tools
* Booking requests
* Waitlists

---

# Why Use the SDK?

You could send requests manually using `fetch`.

The SDK provides:

* Consistent API
* TypeScript support
* Validation
* Better error handling
* Cleaner code
* Future compatibility as StackVerify evolves

---

# License

MIT

---

Built for developers who want to ship forms, not infrastructure.
