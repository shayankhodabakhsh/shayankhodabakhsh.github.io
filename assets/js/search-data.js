// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects and open-source code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, manuscripts, posters, and presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-co-authored-paper-on-wearable-sensor-calibration-for-monitoring-sagittal-knee-motion-in-patients-undergoing-total-knee-arthroplasty-published-in-the-knee",
          title: 'Co-authored paper on wearable sensor calibration for monitoring sagittal knee motion in patients...',
          description: "",
          section: "News",},{id: "news-co-authored-paper-consistency-is-key-a-secondary-analysis-of-wearable-motion-sensor-accuracy-measuring-knee-angles-published-in-sensors",
          title: 'Co-authored paper “Consistency Is Key: A Secondary Analysis of Wearable Motion Sensor Accuracy...',
          description: "",
          section: "News",},{id: "news-started-m-s-in-electrical-engineering-at-the-university-of-rhode-island-department-of-electrical-computer-and-biomedical-engineering",
          title: 'Started M.S. in Electrical Engineering at the University of Rhode Island, Department of...',
          description: "",
          section: "News",},{id: "news-presented-a-vision-language-coach-for-ingestive-behaviors-as-first-author-poster-at-the-ecbe-graduate-student-poster-competition-university-of-rhode-island",
          title: 'Presented “A Vision Language Coach for Ingestive Behaviors” as first-author poster at the...',
          description: "",
          section: "News",},{id: "projects-vision-language-coach-for-ingestive-behaviors",
          title: 'Vision-Language Coach for Ingestive Behaviors',
          description: "Fine-tuning Qwen2.5-VL with LoRA to jointly classify eating-behavior quality and generate clinician-style coaching feedback (NIH R01 — DIBS).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_dibs_vlm/";
            },},{id: "projects-tripolar-eeg-three-way-electrolyte-comparison",
          title: 'Tripolar EEG — Three-Way Electrolyte Comparison',
          description: "Methods/pilot study comparing Paste, Gel, and saline-soaked Felt TCRE configurations on resting-state and visual-evoked-potential recordings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_tcre_eeg/";
            },},{id: "projects-prime-closed-loop-llm-based-cobot",
          title: 'PRIME — Closed-Loop LLM-Based Cobot',
          description: "Computer-vision perception module for a closed-loop human-robot teaming cobot driven by LLM-based autonomy allocation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_prime_cobot/";
            },},{id: "projects-eeg-motion-capture-for-movement-decoding",
          title: 'EEG + Motion Capture for Movement Decoding',
          description: "Hardware synchronization of high-density g.tec EEG with optical motion capture for decoding grasping and reaching movements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_eeg_motion/";
            },},{id: "projects-automated-neuromuscular-assessment-with-robotics-cv",
          title: 'Automated Neuromuscular Assessment with Robotics + CV',
          description: "Marker-free 3D hand pose estimation and closed-loop feedback in unsupervised rehabilitation sessions, mediated by Socially Assistive Robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_neuromuscular_assessment/";
            },},{id: "projects-ycb-object-segmentation-with-yolov26",
          title: 'YCB Object Segmentation with YOLOv26',
          description: "Fine-tuned YOLOv26n-seg for segmenting YCB benchmark objects in images and video. Supports a perception module for robotic manipulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_ycb_yolo/";
            },},{id: "projects-eeg-motor-intention-classification-fbcsp",
          title: 'EEG Motor-Intention Classification (FBCSP)',
          description: "Filter Bank Common Spatial Patterns pipeline for decoding motor intention from EEG; 84.7% mean accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_eeg_motor/";
            },},{id: "projects-3d-hand-pose-estimation-from-rgb",
          title: '3D Hand Pose Estimation from RGB',
          description: "CNN with transfer learning to recover 3D hand keypoints from monocular RGB images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_hand_pose/";
            },},{id: "projects-motor-unit-pair-analysis-bss-decomposition",
          title: 'Motor Unit Pair Analysis (BSS Decomposition)',
          description: "Post-processing analysis of motor unit pair behavior following blind source separation decomposition of high-density EMG.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_motor_unit/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},];
