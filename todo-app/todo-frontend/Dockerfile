FROM node:lts-bookworm-slim AS build
# ENV NODE_ENV=production
ENV VITE_BACKEND_URL=http://localhost:3000
WORKDIR /usr/src/app
COPY . .
RUN npm ci --include=dev
RUN npm test run
RUN npm run build

FROM nginx:mainline-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
