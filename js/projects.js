/* Project data — bilingual (fr/en). No fabricated figures: every number below
   comes directly from the brief content provided by the client. */
const PROJECTS = [
  {
    id: "afri-farmers",
    featured: true,
    tool: "Python",
    badgeClass: "badge-py",
    tagClass: "tag-py",
    link: "https://afri-marketproject.streamlit.app/",
    title: "Afri-Farmers Market",
    sector: { fr: "E-commerce panafricain", en: "Pan-African e-commerce" },
    problem: {
      fr: "La direction manquait de visibilité en temps réel sur les anomalies de ventes et la performance marketing.",
      en: "Leadership lacked real-time visibility into sales anomalies and marketing performance."
    },
    approach: {
      fr: "Dashboard Streamlit avec génération automatique d'insights en langage naturel, analyse géographique et par canal.",
      en: "Streamlit dashboard with automated natural-language insights, geographic and channel-level analysis."
    },
    result: {
      fr: "CA en hausse de 22% vs mois précédent, anomalie détectée : retours Électronique à 14,2% (moyenne 8,3%), email 10x plus performant qu'influenceur.",
      en: "Revenue up 22% month-over-month, anomaly detected: Electronics returns at 14.2% vs 8.3% average, email marketing 10x more effective than influencer channels."
    }
  },
  {
    id: "datalendo",
    featured: true,
    tool: "SQL",
    badgeClass: "badge-sql",
    tagClass: "tag-sql",
    link: "https://github.com/franckkouassi4680/DataLendo_RH",
    title: "Analyse RH DataLendo",
    sector: { fr: "Ressources humaines", en: "Human resources" },
    problem: {
      fr: "15 questions métier RH sans réponse centralisée : effectifs, turnover, rétention, performance.",
      en: "15 unanswered HR business questions: headcount, turnover, retention, performance."
    },
    approach: {
      fr: "Script SQL complet répondant à chaque question, avec rapport de recommandations sur la qualité des données.",
      en: "Full SQL script answering each question, plus a data-quality recommendation report."
    },
    result: {
      fr: "Rétention par cohorte d'embauche passée de 87,5% (2019) à 94,4% (2023).",
      en: "Cohort retention improved from 87.5% (2019 hires) to 94.4% (2023 hires)."
    }
  },
  {
    id: "congo-fashion",
    featured: true,
    tool: "Excel",
    badgeClass: "badge-xl",
    tagClass: "tag-xl",
    link: "https://docs.google.com/spreadsheets/d/1YASqQtwWRNT-Wj9jIsDgQ92C9Rjc8FpqmdbiFQOhX84",
    title: "Congo Fashion",
    sector: { fr: "Retail — audit qualité", en: "Retail — data quality audit" },
    problem: {
      fr: "Une base retail de 23 tables et ~110 000 lignes sans garantie de fiabilité pour la direction.",
      en: "A retail database of 23 tables and ~110,000 rows with no reliability guarantee for leadership."
    },
    approach: {
      fr: "Audit qualité complet (doublons, intégrité référentielle, cohérence TVA/marges, complétude) et dashboard KPI direction.",
      en: "Full quality audit (duplicates, referential integrity, VAT/margin consistency, completeness) plus an executive KPI dashboard."
    },
    result: {
      fr: "Base fiabilisée et dashboard KPI direction livré sur 23 tables et ~110 000 lignes.",
      en: "Reliable dataset and executive KPI dashboard delivered across 23 tables and ~110,000 rows."
    }
  },
  {
    id: "ivoiresante",
    featured: true,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzNkOTEwNmItNGViOS00NDFiLWIyMGYtZWU2MGJkOTFiYzZiIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "IvoireSanté Plus",
    sector: { fr: "Santé — réseau de cliniques", en: "Healthcare — clinic network" },
    problem: {
      fr: "Aucune vue consolidée de la rentabilité sur les 11 cliniques du réseau.",
      en: "No consolidated view of profitability across the network's 11 clinics."
    },
    approach: {
      fr: "Dashboard Power BI multi-établissements : recettes nettes, bénéfices, marge, ventilés par région et par clinique.",
      en: "Multi-facility Power BI dashboard: net revenue, profit and margin broken down by region and clinic."
    },
    result: {
      fr: "Marge nette de 37,7% sur 2021-2025, plus de 15 000 consultations suivies sur 11 cliniques.",
      en: "37.7% net margin over 2021-2025, 15,000+ consultations tracked across 11 clinics."
    },
    image: "assets/top10-powerbi/top10-ivoiresante-plus.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI IvoireSanté Plus : recettes, bénéfices et marge nette par région et par clinique.",
      en: "IvoireSanté Plus Power BI dashboard: revenue, profit and net margin by region and clinic."
    },
    metrics: [
      { fr: "37,7 % de marge nette", en: "37.7% net margin" },
      { fr: "15 000+ consultations", en: "15,000+ consultations" },
      { fr: "11 cliniques suivies", en: "11 clinics tracked" }
    ]
  },
  {
    id: "kin-marche",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZTBjZGU4OWQtZTgzZi00NjU3LTlkMzEtNDM0MmQ0YmI5MzgwIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Kin Marché",
    sector: { fr: "Retail", en: "Retail" },
    result: {
      fr: "899,90M de ventes, 332,13M de profit, marge de 42,3%, 2M d'articles vendus.",
      en: "899.90M in sales, 332.13M profit, 42.3% margin, 2M items sold."
    },
    image: "assets/top10-powerbi/top10-kin-marche.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI Kin Marché : ventes totales, profit, marge moyenne, répartition par méthode de vente et par région.",
      en: "Kin Marché Power BI dashboard: total sales, profit, average margin, breakdown by sales method and region."
    },
    metrics: [
      { fr: "899,90 M de ventes", en: "899.90M in sales" },
      { fr: "42,3 % de marge", en: "42.3% margin" },
      { fr: "2 M d'articles vendus", en: "2M items sold" }
    ]
  },
  {
    id: "cib",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNGVmMDZmZTktMWI5NS00N2Q5LTgxNDgtMzY1MTllNzA2M2ExIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Pilotage des demandes — CIB",
    sector: { fr: "Banque", en: "Banking" },
    result: {
      fr: "35 666 demandes traitées, délai moyen réduit de 4 à 1 jour.",
      en: "35,666 requests processed, average processing time cut from 4 to 1 day."
    },
    image: "assets/top10-powerbi/top10-pilotage-demandes-cib.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI de pilotage des demandes CIB : évolution mensuelle, répartition par unité, délai moyen de traitement.",
      en: "CIB request management Power BI dashboard: monthly trend, breakdown by unit, average processing time."
    },
    metrics: [
      { fr: "35 666 demandes traitées", en: "35,666 requests processed" },
      { fr: "Délai moyen de 3 jours", en: "3-day average turnaround" }
    ]
  },
  {
    id: "rh-210",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYjA0ZmVhMWMtYjVjOS00ODUzLTg2YTYtZTk2MDFkZjQ2MzMyIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Analyse des ressources humaines",
    sector: { fr: "RH", en: "HR" },
    result: {
      fr: "Satisfaction moyenne de 2,79/4, salaire moyen et performance analysés sur 210 employés.",
      en: "Average satisfaction of 2.79/4, average salary and performance analyzed across 210 employees."
    }
  },
  {
    id: "ventes-categorie",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZWFjZjZiNzctODUxNS00NjljLTk0YmUtZWE1ZjYxZmU1ODM2IiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Analyse des ventes — CA par catégorie et marque",
    sector: { fr: "Commerce", en: "Retail" },
    result: {
      fr: "145K ventes, 541,85M de CA, croissance de +106,65% vs année précédente.",
      en: "145K sales, 541.85M revenue, +106.65% growth vs previous year."
    },
    image: "assets/top10-powerbi/top10-ventes-categorie-marque.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI des ventes par catégorie et marque : chiffre d'affaires, évolution mensuelle, répartition par catégorie de produit.",
      en: "Power BI dashboard of sales by category and brand: revenue, monthly trend, breakdown by product category."
    },
    metrics: [
      { fr: "541,85 M de CA", en: "541.85M revenue" },
      { fr: "+106,65 % de croissance", en: "+106.65% growth" },
      { fr: "145K ventes", en: "145K sales" }
    ]
  },
  {
    id: "hospitalieres",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjlhODk2NTMtYTYwNC00YWM1LTk2YzYtYTRlOWY1YTVlNDhmIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Activités hospitalières",
    sector: { fr: "Santé", en: "Healthcare" },
    result: {
      fr: "195 patients suivis, durée moyenne d'hospitalisation de 3,2 jours.",
      en: "195 patients tracked, average length of stay of 3.2 days."
    }
  },
  {
    id: "electronique",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzA0YzRiMmMtMWFjNy00OTk4LWE1ZWQtNzdkODI0ZDIwMmUwIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Ventes électronique grand public",
    sector: { fr: "Tech / électronique", en: "Tech / electronics" },
    result: {
      fr: "241M€ de chiffre d'affaires suivi sur l'ensemble du réseau de vente.",
      en: "241M€ in revenue tracked across the sales network."
    }
  },
  {
    id: "pme",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMDdiZTI1YmYtNTdlMy00Y2I4LTg4ZjQtNTY0YjFkYTkzYmJiIiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Analyse financière PME",
    sector: { fr: "Finance", en: "Finance" },
    result: {
      fr: "248M€ de revenus, 125M€ de dépenses, résultat net de 123M€.",
      en: "248M€ revenue, 125M€ expenses, 123M€ net income."
    }
  },
  {
    id: "british-airways",
    featured: true,
    tool: "Tableau",
    badgeClass: "badge-tb",
    tagClass: "tag-tb",
    link: "https://public.tableau.com/app/profile/kouadio.kouassi/viz/TB3_17511596854080/Tableaudebord",
    title: "British Airways",
    sector: { fr: "Aviation", en: "Aviation" },
    problem: {
      fr: "Comprendre ce qui influence la satisfaction des passagers sur plusieurs années et types d'appareil, sans vue consolidée.",
      en: "Understanding what shapes passenger satisfaction across years and aircraft types, without a consolidated view."
    },
    approach: {
      fr: "Dashboard Tableau : notation par type d'appareil, niveau de divertissement à bord, filtres par continent et type de voyageur, carte interactive.",
      en: "Tableau dashboard: ratings by aircraft type, in-flight entertainment scores, filters by continent and traveler type, interactive map."
    },
    result: {
      fr: "Analyse de la satisfaction passagers sur la période 2017-2021, par type d'appareil et continent.",
      en: "Passenger satisfaction analyzed over 2017-2021, by aircraft type and continent."
    }
  },
  {
    id: "airbnb-nyc",
    featured: false,
    tool: "Tableau",
    badgeClass: "badge-tb",
    tagClass: "tag-tb",
    link: "https://public.tableau.com/app/profile/kouadio.kouassi/viz/AirBnBNYC_17509618216040/TableaudeBordDonneAirBnBNYC",
    title: "AirBnB NYC",
    sector: { fr: "Immobilier / tourisme", en: "Real estate / tourism" },
    result: {
      fr: "Manhattan identifié en tête pour le prix moyen et le nombre d'annonces, évolution 2008-2015.",
      en: "Manhattan identified as the leader in average price and listing volume, 2008-2015 trend."
    }
  },
  {
    id: "sante-cameroun",
    featured: true,
    tool: "R",
    badgeClass: "badge-r",
    tagClass: "tag-r",
    link: "https://019fbe9b-8b6b-a5f9-0520-d24f621cef2b.share.connect.posit.cloud/",
    title: "Santé publique — Cameroun",
    sector: { fr: "Santé publique", en: "Public health" },
    problem: {
      fr: "Manque de suivi consolidé des consultations de santé à l'échelle nationale, par type de service et région.",
      en: "No consolidated tracking of health consultations at national scale, by service type and region."
    },
    approach: {
      fr: "Dashboard R (Posit Cloud) : évolution mensuelle des consultations, répartition par type de service (prénatal, vaccination, suivi, urgences), analyse régionale et démographique.",
      en: "R dashboard (Posit Cloud): monthly consultation trends, breakdown by service type (prenatal, vaccination, follow-up, emergencies), regional and demographic analysis."
    },
    result: {
      fr: "Suivi mensuel des consultations avec analyse régionale et démographique, par type de service.",
      en: "Monthly consultation tracking with regional and demographic analysis, by service type."
    }
  },
  {
    id: "nutrition-nzi",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: null, /* aperçu uniquement : aucun rapport public vérifié */
    title: "Suivi nutritionnel — région du N'Zi",
    sector: { fr: "Santé publique — nutrition infantile", en: "Public health — child nutrition" },
    result: {
      fr: "3 200 enfants suivis (6-59 mois) sur 20 établissements, prévalence de malnutrition aiguë globale de 11,1 %, taux de guérison PCIMA de 83,9 %.",
      en: "3,200 children tracked (6-59 months) across 20 facilities, 11.1% global acute malnutrition prevalence, 83.9% PCIMA recovery rate."
    },
    image: "assets/top10-powerbi/top10-nutrition-nzi.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI du suivi nutritionnel du N'Zi : KPI de prévalence MAG/MAS, évolution mensuelle, répartition par district et par âge.",
      en: "Power BI dashboard of the N'Zi nutrition monitoring project: MAG/MAS prevalence KPIs, monthly trend, breakdown by district and age."
    },
    metrics: [
      { fr: "3 200 enfants suivis", en: "3,200 children tracked" },
      { fr: "11,1 % de prévalence MAG", en: "11.1% GAM prevalence" },
      { fr: "83,9 % de taux de guérison", en: "83.9% recovery rate" }
    ],
    dataNote: {
      fr: "Données simulées à des fins pédagogiques (voir méthodologie dans le dépôt).",
      en: "Simulated data for training purposes (see methodology in the repository)."
    }
  },
  {
    id: "demandes-clients-ens",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: null, /* aperçu uniquement : aucun rapport public vérifié */
    title: "Suivi des demandes clients — Énergie du N'Zi Services",
    sector: { fr: "Énergie — service client", en: "Energy — customer service" },
    result: {
      fr: "15 036 demandes traitées en 18 mois, SLA de résolution de 69,6 %, score de satisfaction (CSAT) de 54,8 %.",
      en: "15,036 requests processed over 18 months, 69.6% resolution SLA, 54.8% CSAT score."
    },
    image: "assets/top10-powerbi/top10-demandes-clients-ens.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI du service client ENS : volumes de demandes, répartition par canal, SLA et satisfaction.",
      en: "Power BI dashboard of ENS customer service: request volumes, channel breakdown, SLA and satisfaction."
    },
    metrics: [
      { fr: "15 036 demandes traitées", en: "15,036 requests processed" },
      { fr: "69,6 % de SLA résolution", en: "69.6% resolution SLA" },
      { fr: "54,8 % de satisfaction (CSAT)", en: "54.8% CSAT" }
    ],
    dataNote: {
      fr: "Données simulées à des fins pédagogiques (voir méthodologie dans le dépôt).",
      en: "Simulated data for training purposes (see methodology in the repository)."
    }
  },
  {
    id: "eha-nzi",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: null, /* aperçu uniquement : aucun rapport public vérifié */
    title: "Suivi eau, hygiène et sécurité alimentaire — N'Zi",
    sector: { fr: "Humanitaire — EHA et sécurité alimentaire", en: "Humanitarian — WASH and food security" },
    result: {
      fr: "Accès à une source d'eau améliorée en hausse de 49,9 % à 76,7 % (+26,8 points) entre les phases de référence et finale, sur 1 475 ménages.",
      en: "Access to an improved water source rose from 49.9% to 76.7% (+26.8 points) between baseline and endline, across 1,475 households."
    },
    image: "assets/top10-powerbi/top10-eha-nzi.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI du suivi EHA et sécurité alimentaire du N'Zi : indicateurs baseline/endline, score de consommation alimentaire, accès à l'eau.",
      en: "Power BI dashboard of the N'Zi WASH and food security monitoring: baseline/endline indicators, food consumption score, water access."
    },
    metrics: [
      { fr: "1 475 ménages évalués", en: "1,475 households assessed" },
      { fr: "+26,8 pts d'accès à l'eau", en: "+26.8 pts water access" },
      { fr: "+16,1 pts de sécurité alimentaire (FCS)", en: "+16.1 pts food security (FCS)" }
    ],
    dataNote: {
      fr: "Données simulées à des fins pédagogiques (voir méthodologie dans le dépôt).",
      en: "Simulated data for training purposes (see methodology in the repository)."
    }
  },
  {
    id: "chaine-approvisionnement-kouto",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: null, /* aperçu uniquement : aucun rapport public vérifié */
    title: "Diagnostic de la chaîne d'approvisionnement en produits de santé — Kouto",
    sector: { fr: "Santé — logistique et chaîne d'approvisionnement", en: "Healthcare — supply chain logistics" },
    result: {
      fr: "41 structures sanitaires diagnostiquées dans le district de Kouto : 43 % de livraisons complètes, distance moyenne de 22 km au dépôt, satisfaction globale de 3,6/5.",
      en: "41 health facilities assessed in the Kouto district: 43% complete deliveries, average 22 km distance to depot, 3.6/5 overall satisfaction."
    },
    image: "assets/top10-powerbi/top10-chaine-approvisionnement-kouto.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI du diagnostic de la chaîne d'approvisionnement en produits de santé du district de Kouto.",
      en: "Power BI dashboard diagnosing the health product supply chain in the Kouto district."
    },
    metrics: [
      { fr: "41 structures interrogées", en: "41 facilities surveyed" },
      { fr: "43 % de livraisons complètes", en: "43% complete deliveries" },
      { fr: "3,6/5 satisfaction globale", en: "3.6/5 overall satisfaction" }
    ]
  },
  {
    id: "qvt-kouto",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: null, /* aperçu uniquement : aucun rapport public vérifié */
    title: "Qualité de vie au travail du personnel — Hôpital Général de Kouto",
    sector: { fr: "Santé — ressources humaines", en: "Healthcare — human resources" },
    result: {
      fr: "Enquête auprès de 55 agents de l'Hôpital Général de Kouto : 56 % rapportent avoir été victimes d'agression, 82 % se disent toujours motivés.",
      en: "Survey of 55 staff members at Hôpital Général de Kouto: 56% report having experienced aggression, 82% say they remain motivated."
    },
    image: "assets/top10-powerbi/top10-qvt-kouto.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI de la qualité de vie au travail du personnel de l'Hôpital Général de Kouto : indicateurs clés et comparaisons par service et profession.",
      en: "Power BI dashboard on quality of working life for Hôpital Général de Kouto staff: key indicators and comparisons by service and profession."
    },
    metrics: [
      { fr: "55 agents interrogés", en: "55 staff surveyed" },
      { fr: "56 % victimes d'agression", en: "56% experienced aggression" },
      { fr: "82 % toujours motivés", en: "82% remain motivated" }
    ]
  },
  {
    id: "denombrement-acp2h",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: null, /* aperçu uniquement : aucun rapport public vérifié */
    title: "Dénombrement des ménages — ACP2-H (région du N'Zi)",
    sector: { fr: "Humanitaire — démographie et ciblage", en: "Humanitarian — demographics and targeting" },
    result: {
      fr: "1 441 ménages recensés sur 12 localités, 7 775 personnes dénombrées, 40,5 % de cheffes de ménage.",
      en: "1,441 households enumerated across 12 localities, 7,775 people counted, 40.5% female-headed households."
    },
    image: "assets/top10-powerbi/top10-denombrement-acp2h.webp",
    imageAlt: {
      fr: "Tableau de bord Power BI du dénombrement des ménages ACP2-H dans la région du N'Zi : ménages, population et répartition par sous-préfecture.",
      en: "Power BI dashboard of the ACP2-H household enumeration in the N'Zi region: households, population and breakdown by sub-prefecture."
    },
    metrics: [
      { fr: "1 441 ménages recensés", en: "1,441 households enumerated" },
      { fr: "7 775 personnes", en: "7,775 people" },
      { fr: "40,5 % de cheffes de ménage", en: "40.5% female household heads" }
    ],
    dataNote: {
      fr: "Données de test (fictives), comme indiqué sur le tableau de bord.",
      en: "Test (simulated) data, as disclosed on the dashboard."
    }
  },
  {
    id: "global-superstore",
    featured: false,
    tool: "Power BI",
    badgeClass: "badge-pbi",
    tagClass: "tag-pbi",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmFiYjQ1MDYtMWJiNy00ZjY2LWJmNmQtZWQzMjkzYjViZDc2IiwidCI6IjFlODMyYTBmLTdiNWQtNGRmMC1hMjg5LWMyM2Y4YzU4MmIwYSJ9",
    title: "Global Superstore — performance des ventes",
    sector: { fr: "Commerce — ventes", en: "Retail — sales" },
    result: {
      fr: "2,25 M$ de ventes, 4 916 commandes, 793 clients ; Technology en tête (0,83 M$), région West en tête (0,71 M$), segment Consumer à 50,9 %.",
      en: "$2.25M in sales, 4,916 orders, 793 customers; Technology leads ($0.83M), West is the top region ($0.71M), Consumer segment at 50.9%."
    }
  }
];

