import lineageSvg from '../assets/bquant-lineage.svg?raw';

export const projects = [
  {
    slug: 'bquant', number: '01', title: 'BQuant', subtitle: 'Data analytics, agentic AI & portfolio optimization',
    category: 'Data engineering & applied AI / Personal project', period: '2025–present', role: 'Developer · ongoing personal project',
    tags: ['Python', 'SQL / dbt', 'DuckDB', 'Agentic AI', 'Qiskit / QAOA'],
    summary: 'A Vietnamese equity research platform combining reliable market data, quantitative trading signals, agentic analysis, and a QAOA-based portfolio optimization prototype.',
    facts: [['16', 'dbt models'], ['79', 'data tests'], ['95/95', 'dbt build passing']],
    repository: 'https://github.com/h2bach/BQuant',
    report: 'projects/bquant/report/',
    glance: [
      'Python ETL loads 10 years of VN30 market data (146,058 daily rows across 62 historical constituents, plus 15-minute bars) into DuckDB and Parquet.',
      '16 dbt models in three layers are guarded by 79 data tests; the latest dbt build completed 95/95 nodes without a failure.',
      'The marts feed a VN30 market report, a FastAPI/NiceGUI analytics app, walk-forward backtesting, LLM agents, and a QAOA portfolio prototype.'
    ],
    question: 'How can market data, quantitative signals, AI reasoning, and constrained portfolio construction work together in one research and decision-support platform?',
    contribution: 'Developed the market-data foundation, SQL analytics, custom Python agents, simulated trading and backtesting workflows, and a QAOA portfolio optimization prototype for Vietnamese equities.',
    flow: [['Market data', 'Python ingestion + DuckDB + Parquet'], ['Quantitative analytics', 'dbt models + technical signals'], ['Agentic reasoning', 'Market + symbol + risk analysis'], ['Portfolio optimization', 'QAOA / QUBO + allocation rules'], ['Trading simulation', 'Orders + cash + settlement + NAV']],
    sections: [
      { heading: 'The data solution', text: 'The platform keeps canonical market observations in DuckDB and materializes Parquet files for downstream charting. Intraday delta data is kept separate from the stable base and reconciled through end-of-day workflows. A file manifest records dataset coverage and supports freshness checks.', bullets: ['Python workflows handle daily, intraday, universe, and market-index data.', 'Five staging models normalize source data; six intermediate models calculate reusable features; five marts expose analytical outputs.', 'SQL uses CTEs, joins, lag-based returns, rolling windows, and conditional quality classifications.'] },
      { heading: 'Lineage', text: 'Six warehouse tables flow through staging, intermediate, and mart layers. The diagram is generated from the dbt manifest.', svg: lineageSvg },
      { heading: 'Modeling decisions', text: 'The daily market-data grain is symbol × trading date. Intraday observations use symbol × bar time. Universe membership is represented separately so calculations can follow the active VN30 universe. Data quality is a first-class output rather than an implicit assumption.', table: [['Layer', 'Examples', 'Purpose'], ['Staging · 5', 'Daily OHLCV, intraday, index, universe, manifest', 'Normalize keys and source observations'], ['Intermediate · 6', 'Returns, liquidity, breadth, freshness', 'Reuse calculations across outputs'], ['Marts · 5', 'Features, market regime, technical signals, quality, agent context', 'Provide consistent downstream datasets']] },
      { heading: 'Reliability & reproducibility', text: 'Generic and custom dbt tests express source and model constraints. A dedicated quality mart surfaces duplicate keys, invalid OHLC values, negative volume, stale data, and manifest mismatches.', bullets: ['Latest dbt build: 16 models and 79 data tests, all passing; the quality mart reports zero invalid-OHLC, negative-volume, or duplicate rows.', 'Ingestion manifests track row counts and coverage alongside the stored data.', 'Freshness checks make stale or missing observations visible to downstream workflows.', 'Python resilience tests exercise dry runs, empty provider responses, and failure handling.'] },
      { heading: 'SQL example: the data-quality gate', text: 'An excerpt from mart_symbol_data_quality. Each active VN30 symbol receives one explicit status that downstream outputs can check.', code: `case
    when coalesce(daily_quality.daily_row_count, 0) = 0 then 'missing'
    when coalesce(daily_quality.invalid_ohlc_rows, 0) > 0 then 'invalid_ohlc'
    when coalesce(daily_quality.negative_volume_rows, 0) > 0 then 'invalid_volume'
    when coalesce(daily_quality.duplicate_symbol_date_rows, 0) > 0 then 'duplicate_rows'
    when coalesce(freshness.stale_days, 999) > 7 then 'stale'
    when coalesce(freshness.manifest_row_count_diff, 0) > 0 then 'manifest_mismatch'
    else 'pass'
end as data_quality_status`, links: [['Full model on GitHub', 'https://github.com/h2bach/BQuant/blob/master/transformations/dbt/models/marts/mart_symbol_data_quality.sql', false]] },
      { heading: 'Analytical outputs', text: 'The marts provide symbol-level returns and rolling volatility, market breadth and regimes, technical signals, and explicit data-quality status. The same outputs drive a management-style VN30 market report and a FastAPI/NiceGUI analytics app with dashboard, symbol explorer, data catalog, data-quality, and SQL Lab pages.', links: [['Open the VN30 market report', 'projects/bquant/report/', true]] },
      { heading: 'Research features on top of the marts', text: 'The marts also feed research components that are kept separate from the data foundation:', bullets: ['Technical-indicator signals and market context.', 'Walk-forward backtesting with a simulated trading ledger.', 'Custom Python LLM agents for market, symbol, and risk analysis.', 'A QAOA portfolio-selection prototype (Qiskit simulation) with a classical fallback.'] },
      { heading: 'Engineering choices', text: 'DuckDB and Parquet keep the research workflow accessible on one machine. The architecture separates data ingestion, analytical transformations, agent reasoning, optimization, and simulated execution so each layer can evolve independently. Current work focuses on making the combined workflow reproducible and its recommendations easier to inspect.' }
    ]
  },
  {
    slug: 'biodiversity', number: '03', title: 'BiodiversityVN', subtitle: 'Scientific data, search & phylogenetics',
    category: 'Data systems / Research platform', period: 'May 2025–June 2026', role: 'Platform extension & integration',
    tags: ['Node.js', 'MongoDB', 'Elasticsearch', 'AngularJS'],
    summary: 'Work on an existing biodiversity platform, connecting structured species data, genetic-sequence search, and phylogenetic analysis for conservation research.',
    facts: [], repository: 'https://github.com/h2bach/dnatracker_clone',
    question: 'How can researchers search species records and move from genetic sequences to a phylogenetic tree within one scientific data platform?',
    contribution: 'Refactored and extended an existing platform for a new database and phylogenetic-inference workflow, connecting structured species records with search and biological analysis tools.',
    flow: [['Import & manage', 'CSV + species + genetic records'], ['Search', 'MongoDB + Elasticsearch + BLAST'], ['Analyze', 'MUSCLE alignment + IQ-TREE']],
    sections: [
      { heading: 'The data solution', text: 'The application stores species and genetic records through Mongoose models, indexes searchable records in Elasticsearch, and exposes workflows through a Node.js/Express API and AngularJS interface.', bullets: ['Species records connect names, classifications, descriptions, accession identifiers, and gene sequences.', 'CSV import maps columns, filters empty genetic data, and merges or deduplicates records.', 'Search combines record retrieval with local DNA matching and an NCBI fallback.'] },
      { heading: 'From data to scientific analysis', text: 'The sequence-search workflow prepares FASTA inputs, parses BLAST results, normalizes accession identifiers, and passes selected sequences into MUSCLE and IQ-TREE. Tree output is produced in Newick format for further use.', table: [['Stage', 'Implementation', 'Purpose'], ['Structured data', 'Species and gene models', 'Keep biological records usable across workflows'], ['Retrieval', 'Elasticsearch + BLAST', 'Support text and sequence search'], ['Analysis', 'MUSCLE + IQ-TREE', 'Align sequences and infer phylogenetic trees']] },
      { heading: 'Integration work', text: 'The project involved extending a legacy scientific application: adapting the database, refactoring existing functionality, and integrating a phylogenetic-inference workflow.', bullets: ['Connect record identifiers across imported files, stored species data, and external search results.', 'Maintain the interfaces between the web application and sequence-analysis tools.', 'Research funding: Ministry of Science and Technology project CN.3780.'] },
      { heading: 'Engineering lessons', text: 'Scientific data systems need explicit identifiers and normalization across database records, imported files, external search results, and analysis tools. Extending a legacy application also requires understanding its existing model and interfaces before introducing new behavior.' }
    ]
  },
  {
    slug: 'neoantigen', number: '02', title: 'MHPE', subtitle: 'Neoantigen prediction with Mixture-of-Experts',
    category: 'Applied machine learning / Research', period: 'June 2024–present', role: 'Researcher · model design & evaluation',
    tags: ['PyTorch', 'BiLSTM', 'Cross-attention', 'Mixture-of-Experts'],
    summary: 'Research on peptide–HLA prediction using sequence representations and multiple expert groups, reported at ICCBB 2025.',
    facts: [['2025', 'ICCBB publication']], repository: null, publication: 'https://doi.org/10.1145/3789938.3789948',
    question: 'How can a model combine different biological signals when predicting peptide–HLA interactions for neoantigen candidate prioritization?',
    contribution: 'Designed and implemented a Mixture-of-Experts framework combining sequence encoding, recurrent modeling, and peptide–HLA cross-attention for neoantigen candidate prioritization.',
    flow: [['Represent', 'BLOSUM62 sequence encoding'], ['Model', 'BiLSTM + cross-attention experts'], ['Combine', 'Gating network + prediction']],
    sections: [
      { heading: 'Biologically informed sequence representations', text: 'The framework represents peptide and HLA sequences using BLOSUM62-based encoding. These representations bring amino-acid similarity into the model and provide the inputs for learning peptide–HLA relationships.' },
      { heading: 'Sequence modeling & cross-attention', text: 'BiLSTM components model the sequence context. Peptide–HLA cross-attention links the two inputs so the prediction can consider their relationship, rather than treating them as isolated sequences.' },
      { heading: 'Expert groups & gating', text: 'The architecture combines multiple expert groups through a gating network. Each group contributes a prediction or representation; the gating mechanism determines how those contributions are combined for the final output. The resulting framework supports peptide–HLA binding and presentation prediction for neoantigen candidate prioritization.' },
      { heading: 'Research & evaluation', text: 'The core work was reported at ICCBB 2025 in a paper on neo-antigen prediction using Mixture-of-Experts for HLA–peptide interactions. Continuing ablation work examines how individual expert groups contribute to predictions.', bullets: ['Represent peptide and HLA inputs using biologically informed sequence encoding.', 'Model sequence relationships through recurrent experts and cross-attention.', 'Combine expert contributions through a gating mechanism and analyze the resulting predictions.'] },
      { heading: 'A complementary engineering perspective', text: 'The project brings together biological sequence data, model design, structured experimentation, and technical writing. Alongside BQuant, it reflects my interest in both the data foundation and the models built on top of it.' }
    ]
  }
];

