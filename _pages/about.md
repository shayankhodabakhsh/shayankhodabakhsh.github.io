---
layout: about
title: home
permalink: /
subtitle: M.S. Electrical Engineering at URI · Machine learning for health sensing

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Department of Electrical, Computer, and Biomedical Engineering</p>
    <p>University of Rhode Island</p>
    <p>Kingston, RI 02881</p>

selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<div class="home-intro">
  <p class="lede">
    I work on machine learning for sensing human behavior and health, and on testing when those measurements can be trusted to drive decisions. My current project adapts vision-language models to measure eating behavior from video, then asks how detection errors change real-time feedback. Earlier work validated wearable sensors against motion capture.
  </p>

  <div class="home-actions">
    <a class="home-action primary" href="mailto:skhodabakhsh@uri.edu">Email</a>
    <a class="home-action" href="/projects/">Projects</a>
    <a class="home-action" href="/publications/">Publications</a>
    <a class="home-action" href="/cv/">CV</a>
  </div>
</div>

<section class="home-section">
  <h2>Focus</h2>
  <div class="focus-grid">
    <div>
      <h3>Foundation models for behavior sensing</h3>
      <p>Adapting vision-language models to measure eating behavior from video, evaluated on held-out participants.</p>
    </div>
    <div>
      <h3>From measurement to feedback</h3>
      <p>Studying how detection errors change real-time feedback decisions, using error injection and closed-loop simulation.</p>
    </div>
    <div>
      <h3>Neural and movement sensing</h3>
      <p>Synchronizing EEG with motion capture for movement decoding, and markerless hand-pose assessment.</p>
    </div>
  </div>
</section>

<section class="home-section">
  <h2>Current Work</h2>
  <div class="work-list">
    <article>
      <span>DIBS</span>
      <h3>Vision-language models for bite measurement and feedback</h3>
      <p>Qwen2.5-VL with temporal attention for bite detection from one camera (bite-event F1 0.887 on 29 held-out participants), plus closed-loop simulation of eating-rate feedback.</p>
    </article>
    <article>
      <span>TCRE EEG</span>
      <h3>Electrode media comparison and VEP analysis</h3>
      <p>Building reproducible EEG analysis pipelines for resting-state, alpha-reactivity, and visual-evoked-potential recordings.</p>
    </article>
    <article>
      <span>PRIME</span>
      <h3>Perception for LLM-based human-robot teaming</h3>
      <p>Developing computer-vision perception modules for closed-loop cobot autonomy allocation.</p>
    </article>
    <article>
      <span>EEG + Motion Capture</span>
      <h3>Synchronized movement decoding</h3>
      <p>Aligning high-density EEG with optical motion capture for grasping and reaching analysis.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>Toolkit</h2>
  <div class="toolkit-grid">
    <div>
      <strong>Machine Learning</strong>
      <p>PyTorch, Hugging Face, LoRA fine-tuning, scikit-learn</p>
    </div>
    <div>
      <strong>Computer Vision</strong>
      <p>OpenCV, YOLO, segmentation, pose estimation, video analysis</p>
    </div>
    <div>
      <strong>Signals</strong>
      <p>MNE, EEG preprocessing, EMG analysis, spectral features</p>
    </div>
    <div>
      <strong>Systems</strong>
      <p>Python pipelines, data synchronization, experiment tooling</p>
    </div>
  </div>
</section>

<section class="home-section contact-panel">
  <div>
    <h2>Contact</h2>
    <p>For research collaborations, project questions, or shared interests in ML for health sensing, email is the best way to reach me.</p>
  </div>
  <a class="home-action primary" href="mailto:skhodabakhsh@uri.edu">skhodabakhsh@uri.edu</a>
</section>
