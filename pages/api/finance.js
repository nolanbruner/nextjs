// export function getNews() {
//     let data = [];
//     try {
//         fetch("https://api.stockdata.org/v1/data/intraday?symbols=NASDAQ&api_token=hnWeOWOm56ABm1MwNm148U91TVlY95AKZJZ5GzNC")
//             .then((res) => data = res.data)
//     }
//     catch (e) {
//         console.log(e);
//     }
//     console.log(data)
//     return data;
// }
export default async function handler(req, res) {
   //https://api.stockdata.org/v1/data/intraday?symbols=AAPL&api_token=hnWeOWOm56ABm1MwNm148U91TVlY95AKZJZ5GzNC&interval=day
    const response = await fetch("https://api.stockdata.org/v1/data/intraday?symbols=AAPL&api_token=hnWeOWOm56ABm1MwNm148U91TVlY95AKZJZ5GzNC")
    const data = await response.json()
  
    let temp = data.data
    
//    let temp ={}
//     data.map((item)=>{
//         temp.push({item.ticker,
//         item.close})
//     })
    // res.status(200).json({
    //     "meta": {
    //         "date_from": "2023-02-02",
    //         "date_to": "2023-02-09",
    //         "max_period_days": 7
    //     },
    //     "data": [
    //         {
    //             "date": "2023-02-08T15:59:00.000Z",
    //             "ticker": "AAPL",
    //             "data": {
    //                 "open": 152.01,
    //                 "high": 152.08,
    //                 "low": 151.91,
    //                 "close": 151.93,
    //                 "volume": 18975,
    //                 "is_extended_hours": false
    //             }
    //        }]
    res.status(200).json(temp)
}