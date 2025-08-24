import * as XLSX from "xlsx";

export interface Transaction {
  time: Date;
  amount: number;
}

export const parseExcelFile = async (file: File): Promise<Transaction[]> => {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const transactions: Transaction[] = [];

  for (let i = 1; i < json.length; i++) {
    const row = json[i];
    if (!row || !row[0] || !row[2]) continue;

    const timeStr = row[2];
    const amountStr = row[8];

    const [h,m,s] = timeStr.split(':').map(Number);
    const time = new Date(1970,1,1,h,m,s)

    transactions.push({
      time: time,
      amount: parseFloat(String(amountStr).replace(/[^0-9.-]/g, "")),
    });
  }
  console.log(transactions)
  return transactions;
};
