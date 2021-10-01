export interface ProductsQuotesApi {
  data: {
    quotes: {
      product_quotes:       ProductQuotes[];
    }
  }
  success:                  boolean;
  message:                  string;
  status:                   number;
}

export interface ProductQuotes {
  "model_id":               number;
  "name":                   string;
  "manufacturer_name":      string;
  "base_price":             number;
  "base_price_hpwh_fee":    number;
  "delivery_charge":        number;
  "est_annual_kwh_usage":   number;
  "est_annual_savings_cal": number;
  "tree_planted_cal":       number;
  "volume":                 number;
  "fuel_type_usage_rate":   number;
  "incentives":             Incentives;
  "netCost":                number;
  "detail_highlight":       string[];
  "est_highlight":          string[];
  "product_bullet_block":   ProductBulletBlock[];
}

interface ProductBulletBlock {
  product_block:            string;
  product_bullet:           string;
}

interface Incentives {
  totalAppliedIncentives:   number;
}
