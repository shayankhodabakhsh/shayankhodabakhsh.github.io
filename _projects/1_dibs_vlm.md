---
layout: page
title: Vision-Language Coach for Ingestive Behaviors
description: Fine-tuning Qwen2.5-VL with LoRA to jointly classify eating-behavior quality and generate clinician-style coaching feedback (NIH R01 — DIBS).
img:
importance: 1
category: research
related_publications: false
---

A vision-language model that watches a person eat and produces both a behavior-quality score and free-text coaching feedback in a single pass. Built on **Qwen2.5-VL** with **LoRA** adapters and trained on profile-view meal video collected by the DIBS team.

**Key contributions**

- Designed a multi-bite temporal windowing strategy that captures chewing rhythm and inter-bite pauses, improving classification accuracy over per-bite clips.
- Showed a single LoRA adapter on a VLM matches the classification accuracy of a prior multi-head spatial-temporal architecture while adding clinician-grounded language generation in one pass.
- Built a participant-level cross-validation pipeline producing structurally parseable outputs suitable for clinical review.

Presented as first-author poster at the ECBE Graduate Student Poster Competition, University of Rhode Island, 2026.

*Funded under NIH R01 — Diet, Ingestion, and Behavior Sensing (DIBS).*
