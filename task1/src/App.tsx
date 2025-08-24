
import  { useState } from "react";
import { FileUpload } from "./components/FileUpload";
import { TimeRangeSelector } from "./components/TimeRangeSelector";
import { ReportResults } from "./components/ReportResults";
import { parseExcelFile, type Transaction } from "./untils/excelParser";
import { filterTransactionsByTimeRange } from "./untils/transactionProcessor";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");
  const [total, setTotal] = useState<number | null>(null);

  const handleFileUpload = async (file: File) => {
    const parsed = await parseExcelFile(file);
    setTransactions(parsed);
    setTotal(null);
  };
  const deleteFile = () =>{
    setTransactions([]);
  } 

  const handleCalculate = () => {
    const result = filterTransactionsByTimeRange(
      transactions,
      startTime,
      endTime
    );
    setTotal(result);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Gas Station Report Analyzer
        </h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
          {transactions.length === 0 ? (
            <FileUpload onFileUpload={handleFileUpload} />
          ) : (
            <>
              <TimeRangeSelector
                startTime={startTime}
                endTime={endTime}
                setStartTime={setStartTime}
                setEndTime={setEndTime}
                onCalculate={handleCalculate}
                onDeleteFile = {deleteFile}
              />
              {total !== null && <ReportResults total={total} />}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500 border-t">
        Built for analyzing gas station transaction reports. Supports .xlsx and
        .xls file formats.
      </footer>
    </div>
  );
}

export default App;
