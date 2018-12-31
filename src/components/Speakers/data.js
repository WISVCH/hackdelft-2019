import schaart  from 'assets/speakers/dennis_schaart.jpg'
import ridder   from 'assets/speakers/jeroen_de_ridder.jpg'
import klein    from 'assets/speakers/stefan_klein.jpg'
import brinkman from 'assets/speakers/willem_paul_brinkman.jpg'
import wehrens  from 'assets/speakers/rik_wehrens.jpg'
import leenstra from 'assets/speakers/b_leenstra.jpg'

export default [
  {
    links: [],
    img: schaart,
    name: 'Optiver',
    company: 'Optiver',
    bio: `Optiver is a proprietary trading firm and market maker for various exchange-listed financial instruments. Its name derives from the Dutch optie verhandelaar, or "option trader".[2][3] The company is privately owned. Optiver trades listed derivatives, cash equities, exchange-traded funds, bonds and foreign exchange.`,
    title: `Towards the Next Generation of Proton Therapy`,
    abstract: `About half of all cancer patients in the Netherlands receive some form of radiotherapy. Ideally, a sufficient radiation dose is given to the tumor to kill all cancer cells, without inducing unwanted side effects. In reality, compromises always have to be made. The majority of patients are irradiated with high-energy X-ray photons. For radiotherapy purposes, the physical properties of protons are much more attractive. However, the characteristic dose profile, with a sharp dose falloff behind the so- called Bragg peak, also makes proton therapy sensitive to deviations from the pre-calculated treatment plan. Examples are patient setup errors, inter-fraction anatomical changes, intra-fraction organ motion, and range uncertainty. These phenomena may, if not adequately dealt with, result in severe overdosing to healthy tissues and/or underdosing in the tumor. In photon radiotherapy, image guidance has developed to a point where highly optimized dose distributions are applied routinely and safely in the clinic. To fully exploit the physical advantages of protons, similar approaches need to be developed in proton therapy. Novel technology, mathematics, computer science, and medical physics all play an important role in this multidisciplinary challenge. The Holland Proton Therapy Centre (HollandPTC), a joint initiative by Erasmus MC, LUMC and TU Delft, has the ambition to realize the full potential of proton therapy, so as to improve clinical outcomes while reducing the side effects of therapy. This talk presents some of HollandPTC’s research activities and how they will contribute to the development of the next generation of proton therapy.`,
  },
  {
    links: [],
    img: ridder,
    name: 'Jeroen de Ridder',
    company: 'UMC',
    bio: `Dr. de Ridder is a Principle Investigator / Associate Professor at the Center for Molecular Medicine of the UMC Utrecht. He obtained his Master’s degree in Electrical Engineering from the Delft University of Technology (TUD) in 2005 (cum laude). Subsequently, he started a PhD to work on pathway discovery in insertional mutagenesis data. This work was carried out in the Delft Bioinformatics lab and at the Netherlands Cancer Institute. Dr. de Ridder was an Assistant Professor in the Delft Bioinformatics Lab from 2010 to 2016, after which he moved into his current position at the UMC Utrecht.`,
    title: `Bioinformatics - Big data analytics to unravel disease biology`,
    abstract: `Modern day biology is propelled by machines that can measure enormous amounts of data. It may therefore not be so surprising that bioinformatics is at the heart of many contemporary discoveries in molecular biology. In the de Ridder lab we create and apply innovative data science methods to deal with the challenges that arise as a result of these big data. Our research efforts are always inspired by a biological question and are often based on concepts from machine learning and data integration. We also heavily rely on high-performance computing and statistics. In this talk, I will present several research results, including mapping the 3D folding of the DNA and predicting the efficacy of cancer treatment. `,
  },
  {
    links: [],
    img: klein,
    name: 'Stefan Klein',
    company: 'Erasmus MC',
    title: `Image Analysis and Machine Learning for Early Diagnosis of Neurodegenerative Diseases`,
    bio: `Stefan Klein is Associate Professor at Erasmus MC, University Medical Centre Rotterdam, leading a research line on the development and evaluation of advanced medical image analysis techniques. His research interests include image registration, segmentation, reconstruction, quantification, radiomics, and machine learning. Stefan obtained his MSc in Mechanical Engineering at the University of Twente, and received a PhD degree from the University of Utrecht (UMC Utrecht, Image Sciences Institute) for his research on optimisation methods for medical image registration. He is co-principal developer of the open source image registration software Elastix, which is used by researchers and industry worldwide. He was general chair of the 8th International Workshop on Biomedical Image Registration 2018, and co-organiser of two grand challenges on computer-aided diagnosis of dementia: CADDementia and TADPOLE.`,
    abstract: `Early and differential diagnosis of neurodegenerative diseases such as Alzheimer’s Disease are important for clinical care and research into novel treatments. Magnetic resonance imaging (MRI) plays a key role is making a diagnosis, since it enables visualisation of pathological changes in the brain. However, visual interpretation of MRI scans is subjective, time-consuming, and has limited sensitivity in detecting subtle abnormalities. In this talk I will show how mathematics and computer science can support the early and differential diagnosis of neurodegenerative diseases, by using advanced image analysis and machine learning techniques.`,
  },
  {
    links: [],
    img: brinkman,
    name: 'Willem-Paul Brinkman',
    company: 'TU Delft',
    bio: `Willem-Paul Brinkman is an associate professor at Delft University of Technology, The Netherlands. His primary research interests are behaviour change support systems, specifically eHealth systems including virtual reality therapy systems, and virtual health agents. He is fascinated by eHealth systems that include conversational agents that offer psychological support. His ultimate objective is to establish an autonomous eHealth system with a digital psychologist that can assist individuals in achieving a broad set of behaviour change goals ranging from overcoming mental illness to lifestyle modification for coping with a chronic disease. He is, therefore, determined to build these systems and establish an empirically grounded understanding of them.`,
    title: `Towards Virtual Reality as a Medicine`,
    abstract: `Intelligent virtual agents are interactive characters that often have human-like elements to evoke responses that humans would exhibit when interacting with other humans. In this talk, I will show how these embodied conversational agents, can be applied as part of health intervention in the form of virtual reality therapy. I will also look at how they can be used to inform, motivate and assist patients during an intervention. Finally, I will discuss research on the development of virtual patients, which can be used to train health professionals.`,
  },
  {
    links: [],
    img: wehrens,
    name: 'Rik Wehrens',
    company: 'Erasmus SHPM',
    // title: `Questioning Innovation from an Ethical Perspective`,
    title: `Caring for our ‘monsters’: cultural ambivalence and the role of ethics in the development of Big Data and Artificial Intelligence`,
    bio: `Rik Wehrens works as assistant professor at the department of Healthcare Governance at the Erasmus School of Health Policy & Management. He has a background in the interdisciplinary field of Science & Technology Studies, combining perspectives from sociology (of science), anthropology and philosophy of technology. His research work focuses on issues of knowledge translation and ‘epistemological politics’, such as the coordination work between public health researchers and practitioners in negotiating the meaning of ‘practice-based health research’, the relation between medical expertise and illness narratives of chronic patients, and the ‘valuation work’ in healthcare improvement programs. His current work explores the roles and expectations of big data in healthcare through ethnographic and discursive research ‘lenses’. As a part of the EU-funded project Big Medilytics (https://www.bigmedilytics.eu/), he is involved in an international comparison of formal and informal rules for Big Data in various European countries.`,
    abstract: `Are Big Data and Artificial Intelligence the future of medicine? Judged on the amount of media coverage, one would definitely think so. Both promise a completely personalized, real-time and even predictive picture of our health. At the same time, lawyers, ethical experts and critical journalists voice concerns. Lawyers point to risks of data breaches and misuse of personal information. Ethicists worry about the erosion of privacy and new forms of bias and ‘algorithmic discrimination’ that reaffirm and strengthen existing inequalities. Concerned journalists evoke imaginaries of mass-surveillance states. Recent outcries in the media about the Facebook-Cambridge Analytica-data scandal show that Big Data can also have a ‘dark side’.\n\n
This profoundly ambivalent relationship with new technologies is not new. We often respond with both fascination and discomfort when confronted with new technologies and applications. Technologies can thus, from a cultural perspective, be perceived as ‘monstrous’: their ambivalence and indeterminacy often evoke fear and controversy. The ‘monstrous’ character of Big Data and AI raises important questions about the role of ethics in their development. What can the role of ethics be in the development of new technologies when their indeterminacy prevents us from identifying in advance what potential benefits, risks, uses and abuses will be? In this presentation I contrast two perspectives on ethics. The first perspective is based on an understanding of ethics as a ‘boundary guard’, its aim being to protect ‘natural’ boundaries. A more fruitful perspective on ethics views the role of ethics as a ‘companion’ that aims to domesticate new technologies.`,
  },
  {
    links: [],
    img: leenstra,
    name: 'Bernard Leenstra',
    abstract: 'This is the host of the day. He will lead the symposium and its speakers in the right direction and make sure your day is as good as it can be.',
    bio: `Bernard Leenstra (29) made an extraordinary move during his surgical career. He interrupted his surgical path to contribute to society outside of the OR. His medical knowledge, academic perceptions and entrepreneurial drive made him realise this and with his firms and innovations in the medical world Bernard is an inspiration both for other doctors and all other educated extraordinary people.\n\n Bernard strongly believes that the healthcare system needs more young ambitious entrepreneurs with a medical background. Bernard himself aims to be a key figure between (medical) sciences and society. As a chairman for congresses he makes the baffling sciences available for all of society by his knowledge, experience and sense of humour. Furthermore, Bernard appears on television as well. During ‘De Lijf Show’ on SBS6, a show about the human body, he shares his knowledge as ‘Doctor Bernard’.`,
    title: `The Host`,
  }
]
