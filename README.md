
# Abhi Tanwar — Portfolio (Assignment 14)

Create React App portfolio with required sections, Dockerized to run at **http://localhost:5575**.

## Sections
- Basic information
- Work (Title, Description, Image, Link, Tech List)
- Skills (description, languages/frameworks, tools)
- Resources (Title, Image/Icon, Summary, Link)
- Developer Setup (VS Code, Terminal, Preferred editor font)

## Local Dev
```bash
npm ci
npm start
```

## Lint/Format/Test
```bash
npm run lint
npm run format
npm test
```

## Docker (prod at 5575)
```bash
docker build -t abhi_portfolio14 .
docker run --name tanwar_abhi_coding_assignment14 -p 5575:5575 abhi_portfolio14
# open http://localhost:5575
```
Inside the image: `WORKDIR /tanwar_abhi_final_site`.
