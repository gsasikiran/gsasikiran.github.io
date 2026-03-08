---
author: Sasi Kiran Gaddipati
pubDatetime: 2026-03-08T00:00:00Z
title: "AISSISTANT: Human-AI Collaborative Review and Perspective Research Workflows in Data Science"
slug: aissistant-human-ai-collaborative-workflows
featured: true
draft: false
tags:
  - research
  - AI
  - LLM
  - Research Workflows
  - Scientific Review
description:
  AIssistant is the first open-source agentic framework for Human-AI collaborative generation of scientific perspectives and review research in data science. Accepted to PAKDD 2026 - Hong Kong, China.
---

## Publication Details

**Status:** Accepted to [PAKDD 2026](https://pakdd.org/) - Hong Kong, China

**Authors:** Sasi Kiran Gaddipati, Farhana Keya, Gollam Rabby, Sören Auer

**ArXiv:** [2509.12282](https://arxiv.org/abs/2509.12282)

## Abstract

High-quality scientific review and perspective papers require substantial time and effort, limiting researchers' ability to synthesize emerging knowledge. While Large Language Models (LLMs) leverage AI Scientists for scientific workflows, existing frameworks focus primarily on autonomous workflows with very limited human intervention.

We introduce **AIssistant**, the first open-source agentic framework for Human-AI collaborative generation of scientific perspectives and review research in data science. AIssistant employs specialized LLM-driven agents augmented with external scholarly tools and allows human intervention throughout the workflow.

The framework consists of two main multi-agent systems:
- **Research Workflow** with seven agents
- **Paper Writing Workflow** with eight agents

## Key Findings

We conducted a comprehensive evaluation with both human expert reviewers and LLM-based assessment following NeurIPS standards. Our experiments show:

- **OpenAI o1** achieves the highest quality scores on chain-of-thought prompting with augmented Literature Search tools
- **Human-AI interaction survey** results showing a **65.7% time savings**
- Agent-augmented pipelines substantially reduce effort while maintaining research integrity through strategic human oversight

This work establishes a baseline for Human-AI collaborative scientific workflow for review and perspective research in data science, demonstrating that well-designed agent pipelines can significantly enhance research productivity without compromising quality.

## Access

- [PDF on ArXiv](https://arxiv.org/pdf/2509.12282)
- [HTML Version](https://arxiv.org/html/2509.12282v2)
- [Project Repository](https://github.com/gsasikiran)
