/* ============================================================
   Adult Cardiothoracic Anesthesiology journal club data.
   HOW TO ADD A NEW YEAR:
     1. Copy an existing object inside `years: [ ... ]`.
     2. Change `id` (e.g. "2026-2027") and `label`.
     3. Add papers. Each paper looks like:
        {
          title: "Paper name, journal, year",
          url: "https://...",
          question: "Optional: the clinical question (leave out for a bare link)",
          methods: "Optional: methods + results summary",
          takeaway: "Optional: take-away point"
        }
     4. Save — a new tab appears automatically.
   ============================================================ */

window.CARDIAC_DATA = {
  highImpact: {
    subtitle: "Better Living Through Extracorporeal Circuitry",
    categories: [
      {
        name: "Study Design",
        articles: [
          { title: "Understanding RCTs", url: "https://adc.bmj.com/content/90/8/840" },
          { title: "How to Read a Meta-Analysis", url: "https://www.bmj.com/content/315/7109/672" },
        ],
      },
      {
        name: "Anesthetic Agents and Approaches",
        articles: [
          { title: "MYRIAD", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1816476" },
          { title: "SOLVE TAVI", url: "https://www.ahajournals.org/doi/full/10.1161/CIRCULATIONAHA.120.046451" },
          { title: "DEXACET", url: "https://jamanetwork.com/journals/jama/fullarticle/2725234" },
          { title: "EEG Burst Suppression Mediates Delirium", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365754/" },
          { title: "ENGAGES-Canada", url: "https://jamanetwork.com/journals/jama/fullarticle/2819715" },
        ],
      },
      {
        name: "Perioperative Medical Therapy",
        articles: [
          { title: "POISE", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(08)60601-7/fulltext" },
          { title: "POISE II", url: "https://www.nejm.org/doi/full/10.1056/nejmoa1401105" },
          { title: "POISE III", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2201171" },
          { title: "Variation in Inotrope Use in Cardiac Surgery", url: "https://pubs.asahq.org/anesthesiology/article/139/2/122/138077/" },
        ],
      },
      {
        name: "Fluids and Blood Products",
        articles: [
          { title: "ALBICS", url: "https://jamanetwork.com/journals/jama/fullarticle/2794363" },
          { title: "PCC vs FFP for post-cardiotomy bleeding", url: "https://jamanetwork.com/journals/jamasurgery/article-abstract/2793560" },
          { title: "FARES-II, PCC vs FFP", url: "https://jamanetwork.com/journals/jama/fullarticle/2832096" },
          { title: "AHN: Acute Normovolemic Hemodilution in Cardiac Surgery, NEJM 2025", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2504948" },
        ],
      },
      {
        name: "Aortic Valve",
        articles: [
          { title: "Evolut Low Risk", url: "https://www.nejm.org/doi/full/10.1056/nejmoa1816885" },
          { title: "Partner III", url: "https://www.nejm.org/doi/full/10.1056/nejmoa1814052" },
          { title: "PROTECTED TAVR", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2204961" },
        ],
      },
      {
        name: "Mitral Valve",
        articles: [
          { title: "CTSN Ischemic MR", url: "https://www.nejm.org/doi/full/10.1056/nejmoa1312808" },
          { title: "RIME", url: "https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.112.143818" },
          { title: "Surgical LAA occlusion to prevent stroke", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2101897" },
        ],
      },
      {
        name: "Tricuspid Valve",
        articles: [
          { title: "CTSN Tricuspid Repair in Mitral Regurgitation", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2115961" },
          { title: "TRILUMINATE Pivotal", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2300525" },
          { title: "Tricuspid Regurgitation — NEJM 2023 Review", url: "https://www.nejm.org/doi/full/10.1056/NEJMra2216709" },
        ],
      },
      {
        name: "Heart Failure, Mechanical Support & Transplants",
        articles: [
          { title: "MOMENTUM III", url: "https://jamanetwork.com/journals/jama/fullarticle/2796306" },
          { title: "Mild AI at time of LVAD", url: "https://www.jtcvs.org/article/S0022-5223(20)31062-X/fulltext" },
          { title: "Transplantation Outcomes with Donor Hearts after Circulatory Death", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2212438" },
          { title: "INCEPTION: Early Extracorporeal CPR for Refractory OHCA", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2204511" },
          { title: "ECLS-SHOCK: Extracorporeal Life Support in Infarct-Related Cardiogenic Shock", url: "https://www.nejm.org/doi/10.1056/NEJMoa2307227" },
        ],
      },
      {
        name: "CABG",
        articles: [
          { title: "Radial Artery Patency", url: "https://www.nejm.org/doi/full/10.1056/nejmoa040982" },
          { title: "Arterial Revascularization", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1808783" },
          { title: "ROOBY", url: "https://www.nejm.org/doi/full/10.1056/nejmoa1614341" },
          { title: "GOPCABE", url: "https://www.ahajournals.org/doi/full/10.1161/CIRCULATIONAHA.118.035857" },
          { title: "DOORS", url: "https://www.sciencedirect.com/science/article/pii/S0022522314001846" },
          { title: "VISION", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2000803" },
        ],
      },
      {
        name: "Major Aorta Surgery",
        articles: [
          { title: "Spinal Cord Protection — Review", url: "https://www.sciencedirect.com/science/article/pii/S1053077021005309" },
          { title: "Pathophysiology of Aortic Cross-Clamping and Unclamping", url: "https://pubs.asahq.org/anesthesiology/article/82/4/1026/34974/" },
        ],
      },
      {
        name: "Lung Injury",
        articles: [
          { title: "STRESS", url: "https://www.nejm.org/doi/10.1056/NEJMoa2212667" },
          { title: "SIRS", url: "https://www.sciencedirect.com/science/article/pii/S0140673615002731" },
          { title: "DECS", url: "https://jamanetwork.com/journals/jama/fullarticle/1389612" },
          { title: "MECANO", url: "https://www.sciencedirect.com/science/article/pii/S0012369220351527" },
          { title: "Ventilation during CPB — Meta-analysis", url: "https://journals.lww.com/md-journal/FullText/2017/03240/Ventilation_during_cardiopulmonary_bypass_for.63.aspx" },
          { title: "Intensive Recruitment Strategy RCT", url: "https://jamanetwork.com/journals/jama/fullarticle/2612913" },
          { title: "PROVECS", url: "https://link.springer.com/article/10.1007/s00134-019-05741-8" },
          { title: "PROVHILO", url: "https://www.sciencedirect.com/science/article/pii/S0140673614604165" },
          { title: "IMPROVE", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1301082" },
          { title: "High vs Low PEEP in Obese Non-Cardiac Surgery", url: "https://jamanetwork.com/journals/jama/fullarticle/2735541" },
          { title: "Driving Pressure in Thoracic Surgery", url: "https://pubs.asahq.org/anesthesiology/article/130/3/385/19222/" },
          { title: "iPROVE-OLV: Individualised Open-Lung Ventilation during OLV — Multicenter RCT", url: "https://pubmed.ncbi.nlm.nih.gov/38065200/" },
          { title: "Driving Pressure in Abdominal Surgery", url: "https://journals.lww.com/anesthesia-analgesia/Fulltext/2021/11000/Driving_Pressure_Guided_Individualized_Positive.18.aspx" },
          { title: "Mechanical Power and Postoperative Respiratory Failure — Retrospective Cohort", url: "https://pubs.asahq.org/anesthesiology/article/137/1/41/136245/" },
          { title: "PRIME-AIR", url: "https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(25)00040-2/abstract" },
        ],
      },
      {
        name: "Inflammation",
        articles: [
          { title: "The Systemic Inflammatory Response to Cardiac Surgery: Implications for the Anesthesiologist", url: "https://pubs.asahq.org/anesthesiology/article/97/1/215/40155/" },
          { title: "Phenotypes of CPB-induced Inflammatory Response", url: "https://journals.lww.com/anesthesia-analgesia/fulltext/2023/03000/derivation_and_validation_of_clinical_phenotypes.13.aspx" },
        ],
      },
      {
        name: "Echocardiography",
        articles: [
          { title: "Association of E/e′ with CV Events — Retrospective Cohort", url: "https://pubmed.ncbi.nlm.nih.gov/36332804/" },
          { title: "Mild AI at time of LVAD", url: "https://www.jtcvs.org/article/S0022-5223(20)31062-X/fulltext" },
        ],
      },
    ],
  },

  years: [
    {
      id: "2025-2026",
      label: "2025 – 2026",
      papers: [
        {
          title: "Association Between Surgeon-Anesthesiologist Dyad Familiarity and Operative Mortality: A Retrospective Study at a Large Academic Cardiac Surgery Program; Anesth Analg 2025",
          url: "https://pubmed.ncbi.nlm.nih.gov/41032461/",
          question: "Does increased familiarity amongst anesthesiologists and surgeons (represented as dyads) improve outcomes in patients undergoing cardiac surgery?",
          methods: "Retrospective cohort study at a single large academic medical center, 2011–2024 (16,811 cases). Dyads were unique pairings that worked together on cases. Primary outcome: operative mortality; secondary outcomes: surgical length, ICU LOS, hospital LOS, adverse events. Higher-familiarity dyads had significantly lower operative mortality and significant decreases in all other measured secondary outcomes except sternal wound infections.",
          takeaway: "Increased surgeon–anesthesiologist familiarity may lead to better outcomes, but better-quality multicenter studies are warranted. Supports the idea of dedicated anesthesia teams for certain surgical subspecialties.",
        },
        {
          title: "Intraoperative Venous Congestion Rather than Hypotension Associated with AKI after Cardiac Surgery: Retrospective Cohort; BJA 2022",
          url: "https://www.bjanaesthesia.org/article/S0007-0912(22)00063-0/fulltext",
          question: "In adults undergoing cardiac surgery, is increased intraoperative venous congestion and/or hypotension associated with postoperative AKI and/or AKD (acute kidney disease)?",
          methods: "Single-center (China) retrospective cohort study; exposures were low MAP (≤55, ≤65, ≤75 mmHg) and high CVP (≥12, ≥16, ≥20 mmHg); primary outcome was incidence of AKI and AKD. AKI was statistically associated with both hypotension and venous congestion, while AKD was statistically associated with venous congestion.",
          takeaway: "While intraoperative hypotension is commonly viewed as a risk factor for postoperative kidney dysfunction in cardiac surgery, avoiding intraoperative venous congestion (i.e., proactively treating/avoiding high CVP) may also be beneficial.",
        },
        {
          title: "OR Extubation after Cardiac Surgery Is Associated with Decreased Incidence of In-Hospital New Postoperative Atrial Fibrillation; Journal of Clinical Anesthesia, 2024",
          url: "https://www.sciencedirect.com/science/article/abs/pii/S0952818024002654",
        },
      ],
    },
    {
      id: "2024-2025",
      label: "2024 – 2025",
      papers: [
        {
          title: "PROTECTION — RCT of Amino Acids for AKI in Cardiac Surgery; NEJM 2024",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2403769",
          question: "In elective cardiac surgeries requiring CPB, does an IV infusion of amino acids (isopuramin 10%) at the time of surgery, compared to placebo (LR), decrease the incidence of postoperative AKI in the first week?",
          methods: "Multicenter RCT measuring baseline creatinine and postoperative (0–7 day) AKI by KDIGO criteria. AKI developed in 26.9% of the amino acid group vs 31.7% of the placebo group (RR 0.85; 95% CI 0.77–0.94; P = 0.002). No differences in secondary outcomes (hospital/ICU LOS, RRT initiation, MV duration).",
          takeaway: "IV amino acids may reduce the risk of AKI after elective cardiac surgery. Well-designed and executed, but limited by patient-demographic generalizability and lack of additional AKI indicators.",
        },
        {
          title: "ATACAS RCT: Stopping vs. Continuing Aspirin before Coronary Artery Surgery; NEJM 2016",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1507688",
          question: "Does taking aspirin before coronary artery bypass surgery reduce the risk of death or thrombotic complications (nonfatal MI, stroke, PE, renal failure, or bowel infarction)?",
          methods: "Patients randomized to aspirin or placebo and monitored for 30 days post-CABG. No significant differences in the primary outcome (death or thrombotic events) or secondary outcomes.",
          takeaway: "Aspirin is safe to use in the perioperative period of coronary artery bypass surgery.",
        },
        {
          title: "Dexamethasone for Cardiac Surgery: A Practice Preference Comparative Effectiveness Trial; Anesthesiology 2024",
          url: "https://pubs.asahq.org/anesthesiology/article/141/5/859/141590/",
          question: "In adults under 75 undergoing elective cardiac surgery requiring CPB, does high-dose dexamethasone increase the number of home days after surgery and decrease the risk of serious complications?",
          methods: "Patients randomized prior to consent, 2:1 favoring site standard of care, followed for 30 days; treatment group received one dose of dexamethasone 1 mg/kg (up to 100 mg). No significant difference in days alive and at home after surgery.",
          takeaway: "High-dose dexamethasone may decrease ICU LOS but does not increase alive-and-home days or significantly affect serious complication risk after cardiac surgery.",
        },
        {
          title: "Extracorporeal Blood Purification and AKI — SIRAKI02 RCT; JAMA 2024",
          url: "https://jamanetwork.com/journals/jama/fullarticle/2824929",
          question: "Does extracorporeal blood purification (EBP) during CPB reduce the risk of AKI after nonemergent cardiac surgery?",
          methods: "Double-blinded RCT comparing AKI rate (KDIGO) among patients undergoing EBP through an acrylonitrile-sodium methallylsulfonate/polyethylenimine membrane during CPB vs CPB only; statistically significant reduction in AKI in the EBP cohort (28.4% vs 39.7%, P = 0.03).",
          takeaway: "EBP may reduce AKI risk after CPB, though the study is underpowered for secondary outcomes and cannot isolate the EBP membrane effect from the CRRT circuit it was inserted into, or determine economic justification.",
        },
        {
          title: "PROTECTED TAVR — Cerebral Embolic Protection during TAVR; NEJM 2022",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2204961",
          question: "Does use of the Sentinel device during TAVR decrease the incidence of periprocedural stroke?",
          methods: "Multicenter prospective RCT of 3000 patients randomized to Sentinel or no Sentinel during TAVR, with pre- and postprocedural neurologic exams. No significant difference in periprocedural stroke incidence.",
          takeaway: "Sentinel use did not decrease periprocedural stroke incidence overall, but did decrease debilitating stroke and was shown to be safe.",
        },
        {
          title: "Safety and Efficacy of Colchicine for Prevention of Postoperative AFib in Cardiac Surgery: Meta-analysis; EP Europace 2023",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10318383/",
          question: "Is colchicine safe and effective at preventing postoperative atrial fibrillation after cardiac surgery compared to placebo?",
          methods: "Systematic review and meta-analysis of eight RCTs: colchicine reduced postop AFib risk (RR 0.70, 95% CI 0.59–0.82) but conferred higher risk of nausea/vomiting/diarrhea (RR 2.20, 95% CI 1.38–3.51) and a nonsignificant increase in discontinuation.",
          takeaway: "Perioperative colchicine reduces postoperative AFib in cardiac surgery patients, but use may be limited by a lack of data on effective dosing, duration, and comparison to other antiarrhythmics.",
        },
        {
          title: "FARES-II: Prothrombin Complex Concentrate vs Frozen Plasma for Coagulopathic Bleeding in Cardiac Surgery; JAMA 2025",
          url: "https://jamanetwork.com/journals/jama/fullarticle/2832096",
          question: "Is PCC noninferior and/or superior to FFP in achieving effective hemostasis in patients with coagulopathic bleeding during cardiac surgery?",
          methods: "Unblinded randomized noninferiority trial of 420 patients (US/Canada): effective hemostasis in 77.9% (PCC) vs 60.4% (FFP) (difference 17.6%; 95% CI 8.7–26.4%; P < .001); PCC patients also received fewer RBC/platelet/non-investigational FFP transfusions, with fewer serious adverse events and AKI.",
          takeaway: "PCC is safe and superior to FFP for achieving hemostasis and can decrease transfusion requirements in patients requiring coagulation factor repletion during cardiac surgery.",
        },
        {
          title: "B-FREE: BZD-Free Cardiac Anesthesia for Reduction of Postoperative Delirium; JAMA Surgery 2025",
          url: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2829514",
          question: "Does an institutional policy of restricted intraoperative benzodiazepine administration during cardiac surgery reduce postoperative delirium?",
          methods: "Multiperiod, patient- and assessor-blinded, cluster-randomized crossover trial at 20 North American cardiac centers (19,768 patients) comparing restrictive (no benzodiazepines) vs liberal (≥0.03 mg/kg IBW midazolam-equivalent) use, delirium assessed up to 72 hrs. No statistically significant difference in delirium.",
          takeaway: "At an institutional level, restrictive intraoperative benzodiazepine use did not reduce delirium within 72 hrs and was not associated with increased patient-reported awareness — but patient-level effects need further study.",
        },
        {
          title: "TRICS III; NEJM 2017",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1711818",
          question: "Among cardiac surgery patients, is a restrictive transfusion strategy noninferior in safety and effectiveness compared to a liberal strategy?",
          methods: "Multicenter, unblinded noninferiority RCT of 5243 adults randomized to restrictive (Hgb > 7.5 g/dL) or liberal (Hgb > 9.5 intraop / 8.5 in ICU) transfusion. No difference in the primary composite outcome (restrictive 11.4% vs liberal 12.5%; risk difference 1.11, 95% CI −2.93–0.72; OR 0.90, 95% CI 0.76–1.07).",
          takeaway: "In cardiac surgery with CPB, a restrictive transfusion strategy is noninferior to a liberal strategy for death, MI, stroke, and renal failure with dialysis.",
        },
      ],
    },
    {
      id: "2023-2024",
      label: "2023 – 2024",
      papers: [
        { title: "Inhaled Epoprostenol vs Nitric Oxide for RV Support after Major Cardiac Surgery — RCT", url: "https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.122.062464" },
        { title: "Arterial Hyperoxia During ECMO and Mortality in Patients With Cardiogenic Shock", url: "https://www.ahajournals.org/doi/10.1161/CIRCHEARTFAILURE.122.010328" },
        { title: "Left Atrial Appendage Occlusion during Cardiac Surgery to Prevent Stroke", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2101897" },
        { title: "Posterior Pericardial Window for AFib — Adaptive RCT", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02490-9/fulltext" },
        { title: "TAVI vs Surgical AVR, Moderate Risk — UK TAVI RCT", url: "https://jamanetwork.com/journals/jama/fullarticle/2792251" },
        { title: "ESP Block for Cardiac Surgery — RCT, JCVA", url: "https://www.sciencedirect.com/science/article/pii/S1053077018303835" },
        { title: "Normovolemic Hemodilution Does Not Reduce Allogeneic RBC Transfusion in Cardiac Surgery: Propensity-Score Matched Study", url: "https://www.jcvaonline.com/article/S1053-0770(23)00911-4/fulltext" },
        { title: "LVAD + Concurrent Valve Procedure — Observational", url: "https://www.jtcvs.org/article/S0022-5223(22)00498-6/fulltext" },
        { title: "Platelet Transfusion in Cardiac Surgery: An Entropy-Balanced, Weighted, Multicenter Analysis", url: "https://journals.lww.com/anesthesia-analgesia/fulltext/2024/03000/platelet_transfusion_in_cardiac_surgery__an.10.aspx" },
      ],
    },
    {
      id: "2022-2023",
      label: "2022 – 2023",
      papers: [
        { title: "ALBICS Trial — Albumin vs Ringer's", url: "https://jamanetwork.com/journals/jama/fullarticle/2794363" },
        { title: "SUSTAIN CSX — Selenium", url: "https://jamanetwork.com/journals/jamasurgery/fullarticle/2800335" },
        { title: "PCC vs FFP for Post-CPB Coagulopathy and Bleeding", url: "https://jamanetwork.com/journals/jamasurgery/article-abstract/2793560" },
        { title: "Videolaryngoscopy for TEE Probe Insertion — RCT", url: "https://www.sciencedirect.com/science/article/abs/pii/S1053077022005341" },
        { title: "Volatile vs TIVA for Delirium after Valve Surgery", url: "https://journals.lww.com/anesthesia-analgesia/Fulltext/2023/01000/Volatile_Versus_Total_Intravenous_Anesthesia_on.11.aspx" },
        { title: "Association of E/e′ with CV Events in a Diverse Population", url: "https://www.onlinejase.com/article/S0894-7317(22)00570-3/fulltext" },
        { title: "TRILUMINATE Pivotal — Transcatheter TVR for TR", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2300525" },
        { title: "Processed EEG in Cardiac Surgery: A Retrospective Analysis", url: "https://www.sciencedirect.com/science/article/abs/pii/S1053077022002105" },
        { title: "Impella vs ECMO — Systematic Review and Meta-Analysis", url: "https://journals.lww.com/shockjournal/pages/articleviewer.aspx?year=2022&issue=11000&article=00001&type=Fulltext" },
      ],
    },
    {
      id: "2021-2022",
      label: "2021 – 2022",
      papers: [
        { title: "MYRIAD RCT", url: "https://www.nejm.org/doi/10.1056/NEJMoa1816476" },
        { title: "TIVA Associated with Survival after CABG — Retrospective", url: "https://pubmed.ncbi.nlm.nih.gov/32762879/" },
        { title: "Postcardiotomy VA ECMO With vs Without IABP — Retrospective Study", url: "https://www.sciencedirect.com/science/article/pii/S1053077022001173" },
        { title: "High-Sensitivity Troponin I after Cardiac Surgery and 30-Day Mortality", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2000803" },
        { title: "High vs Normal BP in Relation to RV Function after Cardiac Surgery — RCT", url: "https://www.sciencedirect.com/science/article/pii/S1053077021001890" },
        { title: "EEG Burst Suppression on CPB in the Elderly Mediates Postop Delirium", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365754/" },
        { title: "Hyperoxia and Antioxidants for MI in Non-Cardiac Surgery — 2×2 Factorial RCT", url: "https://pubs.asahq.org/anesthesiology/article/136/3/408/118376/" },
        { title: "Concomitant Tricuspid Repair in Patients with Degenerative MR — RCT", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2115961" },
        { title: "In-Hospital Mortality and Low Cardiac Output Syndrome With Morning vs Afternoon Cardiac Surgery — Retrospective Cohort", url: "https://pubs.asahq.org/anesthesiology/article/134/4/552/115299/" },
      ],
    },
  ],
};
