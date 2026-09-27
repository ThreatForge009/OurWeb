const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');

dotenv.config();

const run = async () => {
  await connectDB();
  await Project.deleteMany();

  await Project.create([
    {
      title: 'ForgeSOC Platform',
      description: 'A Security Operations Center dashboard. Synthetic security events flow through a rule-based detection engine, correlate into incidents, trigger real-time IP blocking, and push live updates to every connected analyst.',
      category: 'CYBERSECURITY',
      technologies: ['React', 'Vite', 'Three.js', 'Socket.IO', 'Express', 'MongoDB'],
      status: 'ACTIVE',
      featured: true
    },
    {
      title: 'PhishGuard Training Lab',
      description: 'An interactive platform designed to train users against phishing attacks. Includes a dynamic Email Simulator, interactive quizzes, and offline AI fallbacks to safely identify and learn about malicious emails and red flags.',
      category: 'BLUE TEAM',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Lovable'],
      demo: 'https://swift-build-smile.lovable.app',
      status: 'COMPLETED',
      featured: true
    },
    {
      title: 'NetWatch Platform',
      description: 'A professional SOC-style network intelligence platform. Scans authorized domains and IPs, detects services and open ports, and visualizes the discovered infrastructure dynamically in a stunning 3D simulated environment.',
      category: 'CYBERSECURITY',
      technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Postgres'],
      demo: 'https://netwatch-aura-91.lovable.app',
      status: 'COMPLETED',
      featured: true
    }
  ]);
  console.log('Projects Seeded!');
  process.exit();
};
run();
