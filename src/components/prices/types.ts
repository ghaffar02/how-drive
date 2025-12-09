export interface UsageItem {
  text: string;
}

export interface FeatureItem {
  text: string;
}

export interface PlanData {
  name: string;
  price: {
    amount: string;
    duration?: string;
    note?: string;
  };
  description: string;
  buttonText: string;
  buttonLink: string;
  usage?: UsageItem[];
  features: FeatureItem[];
  featuresHeader?: string;
  recommended?: boolean;
}