/* Top 10 projets Power BI — classement avec justification, validé avec le client.
   Référence des projets ci-dessus par id ; ordre = rang (1 = meilleur). */
const TOP10_POWERBI = [
  { id: "nutrition-nzi", justification: { fr: "Volume important (3 200 enfants), méthodologie rigoureuse (z-scores OMS), sujet humanitaire à fort impact.", en: "Large sample (3,200 children), rigorous methodology (WHO z-scores), high-impact humanitarian topic." } },
  { id: "demandes-clients-ens", justification: { fr: "15 036 tickets, régression logistique avec odds ratios, modélisation DAX avancée, lecture business claire (SLA, CSAT).", en: "15,036 tickets, logistic regression with odds ratios, advanced DAX modeling, clear business read (SLA, CSAT)." } },
  { id: "eha-nzi", justification: { fr: "Évaluation d'impact baseline/endline sur 1 475 ménages, tests statistiques significatifs, effet projet démontré.", en: "Baseline/endline impact evaluation across 1,475 households, significant statistical tests, demonstrated project effect." } },
  { id: "chaine-approvisionnement-kouto", justification: { fr: "Diagnostic terrain réel sur 41 structures sanitaires, directement lié à mon expérience de référent technique à l'Hôpital Général de Kouto.", en: "Real field diagnostic across 41 health facilities, directly tied to my experience as technical referent at Hôpital Général de Kouto." } },
  { id: "qvt-kouto", justification: { fr: "Enquête terrain réelle, analyse croisée fine par service, profession et ancienneté.", en: "Real field survey, detailed cross-analysis by service, profession and seniority." } },
  { id: "denombrement-acp2h", justification: { fr: "Projet réel de mon ONG (ACP2-H), démographie complète par localité sur 5 pages d'analyse.", en: "Real project from my NGO (ACP2-H), full demographic breakdown by locality across 5 analysis pages." } },
  { id: "ivoiresante", justification: { fr: "Dashboard multi-établissements (11 cliniques), narration business forte (marge nette de 37,7 %).", en: "Multi-facility dashboard (11 clinics), strong business narrative (37.7% net margin)." } },
  { id: "cib", justification: { fr: "Secteur bancaire, impact opérationnel mesurable (délai moyen réduit à 3 jours sur 35 666 demandes).", en: "Banking sector, measurable operational impact (average processing time cut to 3 days across 35,666 requests)." } },
  { id: "ventes-categorie", justification: { fr: "Forte croissance affichée (+106,65 %), lecture commerciale claire par catégorie et marque.", en: "Strong growth shown (+106.65%), clear commercial read by category and brand." } },
  { id: "kin-marche", justification: { fr: "KPIs complets (ventes, profit, marge), bon exemple de pilotage retail.", en: "Complete KPI set (sales, profit, margin), solid retail management example." } }
];
