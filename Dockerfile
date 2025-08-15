
FROM node:20-alpine AS build
WORKDIR /tanwar_abhi_final_site
COPY package*.json ./
RUN npm ci
COPY public ./public
COPY src ./src
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /tanwar_abhi_final_site
RUN npm i -g serve@14
COPY --from=build /tanwar_abhi_final_site/build ./build
EXPOSE 5575
ENV PORT=5575
CMD ["serve","-s","build","-l","5575"]
