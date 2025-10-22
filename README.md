# Quantum Relay Network

A cooperative–competitive mobile game where teams manage interplanetary communication networks to route, reconstruct, and decode time‑sensitive messages under shifting cosmic conditions. Built with React Native (mobile client), Node.js + Express (backend), PostgreSQL + Redis (data), containerized with Docker and orchestrated with Kubernetes. Designed to be recruiter‑ready and open source.

---

## What this project demonstrates
- **Real‑time systems**: socket streams of network telemetry and packet events.  
- **Network modeling & resilience**: routing, bandwidth/power tradeoffs, failure recovery.  
- **Security & decoding**: layered puzzle engine (cipher, error correction, waveform analysis).  
- **Mobile + Cloud engineering**: React Native app with production CI/CD, Docker, and K8s.  
- **Professional workflows**: tests, linting, branch protections, CONTRIBUTING guidelines.

---

## One‑line elevator pitch
Manage a fragile interplanetary comms network and decode encrypted packets under cosmic threats — cooperate or compete to keep messages alive.

---

## Quick Start (local dev — minimal)

1. Clone the repo:
```bash
git clone git@github.com:YOUR-ORG/quantum-relay.git
cd quantum-relay
```
2. Copy example env files:
```bash
cp services/auth/.env.example services/auth/.env
cp services/network/.env.example services/network/.env
```
3. Start services with Docker Compose:
```bash
docker compose up --build
```
4. Open the dev apps:
- Mobile client: Expo at http://localhost:19002 or run on device/emulator (`expo start`)  
- Backend API: http://localhost:4000/api/health

---

## Repo layout
- **/mobile** — React Native client (Expo)  
- **/services/auth** — Auth & profile service (Express)  
- **/services/network** — Core network engine & puzzle service (Express)  
- **/infra/docker** — Dockerfiles and compose stubs  
- **/infra/helm** — Helm chart stubs for K8s deployment  
- **/tests** — Shared integration and E2E test helpers  
- **/docs** — Design docs, architecture diagrams, and sprint plans

---

## Environment examples

services/auth/.env.example
```env
PORT=4000
DATABASE_URL=postgres://app:secret@db:5432/quantum
JWT_SECRET=replace_with_strong_secret
REDIS_URL=redis://redis:6379
```

services/network/.env.example
```env
PORT=4100
NETWORK_SIM_SEED=42
REDIS_URL=redis://redis:6379
PACKET_TTL=30
```

---

## How to contribute (brief)
- Fork the repo and create feature branches: `feature/<short-name>`.  
- Branch from `main` and rebase often to avoid merge conflicts.  
- Follow the commit format: `type(scope): short description` (e.g., `feat(network): add link-saturation metric`).  
- Open a Pull Request against `main` and link issues. CI must pass before merge.  
- Add tests for new logic. Unit → Integration → E2E where appropriate.  
- Use the Issue templates and label issues with `good first issue` or `help wanted` if appropriate.

See CONTRIBUTING.md for the full workflow and code style rules.

---

## First issues (good first issues to claim)
- scaffold: Create React Native Expo project under **/mobile** and add README scaffold  
- infra: Add Dockerfile for **services/network** with multi-stage build  
- auth: Implement `POST /api/auth/register` and basic User model migration  
- network: Create OOP class stubs: `Node`, `Link`, `Packet`, `NetworkEngine` with basic unit tests  
- docs: Add architecture diagram (SVG/PNG) to **/docs** and link from README

Label these as `good first issue` and `help wanted`.

---

## Branch & release strategy
- **main** (protected): require 2 PR reviews, passing CI, and linear history  
- Feature branches: `feature/*`  
- Release branches: `release/vX.Y` for staging deploys  
- Hotfix branches: `hotfix/*` for urgent fixes

---

## CI / Quality gates
- **Lint**: ESLint + Prettier on all JavaScript/TypeScript files  
- **Unit tests**: Jest for services and shared logic  
- **Integration tests**: Supertest for key endpoints (auth, room creation, packet routing)  
- **E2E**: Detox or Appium for mobile flows (run on merge or scheduled jobs)  
- Example GitHub Actions workflows live under `.github/workflows/ci.yml`.

---

## License & Code of Conduct
- **License**: MIT — see LICENSE file.  
- **Code of Conduct**: Contributor Covenant — see CODE_OF_CONDUCT.md.

---

## Roadmap (short)
1. Sprint 0: repo scaffold, Docker Compose, basic auth, and mobile scaffold.  
2. Sprint 1: network canvas (drag/drop nodes) + network engine simulation.  
3. Sprint 2: packet routing telemetry + puzzle engine integration.  
4. Sprint 3: multiplayer sessions, upgrades, and cosmic events.  
5. Sprint 4: polish, analytics dashboards, E2E tests, and K8s staging deploy.

---

## Project governance & contacts
- **Project lead**: Michael Woodyard  
- **Maintainers**: list in `MAINTAINERS.md` with roles and responsibilities  
- Maintain an ISSUE_TEMPLATES folder and require `good first issue` tags for onboarding tasks
