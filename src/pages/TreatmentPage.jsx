import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import AnimateOnScroll from "../components/AnimateOnScroll";

const TREATMENT_DB = {
  snehana: {
    title: "Snehana",
    subtitle: "Oleation Therapy DEEP TISSUE NOURISHMENT & DETOX PREPARATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/snehana.jpg",
    intro:
      "Snehana is a foundational classical Ayurvedic therapy involving the systematic application of medicated oils and ghee — either internally or externally. It deeply nourishes the body tissues, softens accumulated toxins, and prepares the body channels for complete Panchakarma elimination.",
    // description: "",
    benefits: [
      "Deeply nourishes and lubricates all body tissues",
      "Loosens and mobilises deep-seated toxins",
      "Pacifies aggravated Vata Dosha effectively",
      "Prepares the body for deeper Panchakarma procedures",
    ],
    indications: [
      "Vata Disorders",
      "Dry Skin",
      "Joint Stiffness",
      "Nervous Exhaustion",
      "Pre-Panchakarma Preparation",
    ],
    duration: "30 to 45 Minutes",
    recommendation:
      "3 to 7 days as a preparatory protocol or as independently prescribed by the physician.",
  },
  swedana: {
    title: "Swedana",
    subtitle: "Medicated Steam Therapy CHANNEL OPENING & TOXIN ELIMINATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/swedana.jpg",
    intro:
      "Swedana is a classical heat-based therapy wherein the body is exposed to medicated herbal steam to induce therapeutic perspiration. It dilates the body's internal channels, facilitates the movement of loosened toxins toward the digestive tract, and relieves deep muscular and joint stiffness.",
    // description: "",
    benefits: [
      "Opens blocked channels and facilitates toxin elimination",
      "Relieves stiffness, heaviness, and cold-related disorders",
      "Enhances peripheral blood circulation",
      "Prepares the body optimally for Panchakarma procedures",
    ],
    indications: [
      "Joint Stiffness",
      "Muscular Pain",
      "Respiratory Congestion",
      "Obesity",
      "Pre-Panchakarma Preparation",
    ],
    duration: "15 to 20 Minutes",
    recommendation:
      "3 to 7 days in combination with Snehana or as independently prescribed.",
  },
  vamana: {
    title: "Vamana",
    subtitle: "Therapeutic Emesis KAPHA ELIMINATION & RESPIRATORY RESTORATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/vamana.jpg",
    intro:
      "Vamana is one of the five principal Panchakarma procedures, involving the controlled and medically supervised elimination of excess Kapha Dosha through therapeutic emesis. It is the most powerful classical treatment for conditions rooted in Kapha aggravation and is administered exclusively under qualified physician supervision.",
    // description: "",
    benefits: [
      "Eliminates excess Kapha from the respiratory and digestive tract",
      "Powerfully effective for chronic respiratory disorders",
      "Clears skin conditions rooted in Kapha-Pitta imbalance",
      "Restores digestive strength and metabolic balance",
    ],
    indications: [
      "Asthma",
      "Chronic Bronchitis",
      "Obesity",
      "Skin Disorders",
      "Chronic Indigestion",
      "Kapha Disorders",
    ],
    duration: "2 to 4 Hours (Full Supervised Protocol)",
    recommendation:
      "Single session procedure — preceded by preparatory Snehana and Swedana as prescribed.",
  },
  virechana: {
    title: "Virechana",
    subtitle:
      "Therapeutic Purgation PITTA PURIFICATION & METABOLIC DETOXIFICATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/virechana.jpg",
    intro:
      "Virechana is a core Panchakarma procedure designed to eliminate aggravated Pitta Dosha from the body through medicated purgation. It comprehensively purifies the liver, gallbladder, and gastrointestinal tract — offering lasting relief in conditions rooted in excess heat, inflammation, and toxin accumulation.",
    // description: "",
    benefits: [
      "Purifies the liver, gallbladder, and digestive system",
      "Delivers lasting relief in chronic skin and inflammatory disorders",
      "Balances hormonal function and metabolic activity",
      "Eliminates deep-seated Pitta toxins from the blood and tissues",
    ],
    indications: [
      "Skin Disorders",
      "Acidity",
      "Liver Conditions",
      "Hormonal Imbalances",
      "Inflammatory Disorders",
      "Chronic Constipation",
    ],
    duration: "Half Day Supervised Protocol",
    recommendation:
      "Single session procedure — preceded by preparatory Snehana and Swedana as prescribed.",
  },
  basti: {
    title: "Basti",
    subtitle:
      "Medicated Enema Therapy THE KING OF PANCHAKARMA — VATA PACIFICATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/basti.jpg",
    intro:
      "Regarded as the most significant of all Panchakarma procedures, Basti involves the administration of medicated herbal oils or decoctions through the rectal route. It directly pacifies Vata — the primary Dosha governing all movement and neurological function — making it one of the most therapeutically powerful treatments in classical Ayurveda.",
    // description: "",
    benefits: [
      "Directly pacifies aggravated Vata Dosha at its root",
      "Highly effective for neurological and degenerative conditions",
      "Relieves chronic constipation and irritable bowel disorders",
      "Strengthens joints, bones, and reproductive health",
    ],
    indications: [
      "Neurological Disorders",
      "Joint Degeneration",
      "Chronic Constipation",
      "Reproductive Disorders",
      "Lumbar Conditions",
      "Vata Disorders",
    ],
    duration: "30 to 45 Minutes",
    recommendation:
      "8 to 30 sessions depending on the condition and physician prescription.",
  },
  nasya: {
    title: "Nasya",
    subtitle:
      "Nasal Instillation Therapy CRANIAL PURIFICATION & SENSORY RESTORATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/nasya.jpg",
    intro:
      "Nasya is a specialised Panchakarma procedure involving the therapeutic administration of medicated oils or herbal preparations through the nasal passage — the designated gateway to the brain and cranial structures in classical Ayurveda. It effectively purifies the entire head, neck, and sensory organ region.",
    // description: "",
    benefits: [
      "Purifies and strengthens the cranial and cervical region",
      "Offers significant relief in sinusitis and chronic headaches",
      "Effectively manages cervical spondylosis and hair loss",
      "Improves clarity of the sensory organs and cognitive function",
    ],
    indications: [
      "Sinusitis",
      "Migraine",
      "Cervical Spondylosis",
      "Hair Loss",
      "Memory Concerns",
      "Ear Nose & Throat Disorders",
    ],
    duration: "30 to 45 Minutes",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  raktamokshana: {
    title: "Raktamokshana",
    subtitle:
      "Blood Purification Therapy BLOOD DETOXIFICATION & PITTA ELIMINATION",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/leech_threrapy.jpg",
    intro:
      "Raktamokshana is a unique and powerful Panchakarma procedure involving the controlled purification of vitiated Rakta (blood) to eliminate blood-borne toxins from the body. Performed with strict clinical precision at Ayurmana, it is classically indicated for conditions arising from impurities within the blood tissue.",
    // description: "",
    benefits: [
      "Eliminates deep-seated blood-borne toxins effectively",
      "Powerfully effective for chronic and inflammatory skin disorders",
      "Relieves gout, varicose veins, and localised inflammatory conditions",
      "Purifies excess Pitta accumulated within the Rakta Dhatu",
    ],
    indications: [
      "Chronic Skin Disorders",
      "Gout",
      "Varicose Veins",
      "Abscesses",
      "Pitta Blood Disorders",
      "Inflammatory Conditions",
    ],
    duration: "45 to 60 Minutes",
    recommendation:
      "As prescribed by the physician based on condition severity.",
  },
  shirodhara: {
    title: "Shirodhara",
    subtitle: "Continuous Oil Flow Therapy NEURO-CALMING & STRESS ELIMINATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/shirodhara.jpg",
    intro:
      "Shirodhara is a profoundly therapeutic classical procedure wherein a steady, uninterrupted stream of warm medicated oil is poured gently and continuously over the forehead. It directly calms the central nervous system, pacifies Vata and Pitta Doshas, and induces a state of deep physiological and mental stillness.",
    // description: "",
    benefits: [
      "Profoundly calms the central nervous system",
      "Delivers measurable relief in anxiety, stress, and depression",
      "Highly effective for chronic insomnia and sleep disorders",
      "Balances hormonal activity and psychosomatic conditions",
    ],
    indications: [
      "Anxiety",
      "Chronic Stress",
      "Insomnia",
      "Depression",
      "Hormonal Imbalances",
      "Psychosomatic Disorders",
      "Migraine",
    ],
    duration: "40 to 45 Minutes",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  udvartana: {
    title: "Udvartana",
    subtitle: "Herbal Powder Massage METABOLIC STIMULATION & SKIN REJUVENATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/udvartana.jpg",
    intro:
      "Udvartana is a distinctive and invigorating Ayurvedic therapy involving a vigorous full-body massage using specially formulated herbal powders or pastes. It stimulates lymphatic drainage, breaks down subcutaneous fat deposits, deeply exfoliates the skin, and effectively manages Kapha-dominant disorders.",
    // description: "",
    benefits: [
      "Stimulates lymphatic drainage and metabolic activity",
      "Effectively breaks down subcutaneous fat deposits",
      "Deeply exfoliates, brightens, and rejuvenates the skin",
      "Manages obesity, sluggish metabolism, and Kapha disorders",
    ],
    indications: [
      "Obesity",
      "Kapha Disorders",
      "Sluggish Metabolism",
      "Skin Dullness",
      "Lymphatic Congestion",
      "Diabetic Neuropathy",
    ],
    duration: "30 to 45 Minutes",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  patraPottali: {
    title: "Patra Pottali",
    subtitle: "Leaf Bolus Therapy ANTI-INFLAMMATORY HEAT & HERBAL HEALING",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/pattra%20potli.jpg",
    intro:
      "Patra Pottali is a specialised heat therapy in which fresh medicinal leaves combined with therapeutic herbs and oils are bundled into boluses and applied rhythmically to the body after heating. It delivers deep anti-inflammatory and analgesic benefits directly to affected joints, muscles, and tissues.",
    // description: "",
    benefits: [
      "Delivers deep anti-inflammatory and analgesic relief",
      "Highly effective for arthritis and degenerative joint conditions",
      "Relieves chronic muscular pain and sports-related injuries",
      "Nourishes and strengthens the musculoskeletal system",
    ],
    indications: [
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Muscular Pain",
      "Sports Injuries",
      "Post-Surgical Rehabilitation",
      "Joint Degeneration",
    ],
    duration: "15 to 20 Minutes",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  kansyaThali: {
    title: "Kansya Thali",
    subtitle:
      "Bronze Plate Foot Therapy MARMA ACTIVATION & DEEP NERVOUS RESTORATION",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/kansya%20thali.jpg",
    intro:
      "Kansya Thali is a deeply relaxing and therapeutically significant treatment involving the massage of the feet using a Kansya (bronze) bowl with medicated ghee. In classical Ayurveda, the feet contain vital Marma points directly connected to the organs, nervous system, and overall physiological balance of the entire body.",
    // description: "",
    benefits: [
      "Activates vital Marma points connected to the entire body",
      "Pacifies aggravated Pitta and promotes sound, restful sleep",
      "Relieves chronic fatigue, burning sensations, and mental stress",
      "Improves vision, cognitive clarity, and overall nervous function",
    ],
    indications: [
      "Chronic Fatigue",
      "Insomnia",
      "Burning Sensation in Feet",
      "Eye Disorders",
      "Mental Stress",
      "Pitta Disorders",
    ],
    duration: "15 Minutes",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  katiVasti: {
    title: "Kati Vasti",
    subtitle:
      "Lower Back Treatment TARGETED SPINE REJUVENATION & LUMBAR RESTORATION",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/kati%20vastli.jpg",
    intro:
      "Kati Vasti is a highly effective classical treatment where warm medicated herbal oil is retained on the lower back within a localised reservoir made of black gram dough. This therapy lubricates the spine, relieves pressure on nerve roots, and deeply nourishes the muscle fibres and skeletal structure of the lumbar region.",
    // description: "",
    benefits: [
      "Relieves lower back pain, muscle spasms, and stiffness",
      "Effective for slip disc, lumbar spondylosis, and sciatica",
      "Enhances blood circulation in the lumbosacral region",
      "Strengthens spinal bones, ligaments, and nerve structures",
    ],
    indications: [
      "Chronic Lower Back Pain",
      "Sciatica",
      "Slipped Disc",
      "Lumbar Spondylosis",
      "Spinal Stiffness",
    ],
    duration: "45 Minutes",
    recommendation: "7 to 14 sessions depending on the severity of symptoms.",
  },
  netraTarpana: {
    title: "Netra Tarpana",
    subtitle:
      "Eye Nourishment Therapy OCULAR REJUVENATION & VISION RESTORATION",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/netra%20tapana.jpg",
    intro:
      "Netra Tarpana is a highly specialised classical Ayurvedic procedure wherein warm, freshly prepared medicated ghee is retained over the eyes within a carefully constructed reservoir of black gram dough. This deeply nourishing therapy directly feeds and rejuvenates the ocular tissues, strengthens the optic nerve, and restores the natural vitality of the eyes.",
    // description: "",
    benefits: [
      "Deeply nourishes and rejuvenates the ocular tissues",
      "Strengthens the optic nerve and surrounding eye muscles",
      "Relieves eye strain, dryness, and chronic burning sensations",
      "Improves visual clarity and long-term eye health",
    ],
    indications: [
      "Eye Strain",
      "Dry Eyes",
      "Burning Sensation",
      "Blurred Vision",
      "Computer Vision Syndrome",
      "Refractive Errors",
      "Early Cataract",
    ],
    duration: "20 to 30 Minutes",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  agnikarma: {
    title: "Agnikarma",
    subtitle:
      "Thermal Cauterisation Therapy TARGETED PAIN ELIMINATION & NERVE RESTORATION",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/agni%20karma.jpg",
    intro:
      "Agnikarma is a unique and highly precise classical Ayurvedic para-surgical procedure involving the therapeutic application of controlled heat to specific points on the body using specialised instruments. It directly eliminates Vata and Kapha-based pain at its source — offering relief in conditions that do not respond to conventional therapies.",
    // description: "",
    benefits: [
      "Delivers targeted and lasting relief from chronic pain",
      "Highly effective for conditions resistant to other treatments",
      "Stimulates tissue regeneration and nerve restoration",
      "Eliminates deep-seated Vata and Kapha imbalances at the pain site",
    ],
    indications: [
      "Heel Pain",
      "Plantar Fasciitis",
      "Tennis Elbow",
      "Frozen Shoulder",
      "Chronic Joint Pain",
      "Tendinitis",
      "Nerve Pain",
    ],
    duration: "5 to 10 Minutes",
    recommendation:
      "3 to 5 sessions depending on the condition and physician prescription.",
  },
  viddhakarma: {
    title:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/vidhi%20karmaa.jpg",
    subtitle:
      "Therapeutic Needling Therapy MARMA POINT STIMULATION & DOSHA REBALANCING",
    image: "/images/vision.jpg",
    intro:
      "Viddhakarma is a classical Ayurvedic para-surgical procedure involving the precise needling of specific Marma points and body channels to stimulate energy flow, eliminate blocked Doshas, and restore physiological balance. Rooted in the Sushruta Samhita, it is one of the most targeted and effective classical interventions for pain and functional disorders.",
    // description: "",
    benefits: [
      "Stimulates vital Marma points to restore energy flow",
      "Effectively eliminates localised pain and inflammation",
      "Rebalances aggravated Doshas at specific body channels",
      "Improves nerve conduction and musculoskeletal function",
    ],
    indications: [
      "Chronic Pain",
      "Muscular Disorders",
      "Joint Stiffness",
      "Nerve Impingement",
      "Localised Inflammation",
      "Functional Disorders",
    ],
    duration: "5 to 10 Minutes",
    recommendation:
      "5 to 7 sessions depending on the condition and physician prescription.",
  },
};

const TREATMENT_DB2 = {
  arthritis: {
    title: "Arthritis Care",
    subtitle: "Therapy JOINT LUBRICATION & PAIN RELIEF",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/ayurvedic%20therapy.jpg",
    intro:
      "Our specialised Arthritis Care Therapy at Ayurmana combines classical external procedures including Janu Vasti, Patra Pinda Sweda, and targeted herbal anti-inflammatory oil applications. This comprehensive protocol addresses swelling, restores joint mobility, and arrests the progressive degeneration of cartilage in joints affected by Osteoarthritis or Rheumatoid Arthritis.",
    // description: "",
    benefits: [
      "Reduces joint pain, swelling, and localised inflammation",
      "Improves joint range of motion and functional flexibility",
      "Nourishes the synovial membrane and cartilage tissues",
      "Eliminates Ama (toxins) accumulated within the joint sockets",
    ],
    indications: [
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Gouty Arthritis",
      "Knee Joint Stiffness",
      "Joint Degeneration",
    ],
    // duration: "",
    recommendation:
      "8 to 14 sessions, paired with strict dietary modifications as prescribed.",
  },
  varicoseVeins: {
    title: "Varicose Veins",
    subtitle: "Therapy VENOUS RESTORATION & CIRCULATORY HEALING",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/veins%20therapy.jpg",
    intro:
      "Ayurmana's classical approach to Varicose Veins combines Raktamokshana (blood purification), Lepa (herbal paste applications), and internal Ayurvedic formulations to address the root cause of venous insufficiency. Our therapy strengthens vein walls, improves blood return to the heart, and relieves the pain and heaviness associated with this condition.",
    // description: "",
    benefits: [
      "Strengthens and tones weakened vein walls",
      "Relieves pain, heaviness, and swelling in the legs",
      "Improves venous blood circulation and return",
      "Prevents further progression of venous degeneration",
    ],
    indications: [
      "Varicose Veins",
      "Chronic Venous Insufficiency",
      "Leg Heaviness",
      "Spider Veins",
      "Leg Swelling & Cramps",
    ],
    // duration: "",
    recommendation:
      "10 to 14 sessions depending on severity and physician prescription.",
  },
  insomnia: {
    title: "Insomnia Care",
    subtitle: "Therapy NERVOUS RESTORATION & DEEP SLEEP REVIVAL",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/insomnia%20therapy.jpg",
    intro:
      "At Ayurmana, Insomnia is treated as a manifestation of aggravated Vata and Pitta Doshas affecting the nervous system. Our protocol combines Shirodhara, Abhyanga, Nasya, and internally prescribed herbal nervine formulations to calm the mind, regulate the sleep cycle, and restore deep, natural sleep patterns without dependency.",
    // description: "",
    benefits: [
      "Calms an overactive and restless nervous system",
      "Regulates the natural sleep-wake cycle effectively",
      "Reduces anxiety, mental fatigue, and overthinking",
      "Delivers lasting relief without dependency or side effects",
    ],
    indications: [
      "Chronic Insomnia",
      "Sleep Disorders",
      "Anxiety-Induced Sleeplessness",
      "Restless Mind",
      "Nervous Exhaustion",
    ],
    // duration: "",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  stressStrain: {
    title: "Stress & Strain Management",
    subtitle: "Therapy MIND-BODY RESTORATION & NERVOUS BALANCE",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/stresss%20nd%20mngment.jpg",
    intro:
      "Chronic stress and physical strain are among the most prevalent health concerns of modern life — and among the most effectively addressed by classical Ayurveda. Ayurmana's Stress & Strain protocol combines Shirodhara, Abhyanga, Padabhyanga, and physician-prescribed adaptogenic herbal formulations to restore complete mental and physical equilibrium.",
    // description: "",
    benefits: [
      "Deeply calms the central and autonomic nervous system",
      "Relieves physical tension, muscular fatigue, and body strain",
      "Restores mental clarity, focus, and emotional stability",
      "Rebuilds resilience against future stress and burnout",
    ],
    indications: [
      "Chronic Stress",
      "Mental Fatigue",
      "Burnout",
      "Anxiety",
      "Physical Exhaustion",
      "Psychosomatic Disorders",
    ],
    // duration: "",
    recommendation:
      "7 to 14 sessions depending on the condition and physician prescription.",
  },
  backPain: {
    title: "Back Pain",
    subtitle: "Therapy SPINAL RESTORATION & LUMBAR PAIN RELIEF",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/aurvedic%20neck.jpg",
    intro:
      "Back pain — whether acute or chronic — is primarily a Vata disorder in classical Ayurveda. Ayurmana's Back Pain Therapy combines Kati Vasti, Abhyanga, Swedana, and Basti to address the root cause of lumbar discomfort, decompress affected nerve roots, and restore structural integrity to the spine and surrounding musculature.",
    // description: "",
    benefits: [
      "Relieves acute and chronic lower back pain effectively",
      "Decompresses affected nerve roots and spinal structures",
      "Strengthens the lumbar muscles, ligaments, and spinal bones",
      "Addresses root-cause Vata imbalance for lasting relief",
    ],
    indications: [
      "Chronic Back Pain",
      "Lumbar Spondylosis",
      "Muscle Spasm",
      "Disc Herniation",
      "Postural Back Pain",
      "Sciatica",
    ],
    // duration: "",
    recommendation:
      "8 to 14 sessions depending on severity and physician prescription.",
  },
  cervicalSpondylitis: {
    title: "Cervical Spondylitis",
    subtitle: "Therapy CERVICAL RESTORATION & NECK PAIN RELIEF",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/d1e8cc29-9b28-4e7a-8688-0b7b21563362.jpg",
    intro:
      "Ayurmana's Cervical Spondylitis protocol employs Greeva Vasti, Nasya, Abhyanga, and Swedana to address degeneration and inflammation in the cervical vertebrae. This classical combination relieves nerve compression, reduces inflammation, and restores natural mobility and strength to the neck and shoulder region.",
    // description: "",
    benefits: [
      "Relieves cervical pain, stiffness, and nerve compression",
      "Reduces inflammation and degeneration in cervical vertebrae",
      "Restores full range of motion in the neck and shoulders",
      "Addresses referred pain, numbness, and tingling in the arms",
    ],
    indications: [
      "Cervical Spondylitis",
      "Neck Pain & Stiffness",
      "Cervical Disc Prolapse",
      "Shoulder Pain",
      "Arm Numbness & Tingling",
    ],
    // duration: "",
    recommendation:
      "8 to 14 sessions depending on severity and physician prescription.",
  },
  infertility: {
    title: "Infertility Care",
    subtitle: "Therapy REPRODUCTIVE RESTORATION & HORMONAL BALANCE",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/infertile.jpg",
    intro:
      "Ayurmana offers a deeply personalised and classically grounded Infertility Care protocol for both male and female patients. Combining Uttara Basti, Virechana, Abhyanga, and physician-prescribed Rasayana formulations, our therapy addresses the root hormonal, structural, and nutritional imbalances that contribute to reproductive disorders.",
    // description: "",
    benefits: [
      "Restores hormonal balance and reproductive tissue health",
      "Strengthens and nourishes the Shukra and Artava Dhatus",
      "Addresses structural and functional reproductive disorders",
      "Supports natural conception through complete Dosha rebalancing",
    ],
    indications: [
      "Male & Female Infertility",
      "Hormonal Imbalances",
      "PCOS",
      "Irregular Menstruation",
      "Low Sperm Count",
      "Unexplained Infertility",
    ],
    // duration: "",
    recommendation:
      "14 to 28 sessions as part of a comprehensive reproductive wellness program.",
  },
  heartDisease: {
    title: "Heart Disease & Cardiac Wellness",
    subtitle: "Therapy CARDIOVASCULAR RESTORATION & HEART HEALTH",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/heart%20and%20disease.jpg",
    intro:
      "Ayurmana's cardiac wellness protocol is rooted in classical Hridaya Chikitsa — the Ayurvedic science of heart care. Combining Snehana, Virechana, Hridaya Basti, and physician-prescribed Medhya and Hridya herbal formulations, our therapy supports cardiovascular function, manages cholesterol, and strengthens the heart muscle naturally.",
    // description: "",
    benefits: [
      "Strengthens cardiac muscle function and heart rhythm",
      "Manages cholesterol levels and arterial inflammation",
      "Reduces stress-induced cardiovascular strain",
      "Supports long-term heart health through Rasayana therapy",
    ],
    indications: [
      "Hypertension",
      "High Cholesterol",
      "Cardiac Weakness",
      "Stress-Induced Heart Conditions",
      "Arteriosclerosis",
      "Post-Cardiac Rehabilitation",
    ],
    // duration: "",
    recommendation:
      "14 to 21 sessions as part of a long-term cardiac wellness program.",
  },
  paralysis: {
    title: "Paralysis Rehabilitation",
    subtitle: "Therapy NEURO-MUSCULAR RESTORATION & FUNCTIONAL RECOVERY",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/paralysis.jpg",
    intro:
      "Paralysis, classified as Pakshaghata in classical Ayurveda, is a severe Vata disorder affecting the motor and sensory pathways of the nervous system. Ayurmana's Paralysis Rehabilitation protocol combines intensive Basti, Abhyanga, Swedana, Nasya, and Shashtika Shali Pinda Sweda to restore nerve function, rebuild muscular strength, and support progressive functional recovery.",
    // description: "",
    benefits: [
      "Restores nerve conduction and motor pathway function",
      "Rebuilds muscular strength and coordination progressively",
      "Reduces spasticity, stiffness, and associated pain",
      "Supports comprehensive functional and neurological recovery",
    ],
    indications: [
      "Hemiplegia",
      "Facial Palsy",
      "Post-Stroke Rehabilitation",
      "Paraplegia",
      "Neuromuscular Disorders",
      "Motor Nerve Weakness",
    ],
    // duration: "",
    recommendation:
      "21 to 28 sessions as part of a structured neurological rehabilitation program.",
  },
  pcos: {
    title: "PCOS / PMOS Management",
    subtitle: "Therapy HORMONAL REBALANCING & OVARIAN HEALTH RESTORATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/pcos%20pmod.jpg",
    intro:
      "PCOS and PMOS are increasingly prevalent conditions rooted in aggravated Kapha and Vata Doshas combined with impaired Agni (metabolic fire). Ayurmana's PCOS management protocol combines Virechana, Udvartana, Basti, and precisely prescribed herbal formulations to regulate hormonal cycles, manage cyst formation, and restore ovarian health naturally.",
    // description: "",
    benefits: [
      "Regulates menstrual cycles and hormonal balance naturally",
      "Reduces ovarian cyst formation and associated symptoms",
      "Manages weight gain, acne, and hair loss linked to PCOS",
      "Restores Agni and eliminates Ama contributing to hormonal disorder",
    ],
    indications: [
      "PCOS",
      "PMOS",
      "Irregular Menstruation",
      "Hormonal Imbalance",
      "Ovarian Cysts",
      "Acne",
      "Unexplained Weight Gain",
    ],
    // duration: "",
    recommendation:
      "14 to 21 sessions paired with dietary and lifestyle modifications.",
  },
  psoriasis: {
    title: "Psoriasis Care",
    subtitle: "Therapy SKIN PURIFICATION & CHRONIC SKIN DISORDER MANAGEMENT",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/psoraises.jpg",
    intro:
      "Psoriasis, known as Ekakushtha in classical Ayurveda, is a chronic skin condition rooted in aggravated Vata and Kapha Doshas combined with deep-seated Ama toxins in the Rakta (blood) tissue. Ayurmana's Psoriasis Care protocol combines Virechana, Raktamokshana, medicated Takradhara, and precise internal herbal formulations to purify the blood, calm the immune response, and restore healthy skin function.",
    // description: "",
    benefits: [
      "Purifies the blood and eliminates deep-seated skin toxins",
      "Reduces scaling, inflammation, and psoriatic plaque formation",
      "Calms the aggravated immune response at its root",
      "Restores healthy, clear, and nourished skin naturally",
    ],
    indications: [
      "Psoriasis",
      "Chronic Skin Disorders",
      "Eczema",
      "Skin Inflammation",
      "Autoimmune Skin Conditions",
      "Itching & Scaling",
    ],
    // duration: "",
    recommendation:
      "14 to 21 sessions paired with strict dietary modifications as prescribed.",
  },
  migraine: {
    title: "Migraine Management",
    subtitle: "Therapy CRANIAL DETOXIFICATION & PAIN ELIMINATION",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/migrane.jpg",
    intro:
      "Migraine is classified in classical Ayurveda as Ardhavabhedaka — a condition rooted in aggravated Vata and Pitta Doshas affecting the cranial and sensory channels. Ayurmana's Migraine Management protocol combines Shirodhara, Nasya, Shirobasti, and physician-prescribed herbal nervine formulations to eliminate the root cause of recurrent migraine and restore complete cranial balance.",
    // description: "",
    benefits: [
      "Eliminates the root Dosha imbalance causing recurrent migraine",
      "Reduces frequency, duration, and intensity of migraine episodes",
      "Detoxifies and strengthens the cranial and sensory channels",
      "Restores hormonal and nervous system balance effectively",
    ],
    indications: [
      "Chronic Migraine",
      "Cluster Headaches",
      "Tension Headaches",
      "Hormonal Migraine",
      "Light & Sound Sensitivity",
      "Nausea",
    ],
    // duration: "",
    recommendation:
      "7 to 14 sessions depending on frequency and physician prescription.",
  },
  specialisedTreatments: {
    title: "Specialised Treatment Programs",
    subtitle: "COMPREHENSIVE CLASSICAL AYURVEDIC CARE",
    image: "/images/abhyangam.jpg",
    intro:
      "Beyond our standard treatment protocols, Ayurmana offers a range of specialised, physician-designed treatment programs for complex, chronic, and multi-system conditions. Each specialised program is crafted entirely around the individual patient — integrating multiple classical therapies, internal herbal formulations, dietary guidance, and long-term wellness planning into a single, cohesive healing journey.",
    // description: "",
    benefits: [
      "Comprehensively addresses complex and multi-system conditions",
      "Integrates multiple classical therapies into one personalised program",
      "Combines internal herbal medicine with external therapeutic procedures",
      "Supported by ongoing physician supervision and follow-up care",
    ],
    indications: [
      "Complex Chronic Conditions",
      "Multi-System Disorders",
      "Post-Surgical Rehabilitation",
      "Autoimmune Conditions",
      "Long-Term Wellness & Rejuvenation",
    ],
    // duration: "",
    recommendation:
      "21 to 28 sessions or as designed within the individual treatment program.",
  },
  dietCounselling: {
    title: "Diet Counselling & Nutritional Wellness",
    subtitle: "AYURVEDIC NUTRITION & LIFESTYLE GUIDANCE",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/diet.jpg",
    intro:
      "At Ayurmana, we recognise that no treatment is complete without addressing the foundation of all health — what you eat and how you live. Our Ayurvedic Diet Counselling service is conducted by qualified physicians who assess your Prakriti, current Vikriti, digestive strength (Agni), and lifestyle to design a personalised dietary and nutritional plan rooted in classical Ayurvedic principles.",
    // description: "",
    benefits: [
      "Designs a personalised diet plan aligned with your Prakriti",
      "Strengthens Agni (digestive fire) and eliminates Ama toxins",
      "Supports and enhances the outcomes of all ongoing treatments",
      "Provides practical, sustainable dietary and lifestyle guidance",
    ],
    indications: [
      "All Health Conditions",
      "Weight Management",
      "Digestive Disorders",
      "Metabolic Conditions",
      "Post-Treatment Nutritional Support",
      "General Wellness",
    ],
    // duration: "",
    recommendation:
      "Ongoing consultations as prescribed — typically monthly follow-ups.",
  },
};

export default function TreatmentPage() {
  const { treatmentId } = useParams();
  let treatment = TREATMENT_DB[treatmentId];

  if (!treatment) {
    treatment = TREATMENT_DB2[treatmentId];
  }

  if (!treatment) {
    return (
      <div
        className="container"
        style={{ padding: "120px 0", textAlign: "center" }}
      >
        <h2>Treatment Not Found</h2>
        <p>
          Sorry, the treatment you are looking for is not listed in our
          database.
        </p>
        <Link
          to="/"
          className="btn btn-primary"
          style={{ marginTop: "1.5rem" }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="treatment-detail-page">
      {/* Top Banner */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
          color: "white",
          padding: "100px 0 60px 0",
        }}
      >
        <div className="container">
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-accent)",
              fontSize: "0.9rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            <FaArrowLeft size={12} />
            Back to Treatments
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            {treatment.title}
          </h1>
          <p
            style={{
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            {treatment.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-bg-white)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "4rem",
              alignItems: "flex-start",
            }}
          >
            {/* Left text column */}
            <AnimateOnScroll direction="right">
              <div>
                <h3
                  style={{
                    color: "var(--color-primary-dark)",
                    marginBottom: "1rem",
                    borderBottom: "2px solid var(--color-accent)",
                    paddingBottom: "0.5rem",
                    display: "inline-block",
                  }}
                >
                  Overview
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--color-text-dark)",
                    fontWeight: 500,
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {treatment.intro}
                </p>
                <p style={{ marginBottom: "2rem", lineHeight: "1.7" }}>
                  {treatment.description}
                </p>

                <h3
                  style={{
                    color: "var(--color-primary-dark)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Key Benefits
                </h3>
                <ul style={{ listStyle: "none", marginBottom: "2.5rem" }}>
                  {treatment.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        marginBottom: "0.8rem",
                        fontSize: "0.95rem",
                      }}
                    >
                      <FaCheckCircle
                        style={{
                          color: "var(--color-accent)",
                          marginTop: "0.2rem",
                          flexShrink: 0,
                        }}
                        size={16}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3
                  style={{
                    color: "var(--color-primary-dark)",
                    marginBottom: "1rem",
                  }}
                >
                  Indications
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {treatment.indications.map((ind, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "0.4rem 1rem",
                        borderRadius: "20px",
                        backgroundColor: "var(--color-bg-light)",
                        border: "1px solid var(--color-border)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--color-primary-dark)",
                      }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right details column */}
            <AnimateOnScroll direction="left">
              <div
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-premium)",
                  backgroundColor: "var(--color-bg-light)",
                }}
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  style={{ width: "100%", height: "240px", objectFit: "cover" }}
                />

                <div style={{ padding: "2rem" }}>
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      Session Duration
                    </span>
                    <p
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--color-primary-dark)",
                      }}
                    >
                      {treatment.duration}
                    </p>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      Recommended Course
                    </span>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--color-text-dark)",
                        lineHeight: "1.5",
                      }}
                    >
                      {treatment.recommendation}
                    </p>
                  </div>

                  <Link
                    to="#"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Book Appointment Now
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
