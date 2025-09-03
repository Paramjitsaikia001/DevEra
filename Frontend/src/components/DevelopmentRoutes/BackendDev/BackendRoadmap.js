import { useState } from "react";
import Header from "../../layout/Header";

// Import pages (create them later in ./BackendDev)
import NodeBasicsPage from "../webdevelopmentRoutes/NodeJs";
import PackageManagerPage from "../webdevelopmentRoutes/Packagemanager";
import ExpressPage from "../webdevelopmentRoutes/expresspage";
import NestJSPage from "../BackendDev/NestJSPage";
import DatabaseSQLPage from "../BackendDev/DatabaseSQLPage";
import DatabaseNoSQLPage from "../BackendDev/DatabaseNoSQLPage";
import ORMPage from "../BackendDev/ORMPage";
import AuthPage from "../BackendDev/AuthPage";
import APIPage from "../BackendDev/APIPage";
import RealtimePage from "../BackendDev/RealtimePage";
import SecurityPage from "../BackendDev/SecurityPage";
import TestingPage from "../BackendDev/TestingPage";
import DevOpsPage from "../BackendDev/DevOpsPage";
import ScalabilityPage from "../BackendDev/ScalabilityPage";
import MonitoringPage from "../BackendDev/MonitoringPage";
import CloudPage from "../BackendDev/CloudPage";
import SystemDesignPage from "../BackendDev/SystemDesignPage";
import CareerPrepPage from "../BackendDev/CareerPrepPage";

const backendRoadmap = [
  {
    id: 1,
    name: "Node.js Fundamentals",
    handler: "nodepagehandler",
    des: "Understand Node.js runtime, event loop, callbacks, promises, async/await, streams, buffers, and built-in modules (fs, path, crypto)."
  },
  {
    id: 2,
    name: "Package Managers (npm, pnpm, yarn)",
    handler: "packagepagehandler",
    des: "Learn how to manage dependencies, scripts, semantic versioning, and monorepos with npm, pnpm, and yarn."
  },
  {
    id: 3,
    name: "Web Frameworks (Express, Fastify, NestJS)",
    handler: "expresspagehandler",
    des: "Master Express for building REST APIs. Learn Fastify for performance and NestJS for enterprise-level modular apps with TypeScript."
  },
  {
    id: 4,
    name: "Databases: SQL (PostgreSQL/MySQL)",
    handler: "sqlpagehandler",
    des: "Learn relational database design, normalization, indexing, joins, stored procedures, and transactions."
  },
  {
    id: 5,
    name: "Databases: NoSQL (MongoDB, Redis)",
    handler: "nosqlpagehandler",
    des: "Understand document databases, key-value stores, replication, sharding, and caching with Redis."
  },
  {
    id: 6,
    name: "ORMs & Query Builders",
    handler: "ormpagehandler",
    des: "Use Prisma, Sequelize, TypeORM, or Knex for database queries. Understand migrations, schema management, and relationships."
  },
  {
    id: 7,
    name: "Authentication & Authorization",
    handler: "authpagehandler",
    des: "Implement JWT, sessions, OAuth2, OpenID Connect, and RBAC/ABAC. Learn best practices for password hashing (bcrypt, argon2)."
  },
  {
    id: 8,
    name: "APIs (REST & GraphQL)",
    handler: "apipagehandler",
    des: "Design REST APIs with versioning, filtering, and pagination. Learn GraphQL with Apollo Server for flexible querying."
  },
  {
    id: 9,
    name: "Real-time Communication",
    handler: "realtimepagehandler",
    des: "Implement WebSockets with Socket.io, Server-Sent Events, or gRPC for chat apps, live dashboards, and notifications."
  },
  {
    id: 10,
    name: "Security Best Practices",
    handler: "securitypagehandler",
    des: "Protect against XSS, CSRF, SQL injection, DDoS, and implement Helmet.js, CORS, HTTPS, secure headers, and environment variables."
  },
  {
    id: 11,
    name: "Testing & Debugging",
    handler: "testingpagehandler",
    des: "Learn Jest, Mocha, and Vitest for unit testing. Use Supertest for API tests and Cypress/Playwright for end-to-end tests."
  },
  {
    id: 12,
    name: "Deployment & DevOps",
    handler: "devopspagehandler",
    des: "Learn Docker, containerization, CI/CD pipelines (GitHub Actions, GitLab CI), and hosting platforms like AWS, GCP, Vercel, and Render."
  },
  {
    id: 13,
    name: "Scalability & Performance",
    handler: "scalabilitypagehandler",
    des: "Understand caching (Redis, CDN), load balancing, clustering, horizontal vs vertical scaling, and job queues (BullMQ, RabbitMQ)."
  },
  {
    id: 14,
    name: "Monitoring & Logging",
    handler: "monitoringpagehandler",
    des: "Set up logging with Winston/Pino, monitoring with Grafana/Prometheus, tracing with OpenTelemetry, and error tracking with Sentry."
  },
  {
    id: 15,
    name: "Cloud & Infrastructure",
    handler: "cloudpagehandler",
    des: "Learn cloud fundamentals (AWS EC2, S3, RDS, Lambda). Explore IaC tools like Terraform and Kubernetes for orchestration."
  },
  {
    id: 16,
    name: "System Design & Architecture",
    handler: "systemdesignpagehandler",
    des: "Learn system design concepts: microservices, monoliths, event-driven architecture, CAP theorem, CQRS, and API gateways."
  },
  {
    id: 17,
    name: "Career & Job Prep",
    handler: "careerpagehandler",
    des: "Build a portfolio with full-stack apps, contribute to open source, prepare for coding/system design interviews, and practice problem-solving on LeetCode."
  }
];

