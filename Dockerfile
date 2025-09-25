# syntax=docker/dockerfile:1.6

# 1) Install dependencies (faster builds with cached layer)
FROM node:20-alpine AS deps
WORKDIR /app

# Install OS deps required by sharp/next-image if ever used
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# 2) Build the app with standalone output
FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 3) Runtime image using Next.js standalone output
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Add a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy standalone server and public assets
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port Next.js listens on
EXPOSE 3000

USER nextjs

CMD ["node", "server.js"]


