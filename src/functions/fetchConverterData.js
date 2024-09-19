async function fetchConverterData() {
    const res = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", {
        cache: 'force-cache'
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
  export default async function fetchConverter() {
    const data = await fetchConverterData();
  
    return data;
  }