export default function BackendRoadmap() {
  const [activeId, setActiveId] = useState(null);

  // State management for detail pages
  const [shownodepage, setnodepage] = useState(false);
  const [showpackagepage, setpackagepage] = useState(false);
  const [showexpresspage, setexpresspage] = useState(false);
  const [showsqlpage, setsqlpage] = useState(false);
  const [shownosqlpage, setnosqlpage] = useState(false);
  const [showormpage, setormpage] = useState(false);
  const [showauthpage, setauthpage] = useState(false);
  const [showapipage, setapipage] = useState(false);
  const [showrealtimepage, setrealtimepage] = useState(false);
  const [showsecuritypage, setsecuritypage] = useState(false);
  const [showtestingpage, settestingpage] = useState(false);
  const [showdevopspage, setdevopspage] = useState(false);
  const [showscalabilitypage, setscalabilitypage] = useState(false);
  const [showmonitoringpage, setmonitoringpage] = useState(false);
  const [showcloudpage, setcloudpage] = useState(false);
  const [showsystemdesignpage, setsystemdesignpage] = useState(false);
  const [showcareerpage, setcareerpage] = useState(false);

  const handlers = {
    nodepagehandler: () => setnodepage(!shownodepage),
    packagepagehandler: () => setpackagepage(!showpackagepage),
    expresspagehandler: () => setexpresspage(!showexpresspage),
    sqlpagehandler: () => setsqlpage(!showsqlpage),
    nosqlpagehandler: () => setnosqlpage(!shownosqlpage),
    ormpagehandler: () => setormpage(!showormpage),
    authpagehandler: () => setauthpage(!showauthpage),
    apipagehandler: () => setapipage(!showapipage),
    realtimepagehandler: () => setrealtimepage(!showrealtimepage),
    securitypagehandler: () => setsecuritypage(!showsecuritypage),
    testingpagehandler: () => settestingpage(!showtestingpage),
    devopspagehandler: () => setdevopspage(!showdevopspage),
    scalabilitypagehandler: () => setscalabilitypage(!showscalabilitypage),
    monitoringpagehandler: () => setmonitoringpage(!showmonitoringpage),
    cloudpagehandler: () => setcloudpage(!showcloudpage),
    systemdesignpagehandler: () => setsystemdesignpage(!showsystemdesignpage),
    careerpagehandler: () => setcareerpage(!showcareerpage),
  };

  return (
    <section className="flex flex-col items-center justify-center h-full lg:w-[80%] w-[100%] gap-3 overflow-hidden">
      {/* Conditional renders for detail pages */}
      {shownodepage && <NodeBasicsPage closeNodeJS={() => setnodepage(false)} />}
      {showpackagepage && <PackageManagerPage closePM={() => setpackagepage(false)} />}
      {showexpresspage && <ExpressPage closeexpress={() => setexpresspage(false)} />}
      {showsqlpage && <DatabaseSQLPage closeSQL={() => setsqlpage(false)} />}
      {shownosqlpage && <DatabaseNoSQLPage closeNoSQL={() => setnosqlpage(false)} />}
      {showormpage && <ORMPage closeOrm={() => setormpage(false)} />}
      {showauthpage && <AuthPage closeAuth={() => setauthpage(false)} />}
      {showapipage && <APIPage closeApi={() => setapipage(false)} />}
      {showrealtimepage && <RealtimePage closeRealTime={() => setrealtimepage(false)} />}
      {showsecuritypage && <SecurityPage closeSecurity={() => setsecuritypage(false)} />}
      {showtestingpage && <TestingPage closeTesting={() => settestingpage(false)} />}
      {showdevopspage && <DevOpsPage closeDeploy={() => setdevopspage(false)} />}
      {showscalabilitypage && <ScalabilityPage closeScale={() => setscalabilitypage(false)} />}
      {showmonitoringpage && <MonitoringPage closeMonitor={() => setmonitoringpage(false)} />}
      {showcloudpage && <CloudPage closeCloudInfra={() => setcloudpage(false)} />}
      {showsystemdesignpage && <SystemDesignPage closeSystemDesign={() => setsystemdesignpage(false)} />}
      {showcareerpage && <CareerPrepPage closeCareer={() => setcareerpage(false)} />}

      {/* Header */}
      <div className="flex justify-center p-4 w-[100%]">
        <Header />
      </div>

      {/* Section title */}
      <div className="flex justify-center items-center gap-2 text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
        <h1>BACKEND DEVELOPMENT</h1>
        <span className="material-symbols-outlined hover:text-[#198de0] cursor-pointer">
          help
        </span>
      </div>

      {/* Roadmap Timeline */}
      <div className="conater relative w-full h-full">
                <div className="divider h-full items-center bg-white w-1 rounded-full absolute left-2 sm:left-[50%]"></div>

                <div className="flex flex-col justify-center w-full">

                    {backendRoadmap.map((item) => {


                        return (
                            <div
                                key={item.id}
                                className={`flex items-center w-full my-4  ${item.id % 2 === 0 ? "sm:justify-end pl-4 pr-4" : "sm:justify-start pl-4 pr-4"
                                    }`}
                            >
                                <div className={`w-[95%] sm:w-1/2 flex items-center h-fit sm:h-[8rem] `}>
                                    <div
                                        className={`flex items-center w-full ${item.id % 2 === 0 ? "sm:justify-start " : "sm:justify-start sm:flex-row-reverse"
                                            }`}
                                    >
                                        <div className="line w-[2rem] h-1 bg-white"></div>
                                        <div
                                                               onClick={() => {
                                                                if (item.handler) {
                                                                    handlers[item.handler]?.();
                                                                }
                                                            }}
                                    
                                            className={`relative w-[80%] sm:h-[5rem] text-center rounded-xl cursor-pointer bg-[#eeeeeedd] py-4 px-2 hover:bg-[#9aa3f6] transition-all duration-300`}
                                            onMouseEnter={() => setActiveId(item.id)}
                                            onMouseLeave={() => setActiveId(null)}
                                        >
                                            <h4 className="text-lg text-center font-semibold text-gray-800 ">{item.name}</h4>
                                            <div
                                                className={`overflow-hidden hidden sm:block transition-all duration-500 ease-in-out ${activeId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
                                                    }`}
                                            >
                                                <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                    {item.des}
                                                </p>
                                            </div>
                                                <div
                                                className={` sm:hidden block transition-all duration-500 ease-in-out 
                                                    `}
                                            >
                                                <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
                                                    {item.des}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
    </section>
  );
}
