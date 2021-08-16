import { gql } from "@apollo/client";

export const QUERY = gql`
  query getCurrency($currency: Currency) {
    products {
      id
      image_url
      price(currency: $currency)
      product_options {
        title
        prefix
        suffix
        options {
          id
          value
        }
      }
    }
    currency
  }
`;

export const CURRENCY_QUERY = gql`
  query {
    currency
  }
`;

export const getCurrency = async () => {
  const response = await fetch("https://api.db-ip.com/v2/free/self");
  const { countryName } = await response.json();

  if (countryName) {
    const result = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    );
    const data = await result?.json();
    if (data?.length && data[0]?.currencies?.length) {
      return data[0]?.currencies[0].code;
    }
  }

  return "USD";
};

export const getRate = async (currency) => {
  try {
    const response = await fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?to=${currency}&from=USD&q=1`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "2ee0be4de8msh7ff9a09b6f9c333p11336ejsnd47237c8ca83",
          "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
        },
      }
    );
    const data = await response?.json();
    if (data) return data;
    return 1;
  } catch (error) {
    console.log(error);
  }
};
