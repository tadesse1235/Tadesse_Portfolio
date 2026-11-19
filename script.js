/**
 * TADESSE PORTFOLIO CORE JAVASCRIPT ENGINE
 * Architected for:
 * 1. Navigation & Mobile Drawer
 * 2. Smart AI Copilot Knowledge Base (Full Stack, ML, Mobile, Networking, Multimedia, Java, Python)
 * 3. Simulators:
 *    - Drone RF Jamming & DQN Frequency Hopping
 *    - Heterogeneous GNN Cyber Threat Isolation
 *    - Palimpsest Multispectral Split Slider
 *    - Offline Health Triage Diagnostic (Mobile & Edge ML)
 * 4. Project Filtering, Search & Architecture Deep-Dive Modals (9 Systems)
 * 5. Formal CV Modal & Print Trigger
 * 6. Contact Form & Clipboard Toast System
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. NAVIGATION, MOBILE DRAWER & MODAL CONTROLS
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileNav = document.getElementById('closeMobileNav');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.m-link');
    const openAiDrawerBtn = document.getElementById('openAiDrawerBtn');
    const mobileOpenAiBtn = document.getElementById('mobileOpenAiBtn');
    const heroAiPromptBtn = document.getElementById('heroAiPromptBtn');

    // CV Modal elements
    const resumeModalOverlay = document.getElementById('resumeModalOverlay');
    const openResumeModalBtn = document.getElementById('openResumeModalBtn');
    const mobileOpenResumeBtn = document.getElementById('mobileOpenResumeBtn');
    const heroResumeBtn = document.getElementById('heroResumeBtn');
    const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');
    const closeCvModalBtn = document.getElementById('closeCvModalBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'rgba(8, 9, 13, 0.95)';
            navbar.style.padding = '0.9rem 8%';
            navbar.style.borderBottomColor = 'rgba(63, 231, 212, 0.2)';
        } else {
            navbar.style.background = 'rgba(8, 9, 13, 0.75)';
            navbar.style.padding = '1.2rem 8%';
            navbar.style.borderBottomColor = 'var(--glass-border)';
        }
    });

    const toggleMobileMenu = (open) => {
        if (open) {
            mobileNav.classList.add('open');
        } else {
            mobileNav.classList.remove('open');
        }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
    if (closeMobileNav) closeMobileNav.addEventListener('click', () => toggleMobileMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMobileMenu(false)));

    const scrollToAiTerminal = () => {
        toggleMobileMenu(false);
        const aiSection = document.getElementById('smart-ai-section');
        if (aiSection) {
            aiSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const terminalInput = document.getElementById('terminalInput');
                if (terminalInput) terminalInput.focus();
            }, 600);
        }
    };

    if (openAiDrawerBtn) openAiDrawerBtn.addEventListener('click', scrollToAiTerminal);
    if (mobileOpenAiBtn) mobileOpenAiBtn.addEventListener('click', scrollToAiTerminal);
    if (heroAiPromptBtn) heroAiPromptBtn.addEventListener('click', scrollToAiTerminal);

    // CV Modal handlers
    const openCvModal = () => {
        toggleMobileMenu(false);
        if (resumeModalOverlay) {
            resumeModalOverlay.classList.add('open');
            resumeModalOverlay.setAttribute('aria-hidden', 'false');
        }
    };

    const closeCvModal = () => {
        if (resumeModalOverlay) {
            resumeModalOverlay.classList.remove('open');
            resumeModalOverlay.setAttribute('aria-hidden', 'true');
        }
    };

    if (openResumeModalBtn) openResumeModalBtn.addEventListener('click', openCvModal);
    if (mobileOpenResumeBtn) mobileOpenResumeBtn.addEventListener('click', openCvModal);
    if (heroResumeBtn) heroResumeBtn.addEventListener('click', openCvModal);
    if (resumeModalCloseBtn) resumeModalCloseBtn.addEventListener('click', closeCvModal);
    if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeCvModal);

    if (resumeModalOverlay) {
        resumeModalOverlay.addEventListener('click', (e) => {
            if (e.target === resumeModalOverlay) closeCvModal();
        });
    }


    /* ==========================================================================
       2. SMART AI COPILOT (EXPANDED KNOWLEDGE BASE)
       ========================================================================== */
    const terminalChatLogs = document.getElementById('terminalChatLogs');
    const terminalForm = document.getElementById('terminalForm');
    const terminalInput = document.getElementById('terminalInput');
    const promptChips = document.querySelectorAll('.chip');

    const aiKnowledge = {
        fullstack: {
            title: "Full-Stack Web Engineering",
            response: `
                <p><strong>🌐 Full-Stack Web Systems:</strong></p>
                <p>Tadesse architects resilient, high-concurrency web platforms using modern architectures:</p>
                <ul>
                    <li><strong>MERN Stack:</strong> MongoDB, Express.js, React.js, and Node.js with scalable REST and GraphQL endpoints.</li>
                    <li><strong>CitizenHub Capstone:</strong> 5 RBAC tiers (Citizen, Staff, Supervisor, Management, Admin), Kebele GIS Heatmaps, and real-time ticket tracking.</li>
                    <li><strong>Python FastAPI:</strong> Asynchronous microservices, WebSocket telemetry, and machine learning inference endpoints.</li>
                    <li><strong>Security & Auth:</strong> Multi-factor authentication, encrypted SMS OTP verification, and JWT session hardening.</li>
                </ul>
            `
        },
        mobile: {
            title: "Mobile Application Engineering",
            response: `
                <p><strong>📱 Mobile Engineering (Android, Kotlin & Java):</strong></p>
                <p>Tadesse builds modern native mobile applications following clean architecture:</p>
                <ul>
                    <li><strong>Modern Android:</strong> 100% Kotlin with declarative <strong>Jetpack Compose</strong> (Material 3).</li>
                    <li><strong>Java Android:</strong> Deep foundation in Object-Oriented software design, Android SDK, and legacy codebases.</li>
                    <li><strong>Architecture:</strong> MVVM and MVI state paradigms, Kotlin Coroutines, StateFlow, and Retrofit.</li>
                    <li><strong>Offline Health Scanner:</strong> Offline-first Room DB cache executing local diagnostic inference without internet connectivity.</li>
                    <li><strong>Gondar Goha Hotel App:</strong> Native guest reservations, tour booking, and offline cached itinerary management.</li>
                </ul>
            `
        },
        ml: {
            title: "Machine Learning & Deep Reinforcement Learning",
            response: `
                <p><strong>🧠 Machine Learning & Deep AI:</strong></p>
                <p>Applied research and neural model implementations:</p>
                <ul>
                    <li><strong>Deep Reinforcement Learning (DQN):</strong> Adaptive frequency hopping spread spectrum (FHSS) for electronic warfare mitigation with <strong>&lt;10ms</strong> latency.</li>
                    <li><strong>PyTorch Geometric (PyG):</strong> Heterogeneous Graph Neural Networks (GNNs) detecting lateral cyber intrusion vectors.</li>
                    <li><strong>CNN Signal Processing:</strong> Evaluating RF spectrogram matrices with <strong>99.4% jammer classification accuracy</strong>.</li>
                    <li><strong>Explainable AI (XAI):</strong> Graph perturbation analysis providing human-interpretable security root-cause traces.</li>
                </ul>
            `
        },
        networking: {
            title: "Computer Networking & Cyber Defense",
            response: `
                <p><strong>📡 Networking, RF Defense & Security:</strong></p>
                <p>Comprehensive foundation in network architectures and adversarial countermeasures:</p>
                <ul>
                    <li><strong>Wireless & RF Analysis:</strong> Signal-to-noise (SINR) modeling, barrage and swept jammer mitigation.</li>
                    <li><strong>Dynamic Honeypots:</strong> Active decoy traps diverting malicious actors from core database clusters.</li>
                    <li><strong>Protocols:</strong> WebSocket streaming, TCP/UDP socket programming, distributed mesh synchronization.</li>
                    <li><strong>Cryptography:</strong> Applied encryption, secure token hashes, and telemetric stream integrity.</li>
                </ul>
            `
        },
        multimedia: {
            title: "Multimedia Systems & Computer Vision",
            response: `
                <p><strong>🎨 Multimedia Systems & Multispectral Vision:</strong></p>
                <p>Specialized optical processing and historical document recovery:</p>
                <ul>
                    <li><strong>Multispectral Separation:</strong> 16-band imaging (365nm UV to 940nm NIR) separating layered inks.</li>
                    <li><strong>Palimpsest AI:</strong> Uncovering erased 14th-century Ethiopic Ge'ez under-text beneath modern cursive ledger ink.</li>
                    <li><strong>Ge'ez OCR Engine:</strong> Deep optical character recognition tuned for ancient Ethiopic script with <strong>98.2% accuracy</strong>.</li>
                    <li><strong>Computer Vision:</strong> OpenCV image enhancement, noise filtration, and spectral decomposition.</li>
                </ul>
            `
        },
        offline: {
            title: "Offline Health Scanner",
            response: `
                <p><strong>🏥 Offline Health Scanner (Mobile Edge Diagnostic):</strong></p>
                <p>Engineered for rural Ethiopian clinics and remote health posts:</p>
                <ul>
                    <li>Evaluates patient vital signs (Heart Rate, SpO2, Body Temp) and symptoms completely on-device.</li>
                    <li>Runs edge heuristics and lightweight ML classifiers without requiring network connectivity.</li>
                    <li>Local encrypted Room Database that automatically synchronizes when cellular network becomes available.</li>
                </ul>
                <p>Try the live interactive demo in the <strong>Smart Lab</strong> section!</p>
            `
        },
        academics: {
            title: "Debre Berhan University & Academic Journey",
            response: `
                <p><strong>🎓 Academic Background:</strong></p>
                <p>Graduated in <strong>Information Technology (B.Sc.)</strong> from <strong>Debre Berhan University</strong> (Faculty of Computing):</p>
                <ul>
                    <li>Rigorous coursework in Computer Networks, Network Security & Cryptography, Machine Learning, Mobile Computing, Java OOP, Multimedia Systems, and Database Systems.</li>
                    <li>Lead developer for the <strong>CitizenHub Capstone Project</strong> presented to university examiners and city administrators.</li>
                    <li>Published prototypes in Drone RF jamming defense and Palimpsest manuscript reconstruction.</li>
                </ul>
            `
        },
        contact: {
            title: "Contact & Hiring Tadesse",
            response: `
                <p><strong>📩 Connecting with Tadesse:</strong></p>
                <ul>
                    <li><strong>Email:</strong> <code>tadesse.engineer@gmail.com</code></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/tadesse1235" target="_blank" style="color:var(--secondary-color);text-decoration:underline;">github.com/tadesse1235</a></li>
                    <li><strong>Location:</strong> Debre Berhan / Addis Ababa, Ethiopia (Open to worldwide remote and relocation).</li>
                    <li><strong>Availability:</strong> Full-time IT & Software Development roles, AI Research, and Systems Consulting.</li>
                </ul>
            `
        }
    };

    const appendChatMessage = (content, sender = 'bot') => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}-msg`;

        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fa-solid fa-brain"></i>' : '<i class="fa-regular fa-user"></i>';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = content;

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        terminalChatLogs.appendChild(msgDiv);

        terminalChatLogs.scrollTop = terminalChatLogs.scrollHeight;
    };

    const processAiQuery = (queryText) => {
        const cleaned = queryText.toLowerCase().trim();
        let matched = false;

        if (cleaned.includes('fullstack') || cleaned.includes('mern') || cleaned.includes('web') || cleaned.includes('node') || cleaned.includes('react') || cleaned.includes('express')) {
            appendChatMessage(aiKnowledge.fullstack.response, 'bot');
            matched = true;
        } else if (cleaned.includes('mobile') || cleaned.includes('android') || cleaned.includes('kotlin') || cleaned.includes('compose') || cleaned.includes('hotel')) {
            appendChatMessage(aiKnowledge.mobile.response, 'bot');
            matched = true;
        } else if (cleaned.includes('java')) {
            appendChatMessage(`
                <p><strong>☕ Java Expertise:</strong></p>
                <p>Tadesse has an extensive foundation in Java software engineering:</p>
                <ul>
                    <li><strong>Object-Oriented Programming (OOP):</strong> Design patterns, polymorphism, encapsulation, and SOLID architecture principles.</li>
                    <li><strong>Java Android:</strong> Native mobile development with the Android SDK, background services, and thread management.</li>
                    <li><strong>Enterprise Systems:</strong> Library cataloging systems, desktop management tools, and secure database persistence with JDBC.</li>
                </ul>
            `, 'bot');
            matched = true;
        } else if (cleaned.includes('python') || cleaned.includes('paython')) {
            appendChatMessage(`
                <p><strong>🐍 Python Expertise:</strong></p>
                <p>Tadesse utilizes Python across scientific computing and production APIs:</p>
                <ul>
                    <li><strong>PyTorch & PyG:</strong> Deep Q-Networks (DQN), CNN signal detectors, and Graph Neural Networks.</li>
                    <li><strong>FastAPI & WebSockets:</strong> High-performance asynchronous APIs for real-time telemetry streaming.</li>
                    <li><strong>Data Science:</strong> NumPy, Pandas, OpenCV, and Matplotlib for signal & multispectral image analytics.</li>
                </ul>
            `, 'bot');
            matched = true;
        } else if (cleaned.includes('ml') || cleaned.includes('machine learning') || cleaned.includes('dqn') || cleaned.includes('ai') || cleaned.includes('gnn')) {
            appendChatMessage(aiKnowledge.ml.response, 'bot');
            matched = true;
        } else if (cleaned.includes('network') || cleaned.includes('networking') || cleaned.includes('drone') || cleaned.includes('rf') || cleaned.includes('jamming')) {
            appendChatMessage(aiKnowledge.networking.response, 'bot');
            matched = true;
        } else if (cleaned.includes('multimedia') || cleaned.includes('vision') || cleaned.includes('manuscript') || cleaned.includes('geez') || cleaned.includes('palimpsest')) {
            appendChatMessage(aiKnowledge.multimedia.response, 'bot');
            matched = true;
        } else if (cleaned.includes('offline') || cleaned.includes('health') || cleaned.includes('scanner') || cleaned.includes('clinic')) {
            appendChatMessage(aiKnowledge.offline.response, 'bot');
            matched = true;
        } else if (cleaned.includes('university') || cleaned.includes('debre berhan') || cleaned.includes('education') || cleaned.includes('school') || cleaned.includes('degree') || cleaned.includes('academic')) {
            appendChatMessage(aiKnowledge.academics.response, 'bot');
            matched = true;
        } else if (cleaned.includes('hire') || cleaned.includes('contact') || cleaned.includes('email') || cleaned.includes('reach')) {
            appendChatMessage(aiKnowledge.contact.response, 'bot');
            matched = true;
        } else if (cleaned.includes('hello') || cleaned.includes('hi') || cleaned.includes('who are you')) {
            appendChatMessage(`
                <p>Hello! I am Tadesse's career and systems copilot. Tadesse specializes in <strong>Information Technology, Full-Stack Web (MERN), Machine Learning (PyTorch), Mobile Development (Android/Kotlin/Java), Networking & Cyber Defense, and Multimedia Systems</strong>. Which discipline would you like to explore?</p>
            `, 'bot');
            matched = true;
        }

        if (!matched) {
            appendChatMessage(`
                <p>I found several core competencies in Tadesse's engineering background matching your inquiry:</p>
                <ul>
                    <li><strong>Full-Stack & Web:</strong> MERN Stack, FastAPI, and CitizenHub municipal portal.</li>
                    <li><strong>Mobile (Android):</strong> Jetpack Compose, Kotlin, Java, and Offline Health Scanner.</li>
                    <li><strong>Machine Learning:</strong> DQN Drone Defense, PyG Graph Neural Networks, and CNNs.</li>
                    <li><strong>Networking & Cyber:</strong> RF Frequency Hopping (FHSS) and Dynamic Honeypots.</li>
                    <li><strong>Multimedia:</strong> Multispectral ink separation (365-940nm) and Ethiopic Ge'ez OCR.</li>
                </ul>
                <p>Ask a specific question or reach out directly at <code>tadesse.engineer@gmail.com</code>!</p>
            `, 'bot');
        }
    };

    if (terminalForm) {
        terminalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = terminalInput.value.trim();
            if (!val) return;
            appendChatMessage(`<p>${val}</p>`, 'user');
            terminalInput.value = '';

            setTimeout(() => {
                processAiQuery(val);
            }, 300);
        });
    }

    promptChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const queryKey = chip.getAttribute('data-query');
            if (aiKnowledge[queryKey]) {
                appendChatMessage(`<p>Inquire: ${chip.textContent.trim()}</p>`, 'user');
                setTimeout(() => {
                    appendChatMessage(aiKnowledge[queryKey].response, 'bot');
                }, 250);
            }
        });
    });


    /* ==========================================================================
       3. INTERACTIVE SIMULATOR TABS & HANDLERS
       ========================================================================== */
    const simTabs = document.querySelectorAll('.sim-tab');
    const simPanels = document.querySelectorAll('.sim-panel');

    simTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            simTabs.forEach(t => t.classList.remove('active'));
            simPanels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetId = tab.getAttribute('data-sim');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });


    /* ==========================================================================
       4. SIMULATOR 1: DRONE RF JAMMING & DQN FREQUENCY HOPPING
       ========================================================================== */
    const droneCanvas = document.getElementById('droneCanvas');
    let droneCtx = null;
    if (droneCanvas) droneCtx = droneCanvas.getContext('2d');

    const triggerJammerBtn = document.getElementById('triggerJammerBtn');
    const autoMitigateBtn = document.getElementById('autoMitigateBtn');
    const resetDroneSimBtn = document.getElementById('resetDroneSimBtn');
    const droneSimStatus = document.getElementById('droneSimStatus');
    const telemetryChannel = document.getElementById('telemetryChannel');
    const telemetryPdr = document.getElementById('telemetryPdr');
    const telemetrySnr = document.getElementById('telemetrySnr');

    let droneState = 'NORMAL';
    let waveOffset = 0;

    const droneNodes = [
        { id: 1, name: "Leader UAV-01", x: 160, y: 160, color: "#3fe7d4" },
        { id: 2, name: "Mesh Node UAV-02", x: 380, y: 90, color: "#7c4dff" },
        { id: 3, name: "Mesh Node UAV-03", x: 410, y: 230, color: "#7c4dff" },
        { id: 4, name: "Relay UAV-04", x: 680, y: 160, color: "#ff7ad9" }
    ];

    function drawDroneSimulation() {
        if (!droneCtx) return;
        const width = droneCanvas.width;
        const height = droneCanvas.height;

        droneCtx.clearRect(0, 0, width, height);

        // Grid lines
        droneCtx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        droneCtx.lineWidth = 1;
        for (let x = 0; x < width; x += 40) {
            droneCtx.beginPath();
            droneCtx.moveTo(x, 0);
            droneCtx.lineTo(x, height);
            droneCtx.stroke();
        }
        for (let y = 0; y < height; y += 40) {
            droneCtx.beginPath();
            droneCtx.moveTo(0, y);
            droneCtx.lineTo(width, y);
            droneCtx.stroke();
        }

        // Draw Jammer if active
        if (droneState === 'JAMMED') {
            const jx = 520;
            const jy = 40;
            const pulseRadius = (waveOffset * 3) % 180;
            droneCtx.strokeStyle = `rgba(239, 68, 68, ${Math.max(0, 1 - pulseRadius / 180)})`;
            droneCtx.lineWidth = 3;
            droneCtx.beginPath();
            droneCtx.arc(jx, jy, pulseRadius, 0, Math.PI * 2);
            droneCtx.stroke();

            droneCtx.fillStyle = '#dc2626';
            droneCtx.beginPath();
            droneCtx.arc(jx, jy, 16, 0, Math.PI * 2);
            droneCtx.fill();
            droneCtx.fillStyle = '#fff';
            droneCtx.font = 'bold 11px JetBrains Mono';
            droneCtx.fillText('JAMMER', jx - 22, jy + 30);
        }

        // Connections
        const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [1, 2]];
        edges.forEach(([i, j]) => {
            const n1 = droneNodes[i];
            const n2 = droneNodes[j];

            droneCtx.beginPath();
            droneCtx.moveTo(n1.x, n1.y);
            droneCtx.lineTo(n2.x, n2.y);

            if (droneState === 'JAMMED') {
                droneCtx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
                droneCtx.setLineDash([6, 6]);
                droneCtx.lineWidth = 2;
            } else if (droneState === 'MITIGATED') {
                droneCtx.strokeStyle = 'rgba(63, 231, 212, 0.8)';
                droneCtx.setLineDash([]);
                droneCtx.lineWidth = 2.5;
            } else {
                droneCtx.strokeStyle = 'rgba(124, 77, 255, 0.5)';
                droneCtx.setLineDash([]);
                droneCtx.lineWidth = 1.8;
            }
            droneCtx.stroke();
            droneCtx.setLineDash([]);

            if (droneState !== 'JAMMED') {
                const midX = (n1.x + n2.x) / 2 + Math.sin(waveOffset + i) * 10;
                const midY = (n1.y + n2.y) / 2 + Math.cos(waveOffset + j) * 10;
                droneCtx.fillStyle = droneState === 'MITIGATED' ? '#3fe7d4' : '#9d6dff';
                droneCtx.beginPath();
                droneCtx.arc(midX, midY, 4, 0, Math.PI * 2);
                droneCtx.fill();
            }
        });

        // Drones
        droneNodes.forEach(node => {
            droneCtx.beginPath();
            droneCtx.arc(node.x, node.y, 22, 0, Math.PI * 2);
            droneCtx.fillStyle = 'rgba(255, 255, 255, 0.04)';
            droneCtx.fill();

            droneCtx.beginPath();
            droneCtx.arc(node.x, node.y, 14, 0, Math.PI * 2);
            droneCtx.fillStyle = droneState === 'JAMMED' ? '#ef4444' : node.color;
            droneCtx.shadowColor = droneState === 'JAMMED' ? '#ef4444' : node.color;
            droneCtx.shadowBlur = 12;
            droneCtx.fill();
            droneCtx.shadowBlur = 0;

            const propAngle = waveOffset * 4;
            const px = Math.cos(propAngle) * 18;
            const py = Math.sin(propAngle) * 18;
            droneCtx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            droneCtx.lineWidth = 1.5;
            droneCtx.beginPath();
            droneCtx.moveTo(node.x - px, node.y - py);
            droneCtx.lineTo(node.x + px, node.y + py);
            droneCtx.stroke();

            droneCtx.fillStyle = '#f3f5fb';
            droneCtx.font = '11px Plus Jakarta Sans';
            droneCtx.fillText(node.name, node.x - 38, node.y + 34);
        });

        // Spectrum diagram in corner
        const specX = width - 200;
        const specY = height - 80;
        droneCtx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        droneCtx.fillRect(specX - 10, specY - 20, 195, 85);
        droneCtx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        droneCtx.strokeRect(specX - 10, specY - 20, 195, 85);

        droneCtx.fillStyle = '#9aa2ba';
        droneCtx.font = '10px JetBrains Mono';
        droneCtx.fillText('RF SPECTRUM POWER (dBm)', specX, specY - 6);

        for (let c = 0; c < 8; c++) {
            const bx = specX + c * 22;
            let barHeight = 15 + Math.sin(waveOffset + c) * 6;
            let barColor = '#3fe7d4';

            if (droneState === 'JAMMED' && (c === 3 || c === 4)) {
                barHeight = 52 + Math.random() * 8;
                barColor = '#ef4444';
            } else if (droneState === 'MITIGATED' && c === 6) {
                barHeight = 44;
                barColor = '#7c4dff';
            }

            droneCtx.fillStyle = barColor;
            droneCtx.fillRect(bx, specY + 50 - barHeight, 14, barHeight);
        }

        waveOffset += 0.04;
        requestAnimationFrame(drawDroneSimulation);
    }

    if (droneCanvas) drawDroneSimulation();

    if (triggerJammerBtn) {
        triggerJammerBtn.addEventListener('click', () => {
            droneState = 'JAMMED';
            droneSimStatus.innerHTML = '<span class="indicator threat"></span> Channel Status: <strong>HOSTILE JAMMING ATTACK DETECTED</strong>';
            telemetryChannel.textContent = 'CH-06 (2.437 GHz - JAMMED)';
            telemetryChannel.classList.add('text-danger');
            telemetryPdr.textContent = '31.4% (Degraded)';
            telemetryPdr.classList.remove('text-accent');
            telemetryPdr.classList.add('text-danger');
            telemetrySnr.textContent = '-6 dB (Hostile Noise)';
            telemetrySnr.classList.add('text-danger');
            showToast('⚠️ Hostile RF Jamming Detected! CNN model classified Swept Jammer with 99.4% confidence.');
        });
    }

    if (autoMitigateBtn) {
        autoMitigateBtn.addEventListener('click', () => {
            droneState = 'MITIGATED';
            droneSimStatus.innerHTML = '<span class="indicator safe"></span> Channel Status: <strong>DQN HOPPED :: CH-11 (2.462 GHz CLEAN)</strong>';
            telemetryChannel.textContent = 'CH-11 (2.462 GHz)';
            telemetryChannel.classList.remove('text-danger');
            telemetryPdr.textContent = '99.9% (Recovered)';
            telemetryPdr.classList.remove('text-danger');
            telemetryPdr.classList.add('text-accent');
            telemetrySnr.textContent = '+26 dB (Optimum)';
            telemetrySnr.classList.remove('text-danger');
            showToast('🛡️ DQN RL Agent executed dynamic frequency hop to Channel 11 in 7.8ms!');
        });
    }

    if (resetDroneSimBtn) {
        resetDroneSimBtn.addEventListener('click', () => {
            droneState = 'NORMAL';
            droneSimStatus.innerHTML = '<span class="indicator safe"></span> Channel Status: <strong>CLEAN (2.425 GHz)</strong>';
            telemetryChannel.textContent = 'CH-06 (2.437 GHz)';
            telemetryChannel.classList.remove('text-danger');
            telemetryPdr.textContent = '99.8%';
            telemetryPdr.classList.remove('text-danger');
            telemetryPdr.classList.add('text-accent');
            telemetrySnr.textContent = '+24 dB';
            telemetrySnr.classList.remove('text-danger');
            showToast('🔄 Drone Mesh reset to baseline frequencies.');
        });
    }


    /* ==========================================================================
       5. SIMULATOR 2: HETEROGENEOUS GNN CYBER THREAT ISOLATION
       ========================================================================== */
    const cyberCanvas = document.getElementById('cyberCanvas');
    let cyberCtx = null;
    if (cyberCanvas) cyberCtx = cyberCanvas.getContext('2d');

    const injectAttackBtn = document.getElementById('injectAttackBtn');
    const deployHoneypotBtn = document.getElementById('deployHoneypotBtn');
    const resetCyberSimBtn = document.getElementById('resetCyberSimBtn');
    const cyberSimStatus = document.getElementById('cyberSimStatus');
    const gnnScore = document.getElementById('gnnScore');
    const containmentAction = document.getElementById('containmentAction');
    const honeypotCount = document.getElementById('honeypotCount');

    let cyberState = 'NORMAL';
    const cyberNodes = [
        { id: 'gw', label: 'API Gateway', x: 200, y: 160, type: 'gateway', color: '#3fe7d4' },
        { id: 'auth', label: 'Auth Microservice', x: 420, y: 80, type: 'service', color: '#7c4dff' },
        { id: 'billing', label: 'Billing Service', x: 420, y: 240, type: 'service', color: '#7c4dff' },
        { id: 'db', label: 'Encrypted Core DB', x: 670, y: 160, type: 'database', color: '#10b981' },
        { id: 'user', label: 'Citizen Client', x: 60, y: 160, type: 'client', color: '#60a5fa' }
    ];

    let honeypotNode = { x: 500, y: 160, active: false };

    function drawCyberSimulation() {
        if (!cyberCtx) return;
        const width = cyberCanvas.width;
        const height = cyberCanvas.height;

        cyberCtx.clearRect(0, 0, width, height);

        // Grid lines
        cyberCtx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
        cyberCtx.lineWidth = 1;
        for (let x = 0; x < width; x += 35) {
            cyberCtx.beginPath();
            cyberCtx.moveTo(x, 0);
            cyberCtx.lineTo(x, height);
            cyberCtx.stroke();
        }

        // Draw Attacker
        if (cyberState === 'ATTACK' || cyberState === 'ISOLATED') {
            const ax = 100;
            const ay = 60;
            cyberCtx.fillStyle = '#ef4444';
            cyberCtx.beginPath();
            cyberCtx.arc(ax, ay, 16, 0, Math.PI * 2);
            cyberCtx.shadowColor = '#ef4444';
            cyberCtx.shadowBlur = 15;
            cyberCtx.fill();
            cyberCtx.shadowBlur = 0;

            cyberCtx.fillStyle = '#fff';
            cyberCtx.font = 'bold 10px JetBrains Mono';
            cyberCtx.fillText('THREAT AGENT', ax - 38, ay - 24);

            cyberCtx.beginPath();
            cyberCtx.moveTo(ax, ay);
            if (cyberState === 'ISOLATED') {
                cyberCtx.lineTo(honeypotNode.x, honeypotNode.y);
                cyberCtx.strokeStyle = '#f59e0b';
                cyberCtx.lineWidth = 3;
            } else {
                cyberCtx.lineTo(cyberNodes[0].x, cyberNodes[0].y);
                cyberCtx.strokeStyle = '#ef4444';
                cyberCtx.lineWidth = 2.5;
            }
            cyberCtx.stroke();
        }

        // Draw Honeypot
        if (honeypotNode.active) {
            cyberCtx.beginPath();
            cyberCtx.arc(honeypotNode.x, honeypotNode.y, 20, 0, Math.PI * 2);
            cyberCtx.fillStyle = 'rgba(245, 158, 11, 0.2)';
            cyberCtx.strokeStyle = '#f59e0b';
            cyberCtx.lineWidth = 2;
            cyberCtx.stroke();
            cyberCtx.fill();

            cyberCtx.fillStyle = '#f59e0b';
            cyberCtx.beginPath();
            cyberCtx.arc(honeypotNode.x, honeypotNode.y, 11, 0, Math.PI * 2);
            cyberCtx.fill();

            cyberCtx.fillStyle = '#fef3c7';
            cyberCtx.font = 'bold 10px JetBrains Mono';
            cyberCtx.fillText('DECOY HONEYPOT', honeypotNode.x - 45, honeypotNode.y + 35);
        }

        // Edges
        const edges = [
            [4, 0], [0, 1], [0, 2], [1, 3], [2, 3]
        ];

        edges.forEach(([i, j]) => {
            const n1 = cyberNodes[i];
            const n2 = cyberNodes[j];

            cyberCtx.beginPath();
            cyberCtx.moveTo(n1.x, n1.y);
            cyberCtx.lineTo(n2.x, n2.y);

            if (cyberState === 'ATTACK' && (i === 0 || j === 1)) {
                cyberCtx.strokeStyle = 'rgba(239, 68, 68, 0.7)';
                cyberCtx.lineWidth = 2.5;
            } else {
                cyberCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
                cyberCtx.lineWidth = 1.6;
            }
            cyberCtx.stroke();
        });

        // Nodes
        cyberNodes.forEach((node, idx) => {
            cyberCtx.beginPath();
            cyberCtx.arc(node.x, node.y, 16, 0, Math.PI * 2);

            if (cyberState === 'ATTACK' && (idx === 0 || idx === 1)) {
                cyberCtx.fillStyle = '#ef4444';
                cyberCtx.shadowColor = '#ef4444';
                cyberCtx.shadowBlur = 18;
            } else {
                cyberCtx.fillStyle = node.color;
                cyberCtx.shadowColor = node.color;
                cyberCtx.shadowBlur = 8;
            }

            cyberCtx.fill();
            cyberCtx.shadowBlur = 0;

            cyberCtx.fillStyle = '#f3f5fb';
            cyberCtx.font = '11px Plus Jakarta Sans';
            cyberCtx.fillText(node.label, node.x - 40, node.y + 30);
        });

        requestAnimationFrame(drawCyberSimulation);
    }

    if (cyberCanvas) drawCyberSimulation();

    if (injectAttackBtn) {
        injectAttackBtn.addEventListener('click', () => {
            cyberState = 'ATTACK';
            honeypotNode.active = false;
            cyberSimStatus.innerHTML = '<span class="indicator threat"></span> Defense State: <strong>CRITICAL :: GNN ANOMALY DETECTED</strong>';
            gnnScore.textContent = '0.94 (Extreme)';
            gnnScore.classList.add('text-danger');
            containmentAction.textContent = 'Flagging Compromised Edges';
            containmentAction.classList.add('text-danger');
            honeypotCount.textContent = '0 Active';
            showToast('🚨 Threat Vector Detected! PyG GNN model calculated 0.94 anomaly score on API Gateway.');
        });
    }

    if (deployHoneypotBtn) {
        deployHoneypotBtn.addEventListener('click', () => {
            cyberState = 'ISOLATED';
            honeypotNode.active = true;
            cyberSimStatus.innerHTML = '<span class="indicator safe"></span> Defense State: <strong>SECURED :: TRAPPED IN DECOY HONEYPOT</strong>';
            gnnScore.textContent = '0.11 (Normalized)';
            gnnScore.classList.remove('text-danger');
            containmentAction.textContent = 'Adversary Trapped & Isolated';
            containmentAction.classList.remove('text-danger');
            containmentAction.classList.add('text-accent');
            honeypotCount.textContent = '1 Active Decoy Trap';
            showToast('🛡️ Dynamic Honeypot deployed! Attacker quarantined away from Core Database.');
        });
    }

    if (resetCyberSimBtn) {
        resetCyberSimBtn.addEventListener('click', () => {
            cyberState = 'NORMAL';
            honeypotNode.active = false;
            cyberSimStatus.innerHTML = '<span class="indicator safe"></span> Defense State: <strong>SECURE</strong>';
            gnnScore.textContent = '0.04 (Low)';
            gnnScore.classList.remove('text-danger');
            containmentAction.textContent = 'Monitoring Edges';
            containmentAction.classList.remove('text-danger');
            containmentAction.classList.remove('text-accent');
            honeypotCount.textContent = '0 Active';
            showToast('🔄 Cyber defense network reset.');
        });
    }


    /* ==========================================================================
       6. SIMULATOR 3: PALIMPSEST MULTISPECTRAL SPLIT REVEALER
       ========================================================================== */
    const spectralContainer = document.getElementById('spectralContainer');
    const spectralRecoveredLayer = document.getElementById('spectralRecoveredLayer');
    const spectralHandle = document.getElementById('spectralHandle');

    if (spectralContainer && spectralRecoveredLayer && spectralHandle) {
        let isDragging = false;

        const updateSplit = (clientX) => {
            const rect = spectralContainer.getBoundingClientRect();
            let posX = clientX - rect.left;
            if (posX < 30) posX = 30;
            if (posX > rect.width - 30) posX = rect.width - 30;

            const percent = (posX / rect.width) * 100;
            spectralRecoveredLayer.style.width = `${percent}%`;
            spectralHandle.style.left = `${percent}%`;
        };

        spectralContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateSplit(e.clientX);
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            updateSplit(e.clientX);
        });

        spectralContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            if (e.touches[0]) updateSplit(e.touches[0].clientX);
        });

        window.addEventListener('touchend', () => {
            isDragging = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isDragging || !e.touches[0]) return;
            updateSplit(e.touches[0].clientX);
        });
    }


    /* ==========================================================================
       7. SIMULATOR 4: OFFLINE HEALTH TRIAGE INFERENCE
       ========================================================================== */
    const runOfflineTriageBtn = document.getElementById('runOfflineTriageBtn');
    const loadCrisisPresetBtn = document.getElementById('loadCrisisPresetBtn');
    const triageResultBadge = document.getElementById('triageResultBadge');
    const triageResultDetails = document.getElementById('triageResultDetails');
    const healthSimStatus = document.getElementById('healthSimStatus');

    const triageHeartRate = document.getElementById('triageHeartRate');
    const triageSpo2 = document.getElementById('triageSpo2');
    const triageTemp = document.getElementById('triageTemp');
    const triageSymptom = document.getElementById('triageSymptom');

    const executeOfflineInference = () => {
        const hr = parseInt(triageHeartRate.value, 10);
        const spo2 = parseInt(triageSpo2.value, 10);
        const temp = parseFloat(triageTemp.value);
        const symptom = triageSymptom.value;

        let isEmergency = false;
        let reasons = [];

        if (spo2 < 90) {
            isEmergency = true;
            reasons.push(`Critical Hypoxemia (SpO2 ${spo2}% < 90%)`);
        }
        if (hr > 130 || hr < 50) {
            isEmergency = true;
            reasons.push(`Cardiac Arrhythmia / Severe Tachycardia (${hr} BPM)`);
        }
        if (temp > 39.5) {
            isEmergency = true;
            reasons.push(`High Hyperpyrexia (${temp}°C)`);
        }
        if (symptom === 'chest_pain' || symptom === 'respiratory') {
            if (spo2 < 93 || hr > 115) {
                isEmergency = true;
                reasons.push(`Acute Cardiovascular / Respiratory Distress syndrome`);
            }
        }

        if (isEmergency) {
            triageResultBadge.className = 'result-badge status-critical';
            triageResultBadge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> PRIORITY 1: IMMEDIATE CRITICAL INTERVENTION';
            triageResultDetails.innerHTML = `
                <strong>Emergency Triggers Identified:</strong> ${reasons.join(', ')}.<br>
                <strong>Offline Heuristic Protocol:</strong> Administer high-flow O2, prepare emergency vascular line, isolate in trauma bay, and trigger immediate regional hospital referral dispatch.
            `;
            healthSimStatus.innerHTML = '<span class="indicator threat"></span> Edge Engine: <strong>ALERT (EMERGENCY CASE FLAGGED)</strong>';
            showToast('🚨 On-device ML engine flagged a Priority 1 emergency case.');
        } else {
            triageResultBadge.className = 'result-badge status-normal';
            triageResultBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> PRIORITY 3: ROUTINE STABLE';
            triageResultDetails.innerHTML = `
                <strong>Diagnostic Inference:</strong> Heart Rate (${hr} BPM), SpO2 (${spo2}%), and Temp (${temp}°C) are within manageable physiological thresholds for outpatient care. No acute hypoxia or shock detected.
            `;
            healthSimStatus.innerHTML = '<span class="indicator safe"></span> Edge Engine: <strong>READY (OFFLINE CACHE ACTIVE)</strong>';
            showToast('✅ Edge inference complete: Patient stable.');
        }
    };

    if (runOfflineTriageBtn) {
        runOfflineTriageBtn.addEventListener('click', executeOfflineInference);
    }

    if (loadCrisisPresetBtn) {
        loadCrisisPresetBtn.addEventListener('click', () => {
            triageHeartRate.value = 142;
            document.getElementById('hrVal').innerText = '142';

            triageSpo2.value = 83;
            document.getElementById('spo2Val').innerText = '83';

            triageTemp.value = 39.8;
            document.getElementById('tempVal').innerText = '39.8';

            triageSymptom.value = 'respiratory';

            executeOfflineInference();
        });
    }


    /* ==========================================================================
       8. PROJECT FILTERING, SEARCH & ARCHITECTURE MODALS (9 SYSTEMS)
       ========================================================================== */
    const projectSearchInput = document.getElementById('projectSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-card');

    let currentFilter = 'all';

    const filterProjects = () => {
        const query = projectSearchInput ? projectSearchInput.value.toLowerCase().trim() : '';

        if (clearSearchBtn) {
            if (query.length > 0) clearSearchBtn.classList.add('visible');
            else clearSearchBtn.classList.remove('visible');
        }

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category') || '';
            const title = (card.getAttribute('data-title') || '').toLowerCase();
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();
            const textContent = card.innerText.toLowerCase();

            const matchesCategory = (currentFilter === 'all') || category.includes(currentFilter);
            const matchesQuery = !query || title.includes(query) || tags.includes(query) || textContent.includes(query);

            if (matchesCategory && matchesQuery) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter = pill.getAttribute('data-filter');
            filterProjects();
        });
    });

    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', filterProjects);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            projectSearchInput.value = '';
            filterProjects();
            projectSearchInput.focus();
        });
    }

    // Comprehensive architecture data for 9 systems
    const projectDetailsData = {
        'drone-defense': {
            tag: 'Electronic Warfare & DRL Defense',
            title: 'Autonomous Drone Mesh RF Jamming Mitigation',
            repoUrl: 'https://github.com/tadesse1235/RF-Jamming-Mitigator-for-Drone',
            summary: 'An autonomous multi-UAV mesh network with adversarial RF jamming mitigation, CNN-based jamming detection, and Deep Reinforcement Learning (DQN) for dynamic frequency hopping spread spectrum (FHSS).',
            steps: [
                'Spectrogram Generation: Continuous sampling of RF signal I/Q channels into spectrogram matrices.',
                'CNN Jammer Classification: Evaluates interference patterns across Barrage, Swept, and Chirp jammer types with 99.4% accuracy.',
                'DQN Agent State Space: Tracks SINR, packet error rates, and channel occupancy over time.',
                'Reward Function: Formulated to maximize packet delivery ratio while penalizing unnecessary channel hopping overhead.',
                'Sub-10ms FHSS Actuation: Seamlessly broadcasts frequency switch tokens across swarm nodes to preserve mesh telemetry.'
            ],
            metrics: [
                { val: '99.4%', label: 'CNN Threat Detection' },
                { val: '<10ms', label: 'Hop Response Latency' },
                { val: '99.8%', label: 'Recovered Packet Delivery' }
            ],
            stack: ['PyTorch', 'Deep Q-Networks (DQN)', 'CNN Spectrogram', 'FastAPI', 'WebSockets', 'Python 3.12']
        },
        'cyber-gnn': {
            tag: 'Graph Neural Networks & Defensive RL',
            title: 'Heterogeneous GNN Cyber-Attack Containment Suite',
            repoUrl: 'https://github.com/tadesse1235/Cyber-Attack-Containment',
            summary: 'An autonomous cyber defense engine using PyTorch Geometric (PyG) HeteroData graphs to track lateral movements, launch dynamic decoy honeypot traps, and deploy an RL agent for precision node containment.',
            steps: [
                'Heterogeneous Topology: Models multi-layered enterprise nodes (Gateways, Auth, Microservices, Databases).',
                'Message Passing Neural Net: Identifies non-linear anomalous edge flows and potential zero-day exploit paths.',
                'Dynamic Honeypots: Programmatically spawns decoy nodes indistinguishable from production servers.',
                'RL Policy Execution: Isolates infected clusters by severing suspicious edges without breaking genuine service connectivity.',
                'Explainable AI (XAI): Perturbation gradient analysis highlights root-cause vulnerability vectors for security teams.'
            ],
            metrics: [
                { val: '98.9%', label: 'Lateral Movement Detection' },
                { val: 'Zero-Day', label: 'Anomaly Defense' },
                { val: '100%', label: 'Database Quarantine Protection' }
            ],
            stack: ['PyTorch Geometric (PyG)', 'Graph Convolutional Net', 'Deep RL Agent', 'FastAPI', 'Python']
        },
        'palimpsest-ai': {
            tag: 'Multispectral Computer Vision & Heritage Preservation',
            title: 'Palimpsest AI: Multispectral Ge\'ez Manuscript Recovery',
            repoUrl: 'https://github.com/tadesse1235/X-Ray-Vision-Manuscripts',
            summary: 'Digital restoration and source separation of ancient Ethiopian Ge\'ez parchment manuscripts where early historical writings were scraped, erased, and overwritten with newer inks.',
            steps: [
                'Multispectral Sensor Array: Captures 16 distinct narrow-band wavelengths from Ultraviolet (365nm) to Near-Infrared (940nm).',
                'Independent Component Analysis (ICA): Deconstructs overlapping pigment layers based on spectral absorption profiles.',
                'Deep Generative Inpainting: Reconstructs degraded and faded Ethiopic character strokes with high fidelity.',
                'Ethiopic OCR Transcription: Converts the recovered codices into machine-readable digital archives.'
            ],
            metrics: [
                { val: '98.2%', label: 'Character Extraction Accuracy' },
                { val: '14th C.', label: 'Manuscript Target Era' },
                { val: '16-Band', label: 'Spectral Wavelengths' }
            ],
            stack: ['Computer Vision', 'Multispectral Imaging', 'PyTorch', 'OpenCV', 'Ge\'ez OCR Engine']
        },
        'citizenhub': {
            tag: 'MERN Stack Municipal Capstone',
            title: 'CitizenHub: Debre Berhan City Administration E-Gov Portal',
            repoUrl: 'https://github.com/tadesse1235/-citizenhub',
            summary: 'An enterprise-scale citizen grievance submission, technician dispatch, and administrative analytics portal developed for Debre Berhan City Administration.',
            steps: [
                '5 Distinct RBAC Roles: Citizen, Field Staff, Department Supervisor, Mayor / Management Office, and System Admin.',
                'Strict Multi-Factor Verification: Validates Ethiopian telephone format (+251...) with encrypted 6-digit server OTPs.',
                '100% Bilingual Amharic 🇪🇹 & English 🌐: Instant dynamic UI translation across all workflows.',
                'Supervisor Dispatch Desk: Allows department heads to assign technicians, set SLA deadlines, and monitor completion photos.',
                'Kebele Heatmap Analytics: Visualizes complaint density across Debre Berhan\'s 9 kebeles to optimize municipal resource planning.'
            ],
            metrics: [
                { val: '5 Roles', label: 'Role-Based Access Control' },
                { val: '9 Kebeles', label: 'Geographic Coverage' },
                { val: '100%', label: 'Bilingual Support' }
            ],
            stack: ['React.js', 'Node.js', 'Express', 'MongoDB / Mongoose', 'JWT Authentication', 'MFA OTP']
        },
        'offline-health': {
            tag: 'Mobile Android & Edge Diagnostic AI',
            title: 'Offline Health Scanner: Rural Clinical Diagnostic Suite',
            repoUrl: 'https://github.com/tadesse1235/Offline-Health-Scanner',
            summary: 'An offline-first Android application designed for remote clinics without internet connectivity, running on-device vital sign evaluation and diagnostic triage heuristics.',
            steps: [
                'Sensor Ingestion: Connects via Bluetooth LE / USB to mobile pulse oximeters and digital thermometers.',
                'Edge Diagnostic Classifier: Evaluates heart rate, SpO2, and symptom vectors completely offline.',
                'Encrypted Local Storage: Uses Room Database with SQLCipher encryption to store sensitive patient histories locally.',
                'Opportunistic Sync: Detects intermittent cellular network to automatically dispatch urgent referral records to base hospitals.'
            ],
            metrics: [
                { val: '100% Offline', label: 'Zero Internet Dependency' },
                { val: 'Sub-Second', label: 'On-Device Triage Inference' },
                { val: 'AES-256', label: 'Encrypted Offline Records' }
            ],
            stack: ['Android SDK', 'Kotlin', 'Java Interop', 'Room DB', 'Material 3', 'Edge ML']
        },
        'android-suite': {
            tag: 'Native Mobile Engineering',
            title: 'Gondar Goha Hotel Android App & Compose Architecture',
            repoUrl: 'https://github.com/Tilahun-Sitotaw/Gondar-Goha-Hotel-Android-App-Project',
            summary: 'Production-ready native Android application built with Kotlin, Jetpack Compose, Material 3, and MVVM architecture for luxury hospitality and tourism reservations.',
            steps: [
                'Declarative Jetpack Compose UI: Modern, reactive interface with Material Design 3 guidelines.',
                'MVVM Architecture: Clear separation of UI state, ViewModels, and data repositories.',
                'Kotlin Coroutines & Flow: Asynchronous data streams for network queries and UI updates.',
                'Room Database Caching: Full offline capability with automated background sync.',
                'Retrofit REST Client: Secure API integration with token-based session handling.'
            ],
            metrics: [
                { val: '100% Native', label: 'Kotlin & Compose' },
                { val: 'Offline-First', label: 'Room Cache' },
                { val: 'MVVM', label: 'Modern Architecture' }
            ],
            stack: ['Kotlin', 'Jetpack Compose', 'Coroutines & Flow', 'Room DB', 'Retrofit', 'Material 3']
        },
        'patientcarehub': {
            tag: 'IoT Remote Patient Monitoring',
            title: 'PatientCareHub & OmniSense Vital Telemetry Dashboard',
            repoUrl: 'https://github.com/tadesse1235/OmniSenses',
            summary: 'An IoT-connected clinical tele-health dashboard that ingests real-time physiological sensor streams (ECG, SpO2, Heart Rate, Blood Pressure) with automated cardiac arrhythmia detection.',
            steps: [
                'Sensor Streaming: WebSocket stream handling high-frequency sensor telemetry from wearable IoT nodes.',
                'Early Warning Anomaly Detection: Algorithmic thresholding for irregular cardiac rhythms and oxygen drops.',
                'Clinician Emergency Triage: Color-coded patient priority queues to accelerate medical response.',
                'Time-Series Archival: Historical trend analysis for long-term clinical diagnostics.'
            ],
            metrics: [
                { val: 'Real-Time', label: 'Sensor Ingestion' },
                { val: '4 Vitals', label: 'Continuous Telemetry' },
                { val: 'Automated', label: 'Cardiac Triage' }
            ],
            stack: ['React', 'Node.js', 'WebSockets', 'Chart.js', 'Timescale Data Engine']
        },
        'cold-chain': {
            tag: 'Embedded IoT & Cold-Chain Logistics',
            title: 'Solar-Powered Cold Chain IoT Telemetry System',
            repoUrl: 'https://github.com/tadesse1235',
            summary: 'Smart temperature and telemetry tracking system engineered for solar-powered vaccine refrigeration in remote regions, ensuring vaccine viability between 2°C and 8°C.',
            steps: [
                'Thermal Monitoring: Multi-probe digital temperature sensors logging internal refrigerator temperatures.',
                'Solar Energy Optimization: Tracks solar PV generation and battery storage levels to anticipate cooling drops.',
                'Low-Bandwidth Telemetry: Sends compressed diagnostic packets over cellular SMS / GPRS when satellite is unreachable.',
                'Emergency Breaching Alarm: Triggers immediate audible and SMS alerts if temperature drifts outside safe margins.'
            ],
            metrics: [
                { val: '2°C - 8°C', label: 'Thermal Window Maintained' },
                { val: 'Low Power', label: 'Solar-Optimized Sleep Cycles' },
                { val: 'SMS / Cloud', label: 'Emergency Telemetry Alerts' }
            ],
            stack: ['IoT Sensors', 'Python', 'C++ / Embedded', 'Telemetry Protocols', 'Solar Energy Management']
        },
        'business-mgmt': {
            tag: 'Enterprise Resource Planning & Java OOP',
            title: 'Enterprise Business Management & OOP System',
            repoUrl: 'https://github.com/tadesse1235/business-management',
            summary: 'Full-spectrum operational suite providing modular inventory tracking, point-of-sale (POS), financial invoicing, automated restock alerts, and management intelligence dashboards.',
            steps: [
                'Inventory Lifecycle: Batch tracking, barcode support, and automated reorder alerts.',
                'Multi-Branch POS: Synchronous transaction processing across retail counters.',
                'Financial Auditing: Detailed ledger generation and VAT-compliant invoicing.',
                'Object-Oriented Design: Clean separation of concerns with Java OOP & Node microservices.'
            ],
            metrics: [
                { val: 'Multi-Branch', label: 'Sync Support' },
                { val: 'Real-Time', label: 'Stock Valuation' },
                { val: 'Automated', label: 'Restock Triggers' }
            ],
            stack: ['Java', 'Node.js', 'Express', 'MongoDB', 'React', 'Chart.js']
        }
    };

    const projectModalOverlay = document.getElementById('projectModalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const detailTriggers = document.querySelectorAll('.btn-detail-trigger');

    const openProjectModal = (projectKey) => {
        const data = projectDetailsData[projectKey];
        if (!data || !modalContent) return;

        let stepsHtml = '';
        data.steps.forEach((step, idx) => {
            stepsHtml += `
                <div class="arch-step-item">
                    <span class="arch-step-num">${idx + 1}</span>
                    <span>${step}</span>
                </div>
            `;
        });

        let metricsHtml = '';
        data.metrics.forEach(m => {
            metricsHtml += `
                <div class="modal-metric-card">
                    <strong>${m.val}</strong>
                    <span>${m.label}</span>
                </div>
            `;
        });

        let stackHtml = '';
        data.stack.forEach(s => {
            stackHtml += `<span class="s-tag">${s}</span>`;
        });

        modalContent.innerHTML = `
            <div class="modal-header-tag">${data.tag}</div>
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-summary">${data.summary}</p>

            <h3 class="modal-section-title"><i class="fa-solid fa-chart-simple text-secondary"></i> Key Performance Benchmarks</h3>
            <div class="modal-metrics-grid">${metricsHtml}</div>

            <h3 class="modal-section-title"><i class="fa-solid fa-layer-group text-secondary"></i> Architecture & Engineering Pipeline</h3>
            <div class="modal-arch-steps">${stepsHtml}</div>

            <h3 class="modal-section-title"><i class="fa-solid fa-code text-secondary"></i> Technology Stack</h3>
            <div class="skill-tags" style="margin-bottom:1.5rem;">${stackHtml}</div>

            <div class="modal-actions">
                <a href="${data.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="fa-brands fa-github"></i> Inspect GitHub Repository <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <button class="btn btn-secondary" id="modalDismissBtn">Close Inspector</button>
            </div>
        `;

        projectModalOverlay.classList.add('open');
        projectModalOverlay.setAttribute('aria-hidden', 'false');

        const modalDismissBtn = document.getElementById('modalDismissBtn');
        if (modalDismissBtn) {
            modalDismissBtn.addEventListener('click', closeProjectModal);
        }
    };

    const closeProjectModal = () => {
        if (projectModalOverlay) {
            projectModalOverlay.classList.remove('open');
            projectModalOverlay.setAttribute('aria-hidden', 'true');
        }
    };

    detailTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectKey = btn.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

    if (projectModalOverlay) {
        projectModalOverlay.addEventListener('click', (e) => {
            if (e.target === projectModalOverlay) closeProjectModal();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeCvModal();
        }
    });


    /* ==========================================================================
       9. CONTACT FORM, CLIPBOARD & TOAST SYSTEM
       ========================================================================== */
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');
    const contactForm = document.getElementById('contactForm');
    const toastContainer = document.getElementById('toastContainer');

    function showToast(message) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-info text-secondary"></i> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    if (copyEmailBtn && emailText) {
        copyEmailBtn.addEventListener('click', () => {
            const email = emailText.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                showToast(`Copied ${email} to clipboard!`);
                setTimeout(() => {
                    copyEmailBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
                }, 2500);
            }).catch(() => {
                showToast(`Email: ${email}`);
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const subject = document.getElementById('contactSubject').value;
            const sendBtn = document.getElementById('sendMsgBtn');

            sendBtn.disabled = true;
            sendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Dispatching Message...';

            setTimeout(() => {
                sendBtn.disabled = false;
                sendBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Direct Message';
                contactForm.reset();
                showToast(`Thank you, ${name}! Your inquiry regarding "${subject}" has been successfully received.`);
            }, 1200);
        });
    }

});
