interface BmacSupporter {
  payer_name: string;
  payer_email: string;
  is_refunded?: boolean | null;
  supporter_name?: string;
}

interface OneTimeSupporter extends BmacSupporter {
  support_coffee_price: string;
  support_coffees: number;
  support_updated_on: string;
  support_note?: string | null;
}

interface Member extends BmacSupporter {
  membership_level_id: number;
  stripe_status: string | 'active';
  subscription_updated_on: string;
  subscription_coffee_price: string;
  subscription_coffee_num: number;
  subscription_duration_type: 'month' | 'year';
  subscription_is_cancelled?: boolean | null;
  subscription_message?: string | null;
}

interface BmacResponse<T> {
  current_page: number;
  data?: Array<T>;
  next_page_url?: string | null;
}

interface ReadableSupporter {
  name: string;
  link?: string | null;
  photo?: string;
  amount: number; // monthly
  message?: string | null;
  isPrivate?: boolean;
}
