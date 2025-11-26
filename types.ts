import React from 'react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROFILE = 'profile',
  PORTFOLIO = 'portfolio',
  PHOTO = 'photography',
  AI = 'ai',
  CONTACT = 'contact'
}

export interface AIConceptResponse {
  conceptTitle: string;
  tagline: string;
  executiveSummary: string;
  keyFeatures: string[];
}