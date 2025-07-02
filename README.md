#  Full-Stack Form Management System

##  Project Overview

This is a full-stack, production-ready Form Management System built using **React**, **Node.js (Express)**, **PostgreSQL**, and **AWS Cloud Services**. It allows users to submit, view, edit, and delete form entries with real-time validation, robust backend APIs,and AWS-native deployments.

###  Tech Stack

- **Frontend:** React + Vite + Axios + Tailwind CSS
- **Backend:** Node.js (Express), Sequelize ORM
- **Database:** Amazon RDS PostgreSQL
- **Deployment:** AWS Lambda, API Gateway, S3, CloudFront
- **DevOps:** GitHub Actions, ESLint, Jest, Serverless Framework


- **Frontend (React)** hosted on Amazon S3 + CloudFront
- **Backend (Express.js)** deployed on AWS Lambda via API Gateway
- **Database** hosted on Amazon RDS PostgreSQL
- **CI/CD** using GitHub Actions for test + deployment automation
- **Monitoring** via AWS CloudWatch Logs + Metrics

## Live Demo

- **Frontend:** http://full-stack-form-front-end.s3-website.us-east-2.amazonaws.com/
- **Backend API:** https://k7b007rjqg.execute-api.us-east-2.amazonaws.com/dev/api/submissions/1

## Key Features

-  Dynamic Form: Full Name, Email, Phone, Age, Address, Preferred Contact
-  Real-time Validation & Notifications
-  View / Edit / Delete Submissions
-  Responsive UI
-  Secure API with validation & error handling
-  Deployed using Serverless Framework with cost-optimized AWS services

## Cost Optimization Strategies

- Used **Lambda + API Gateway** for serverless execution
- **S3 + CloudFront** for low-cost static hosting
- **RDS t3.micro** used within free tier
- IAM roles with **least privilege access**
- Monitoring via **AWS CloudWatch** (free tier)

## Setup Instructions

### Prerequisites

- Node.js >= 18.x
- PostgreSQL (local or RDS)
- AWS CLI + IAM User
- npm/yarn

### Local Setup

#### Backend

```bash
cd backend
npm install
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Database Setup

- Configure `.env` in `backend/` with DB credentials.
- Use Sequelize CLI or sync method to auto-create tables:

```bash
npx sequelize-cli db:migrate
```

### Environment Variables

```env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

##  Testing

###  Run Unit Tests

```bash
cd backend
npm test
```

###  Run Lint

```bash
npm run lint
```

### Coverage: > 90% via Jest

##  Deployment

### Manual

- Frontend: Upload `frontend/build` to S3
- Backend: Deploy via Serverless Framework


### IAM Setup

Created IAM users for:

- `saisrigoutham.gadi@cyndx.com`
- `jerome.caisip-ext@cyndx.com`

Attached read-only access to:

- CloudWatch Logs
- Lambda Config
- RDS Monitoring
- API Gateway
- S3 Buckets

Use generated links for AWS access:

- [Goutham Console](https://125677696447.signin.aws.amazon.com/console)
- [Jerome Console](https://125677696447.signin.aws.amazon.com/console)

### Monitoring & Logging

- AWS CloudWatch for:
  - Lambda execution logs
  - API Gateway access logs
  - Custom metrics (if added)
- Billing alerts (optional via AWS Budgets)



## Folder Structure

```
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── src/
│   ├── tests/
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
├── README.md
```


## Backend Coding Challenges 

1. **Find Peak in 2D Matrix**: Efficiently locates a peak element in a matrix.
2. **Group Anagrams**: Groups and returns largest set of anagrams + total group count.

Code files:
- `findPeak.py`
- `group_anagrams.py`

---
