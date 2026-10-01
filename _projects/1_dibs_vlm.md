---
layout: page
title: Vision-Language Models for Bite Measurement and Eating-Rate Feedback
description: Adapting Qwen2.5-VL with temporal attention to detect bites from a single camera, then testing how detection errors change real-time feedback (NIH-funded, DIBS).
img:
importance: 1
category: research
related_publications: false
---

Eating-rate feedback needs bite measurements that arrive during the meal, and rules that still behave sensibly when those measurements are wrong. This project adapts a vision-language model to measure bites from a single profile-view camera, then studies how its errors propagate into feedback.

**Measurement**

- Adapted **Qwen2.5-VL** with **LoRA** and **stacked temporal attention** after the visual encoder. For each past-only 4-second window (32 frames), the language decoder answers whether the diner is taking a bite, chewing, or neither.
- Evaluated on **29 laboratory participants, each held out in turn**, with model selection restricted to inner-validation participants. Mean bite-event F1 was **0.887**, onset MAE **382 ms**, and 60-second bite-rate MAE **0.43 bites/min**, versus 1.63 for a no-video baseline.
- Removing temporal attention lowered event F1 by 0.034. I also compared the adapted encoder with CLIP, VideoMAE, and DINOv2, and the language decoder with linear classification heads.

**From measurement to feedback**

- Detection accuracy and feedback agreement turned out to be separate questions. Injected detection errors changed the meal-long rule's fast/not-fast label during about 10% of evaluated seconds, but reminder disagreement exceeded 25%.
- Compared two separately calibrated feedback rules (meal-long and five-minute reference rates) through recorded-meal replay and closed-loop simulation with assumed diner responses.

**Limits.** The feedback results are simulations and retrospective replay; prospective intervention evaluation is future work. Runtime was measured on recorded video, not a live camera stream.

Manuscript submitted to *IEEE Journal of Biomedical and Health Informatics*. Earlier version presented as a first-author poster at the ECBE Graduate Student Poster Competition, University of Rhode Island, 2026. Joint work with Theodore Walls, Reza Abiri, Kathleen Melanson, and collaborators at URI and UT Austin.

*Funded by the NIH (R01DK134546), Diet, Ingestion, and Behavior Sensing (DIBS).*
