---
author: Sasi Kiran Gaddipati
pubDatetime: 2020-09-02T00:00:00Z
title: "Comparative Evaluation of Pretrained Transfer Learning Models on Automatic Short Answer Grading"
slug: transfer-learning-asag
featured: false
draft: false
tags:
  - research
  - NLP
  - Transfer Learning
  - BERT
  - ELMo
  - Education
  - Automatic Grading
description:
  A comparative study evaluating pretrained transfer learning models (ELMo, BERT, GPT, GPT-2) for automatic short answer grading using semantic embeddings.
---

## Publication Details

**Authors:** Sasi Kiran Gaddipati, Deebul Nair, Paul G. Plöger

**ArXiv:** [2009.01303](https://arxiv.org/abs/2009.01303)

**Submitted:** September 2, 2020

**Category:** Computation and Language (cs.CL)

## Abstract

Automatic Short Answer Grading (ASAG) is the process of grading student answers by computational approaches given a question and the desired answer. Previous works implemented methods of concept mapping, facet mapping, and conventional word embeddings for extracting semantic features, often requiring manual feature engineering.

## Approach

We evaluate pretrained embeddings from transfer learning models to assess their efficiency on ASAG:

- **ELMo** - Embeddings from Language Models
- **BERT** - Bidirectional Encoder Representations from Transformers
- **GPT** - Generative Pre-trained Transformer
- **GPT-2** - Second generation GPT

Unlike previous approaches that extracted multiple features manually, we train using a **single feature**: cosine similarity extracted directly from the embeddings of these models.

## Key Findings

- **ELMo outperformed** the other three transfer learning models on ASAG tasks
- Evaluated using RMSE scores and correlation measurements on the Mohler dataset
- Demonstrated the effectiveness of semantic embeddings for automatic answer grading
- Analysis of possible causes for varying performance across different transfer learning models

## Significance

This work demonstrates that well-chosen pretrained transfer learning models can simplify ASAG by eliminating the need for manual feature engineering while maintaining or improving performance compared to conventional approaches.

## Access

- [PDF on ArXiv](https://arxiv.org/pdf/2009.01303)
- [arXiv Page](https://arxiv.org/abs/2009.01303)
