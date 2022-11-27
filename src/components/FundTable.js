import React from 'react';
import './fundtable.css'
import { useQuery, gql } from "@apollo/client";

const FUND_QUERY = gql`
  {
    fundData(name: "Test_Fund") {
      name,
      eop_date,
      perf_monthly
    }
  }
`;

export default function FundTable() {
  const { data, loading, error } = useQuery(FUND_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>Fund Data</h1>
      <ul>
        {data.fundData.map((name, eop_date, perf_monthly) => (
          <li key={eop_date}>{perf_monthly}</li>
        ))}
      </ul>
    </div>
  );
}
