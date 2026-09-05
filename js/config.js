// Configuration for VIS Museum of Industrial Engineering & Operations Research
const STORAGE_KEY = 'vis_industrial_positions';

const TECH_CATEGORIES = [
    {
        "id": "all",
        "label": "Semua Koleksi",
        "icon": "✨"
    },
    {
        "id": "Q1",
        "label": "Riset Operasi & Optimisasi",
        "icon": "📐",
        "title": "Operations Research & Mathematical Programming"
    },
    {
        "id": "Q2",
        "label": "Supply Chain & Logistik",
        "icon": "📦",
        "title": "Supply Chain Engineering & Freight Logistics"
    },
    {
        "id": "Q3",
        "label": "PPIC & Penjadwalan",
        "icon": "🏭",
        "title": "Production Planning, Scheduling & Factory Physics"
    },
    {
        "id": "Q4",
        "label": "Lean & TPS",
        "icon": "⚡",
        "title": "Lean Manufacturing & Toyota Production System"
    },
    {
        "id": "Q5",
        "label": "Kualitas & Six Sigma",
        "icon": "🎯",
        "title": "Quality Engineering & Statistical Process Control"
    },
    {
        "id": "Q6",
        "label": "Ergonomi & Studi Gerak",
        "icon": "🧍",
        "title": "Work Design, Methods Engineering & Industrial Ergonomics"
    },
    {
        "id": "Q7",
        "label": "Tata Letak Pabrik & MHE",
        "icon": "🗺️",
        "title": "Facilities Planning, Plant Layout & Material Handling Systems"
    },
    {
        "id": "Q8",
        "label": "Ekonomi Teknik & Biaya",
        "icon": "💰",
        "title": "Engineering Economy & Industrial Cost Analysis"
    },
    {
        "id": "Q9",
        "label": "Simulasi Sistem Diskrit",
        "icon": "🎲",
        "title": "Discrete-Event Simulation & Stochastic Systems"
    },
    {
        "id": "Q10",
        "label": "Smart Factory & IoT",
        "icon": "🤖",
        "title": "Smart Manufacturing, Industry 4.0 & Cyber-Physical Systems"
    }
];

