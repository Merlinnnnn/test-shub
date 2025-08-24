import React from "react";

interface Props {
  total: number;
}

export const ReportResults: React.FC<Props> = ({ total }) => {
  return (
    <div className="mt-6 p-4 bg-green-100 rounded-lg text-lg font-semibold">
      Tổng tiền thu: {total.toLocaleString()} VND
    </div>
  );
};