// Two equally featured projects: applied ML and data engineering.
export const primaryProjects = ['neoantigen', 'bquant'].map(slug => projects.find(project => project.slug === slug));
export const supportingProjects = projects.filter(project => !primaryProjects.includes(project));

export const experience = [
  { date: 'Aug 2023–present', title: 'Research Assistant & Teaching Assistant', company: 'UET · Vietnam National University', text: 'Machine-learning research in cancer genomics and neoantigen discovery. Teaching support in programming, algorithms, computational thinking, probability, and statistics.' },
  { date: 'Feb–Aug 2024', title: 'Data Crawling Collaborator', company: 'LEXENGINE', text: 'Crawled Vietnamese legal documents for LEXCentra and worked with document properties and word2vec-based classification.' },
  { date: 'Oct 2023–Feb 2024', title: 'Data Operations Intern', company: 'Singapore-based hedge fund', text: 'Extracted and prepared data with Python and SQL for researchers, built Plotly and Tableau visualizations, and deployed a Dash dashboard for research outputs.' },
  { date: 'Jun–Nov 2023', title: 'Technical Support Specialist', company: 'Synodus JSC.', text: 'Supported platform users, troubleshooting reported problems and escalating technical issues to developers.' },
  { date: 'May–Sep 2022', title: 'AI Engineer Intern', company: 'GHTK Tech · NLP Department', text: 'Applied fastText to semantic and address retrieval and worked on search functionality.' }
];

export const publications = [
  { title: 'Neo-antigen prediction using Mixture of Experts for HLA-peptides interactions with multi-factors incorporated', venue: 'ICCBB 2025 · ACM', url: 'https://doi.org/10.1145/3789938.3789948' },
  { title: 'Quantum Approach for Constructing Phylogenetic Maximum Parsimony Tree', venue: 'FDSE 2024 · Springer', url: 'https://doi.org/10.1007/978-981-96-0437-1_12' },
  { title: 'An Empirical Heuristic Algorithm for Solving the Student-Project Allocation Problem with Ties', venue: 'ICAART 2023', url: 'https://doi.org/10.5220/0011731800003393' },
  { title: 'An Improved Reverse Distillation Model for Unsupervised Anomaly Detection', venue: 'IMCOM 2023 · IEEE', url: 'https://doi.org/10.1109/IMCOM56909.2023.10035610' }
];
