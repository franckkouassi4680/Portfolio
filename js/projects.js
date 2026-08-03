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
    }
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
    }
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
    }
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
    }
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
  }
];