const SYNONYMS = {
    // Riset Operasi & Optimisasi
    "optimisasi": ["optimization", "simplex", "linear programming", "branch and bound", "duality", "tableau", "dantzig"],
    "simpleks": ["simplex", "dantzig", "pivot", "slack", "surplus", "tableau", "basis"],
    "linear": ["linear programming", "lp", "integer programming", "mip", "simplex"],
    "dijkstra": ["shortest path", "network optimization", "graph", "rute terpendek"],
    "vrp": ["vehicle routing", "tsp", "travelling salesman", "logistik rute"],
    "game theory": ["nash equilibrium", "mcdm", "teori permainan", "ahp", "decision"],
    
    // Supply Chain & Logistik
    "rantai pasok": ["supply chain", "logistik", "freight", "inventory", "bullwhip", "eoq", "scm"],
    "supply chain": ["rantai pasok", "logistik", "freight", "bullwhip", "cross docking", "scm"],
    "persediaan": ["inventory", "eoq", "epq", "safety stock", "holding cost", "reorder point", "rop", "newsvendor"],
    "inventory": ["persediaan", "safety stock", "eoq", "lead time", "bullwhip"],
    "bullwhip": ["bullwhip effect", "beer game", "distorsi permintaan", "supply chain"],
    "gudang": ["warehouse", "asrs", "slotting", "cross docking", "storage", "pallet", "forklift"],
    "logistik": ["logistics", "freight", "transportasi", "fleet", "cold chain", "hub and spoke"],
    
    // PPIC & Penjadwalan
    "ppic": ["production planning", "mrp", "mps", "penjadwalan", "scheduling", "kapasitas"],
    "mrp": ["material requirements planning", "bom", "bill of materials", "lot sizing", "mrp ii"],
    "penjadwalan": ["scheduling", "flow shop", "job shop", "johnson", "shifting bottleneck", "dispatching"],
    "scheduling": ["penjadwalan", "makespan", "tardiness", "gantt chart", "flow shop"],
    "toc": ["theory of constraints", "drum buffer rope", "bottleneck", "throughput accounting", "goldratt"],
    "bottleneck": ["kendala", "leher botol", "drum buffer rope", "throughput", "littles law"],
    "balancing": ["assembly line", "line balancing", "rpw", "takt time", "keseimbangan lini"],
    
    // Lean & TPS
    "lean": ["toyota", "tps", "muda", "kaizen", "jidoka", "kanban", "andon", "poka yoke", "smed", "5s"],
    "toyota": ["tps", "taiichi ohno", "shigeo shingo", "sakichi toyoda", "lean"],
    "kaizen": ["perbaikan terus menerus", "continuous improvement", "gemba", "lean"],
    "muda": ["pemborosan", "waste", "7 wastes", "muri", "mura", "overproduction"],
    "kanban": ["pull system", "kartu kanban", "supermarket", "heijunka", "sinyal produksi"],
    "poka yoke": ["error proofing", "mistake proofing", "anti salah", "sensor", "jidoka"],
    "smed": ["single minute exchange of die", "setup reduction", "pergantian cetakan", "shigeo shingo"],
    "vsm": ["value stream mapping", "takt time", "lead time", "current state", "future state"],
    "5s": ["seiri", "seiton", "seiso", "seiketsu", "shitsuke", "ringkas", "rapi", "resik", "rawat", "rajin"],
    
    // Kualitas & Six Sigma
    "kualitas": ["quality", "six sigma", "spc", "control chart", "shewhart", "cpk", "dmaic"],
    "six sigma": ["dmaic", "motorola", "black belt", "defects per million", "dpmo", "gage rr"],
    "spc": ["statistical process control", "control chart", "peta kendali", "shewhart", "xbar", "r chart"],
    "peta kendali": ["control chart", "xbar", "r chart", "p chart", "c chart", "cusum", "ewma"],
    "cpk": ["process capability", "kapabilitas proses", "cp", "ppk", "sigma level"],
    "dmaic": ["define", "measure", "analyze", "improve", "control", "six sigma"],
    "doe": ["design of experiments", "taguchi", "faktorial", "anova", "rsm", "optimasi parameter"],
    
    // Ergonomi & Studi Gerak
    "ergonomi": ["ergonomics", "biomechanics", "antropometri", "rula", "reba", "niosh", "therbligs"],
    "antropometri": ["anthropometry", "persentil", "dimensi tubuh", "perancangan stasiun kerja"],
    "therblig": ["gilbreth", "17 gerakan dasar", "motion study", "studi gerak"],
    "studi waktu": ["time study", "stopwatch", "waktu baku", "standard time", "allowance", "kelonggaran"],
    "rula": ["rapid upper limb assessment", "postur kerja", "reba", "owas", "musculoskeletal", "msds"],
    "niosh": ["rwl", "recommended weight limit", "lifting equation", "beban angkat", "tulang belakang"],
    
    // Tata Letak Pabrik & MHE
    "tata letak": ["plant layout", "facilities planning", "slp", "muther", "craft", "corelap", "layout"],
    "layout": ["tata letak", "rel layout", "from to chart", "activity relationship", "muther"],
    "slp": ["systematic layout planning", "richard muther", "activity relationship chart"],
    "mhe": ["material handling", "conveyor", "forklift", "agv", "asrs", "crane", "unit load"],
    "agv": ["automated guided vehicle", "amr", "robotik mobile", "material handling"],
    
    // Ekonomi Teknik & Biaya
    "ekonomi teknik": ["engineering economy", "time value of money", "npv", "irr", "b/c ratio", "cash flow"],
    "npv": ["net present value", "kelayakan investasi", "irr", "discount rate", "arus kas"],
    "depresiasi": ["depreciation", "macrs", "garis lurus", "penyusutan aset", "pajak"],
    "break even": ["bep", "titik impas", "cost volume profit", "biaya tetap", "biaya variabel"],
    "abc": ["activity based costing", "target costing", "alokasi biaya overhead", "cost accounting"],
    
    // Simulasi Sistem Diskrit
    "simulasi": ["simulation", "discrete event", "des", "monte carlo", "arena", "antrean", "random variate"],
    "antrean": ["queueing theory", "kendall", "littles formula", "m/m/1", "m/m/c", "panjang antrean"],
    "stokastik": ["stochastic", "probabilitas", "distribusi", "poisson", "eksponensial", "weibull"],
    "system dynamics": ["forrester", "stock and flow", "feedback loop", "umpan balik"],
    
    // Smart Factory & IoT
    "smart factory": ["industry 4.0", "iiot", "digital twin", "mes", "cyber physical", "opc ua"],
    "industri 4.0": ["industry 4.0", "smart manufacturing", "iot", "scada", "digital twin", "ai industri"],
    "digital twin": ["kembaran digital", "simulasi virtual", "sinkronisasi real time", "cyber physical"],
    "mes": ["manufacturing execution system", "isa 95", "mom", "shop floor control", "opc ua"],
    "pdm": ["predictive maintenance", "pemeliharaan prediktif", "analisis vibrasi", "spektrogram", "rul"],
    "cobot": ["collaborative robot", "amr", "robotika industri", "otomasi fleksibel"]
};
