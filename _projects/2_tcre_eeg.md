---
layout: page
title: Tripolar EEG — Three-Way Electrolyte Comparison
description: Methods/pilot study comparing Paste, Gel, and saline-soaked Felt TCRE configurations on resting-state and visual-evoked-potential recordings.
img:
importance: 2
category: research
related_publications: false
---

A methods/pilot study comparing three Tripolar Concentric Ring Electrode (TCRE) configurations — **Paste**, **Gel**, and **saline-soaked Felt** — on resting-state and visual-evoked-potential (VEP) recordings. Paste serves as the cross-setup bridge between the two acquisition systems.

**What I built**

- A unified Python preprocessing and analysis pipeline so that the three configurations are processed identically, with no adaptive cleaners that could behave differently across media.
- Scale-invariant cross-setup metrics — alpha SNR, alpha reactivity (eyes-closed/open ratio), spectrogram SSIM — that allow comparison despite hardware scaling differences across acquisitions.
- A three-variant preprocessing sensitivity analysis to verify that conclusions are not driven by the choice of pipeline.
- Per-subject VEP diagnostics that informed cohort and exclusion decisions for the manuscript.

Manuscript in preparation for *Sensors* (MDPI). Joint work with Dr. Walter Besio (URI ECBE).
