export type Language = 'fr' | 'mg';

export type UserRole = 
  | 'student' 
  | 'worker' 
  | 'parent' 
  | 'caregiver' 
  | 'concerned_person' 
  | 'organization';

export type AccountType = 'individual' | 'organization';

export type CareLevel = 1 | 2 | 3; // 1: Communautaire & Écoute, 2: Primaire & Ambulatoire, 3: Psychiatrique & Hospitalier

export interface Specialist {
  id: string;
  name: string;
  shortName?: string;
  category: 'chu' | 'prive' | 'ong' | 'cabinet' | 'insertion';
  specialties: string[];
  region: string;
  city: string;
  address: string;
  phone: string;
  emergencyPhone?: string;
  email?: string;
  hours: string;
  services: string[];
  careLevel: CareLevel;
  fees: string;
  feesMg: string;
  accessibilityInfo: string;
  accessibilityInfoMg: string;
  descriptionFr: string;
  descriptionMg: string;
}

export interface Disease {
  id: string;
  name: string;
  malagasyName: string;
  category: 
    | 'depression_mood' 
    | 'anxiety' 
    | 'neurodev' 
    | 'psychosis' 
    | 'addiction' 
    | 'physical_motor' 
    | 'sensory' 
    | 'intellectual';
  categoryLabelFr: string;
  categoryLabelMg: string;
  summaryFr: string;
  summaryMg: string;
  symptomsFr: string[];
  symptomsMg: string[];
  myths: {
    mythFr: string;
    mythMg: string;
    realityFr: string;
    realityMg: string;
  }[];
  careLevelNeeded: CareLevel;
  whoToConsultFr: string;
  whoToConsultMg: string;
  familyGuidanceFr: string;
  familyGuidanceMg: string;
  referenceSource: 'CIM-11 (OMS)' | 'CIF (OMS)' | 'DSM-5-TR';
  lastUpdated: string;
}

export interface Article {
  id: string;
  category: 'mental_health' | 'disability' | 'community' | 'editorial';
  categoryFr: string;
  categoryMg: string;
  titleFr: string;
  titleMg: string;
  excerptFr: string;
  excerptMg: string;
  contentFr: string;
  contentMg: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
}

export interface QuizQuestion {
  id: string;
  type: 'quiz' | 'true_false' | 'scenario';
  questionFr: string;
  questionMg: string;
  options: {
    id: string;
    textFr: string;
    textMg: string;
    isCorrect: boolean;
    explanationFr: string;
    explanationMg: string;
  }[];
}

export interface RoleTip {
  id: string;
  role: UserRole;
  titleFr: string;
  titleMg: string;
  contentFr: string;
  contentMg: string;
  keyActionFr: string;
  keyActionMg: string;
}

export interface PeerStory {
  id: string;
  name: string;
  age: number;
  location: string;
  topicFr: string;
  topicMg: string;
  titleFr: string;
  titleMg: string;
  quoteFr: string;
  quoteMg: string;
  fullStoryFr: string;
  fullStoryMg: string;
  takeawayFr: string;
  takeawayMg: string;
}

export interface UserHealthProfile {
  accountType: AccountType;
  fullName: string;
  organizationName?: string;
  role: UserRole;
  email: string;
  phone: string;
  region: string;
  city: string;
  reasonForJoining: string;
  // Ethics & Health data consent
  healthConsentGiven: boolean;
  healthConsentTimestamp?: string;
  // Personal medical history
  conditions: string[];
  allergiesOrSensitivities: string;
  currentTreatments: string;
  accessibilityNeeds: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  personalNotes: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'companion';
  text: string;
  timestamp: string;
  isEmergency?: boolean;
}
