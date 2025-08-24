const fetch = require("node-fetch"); // nếu Node 18+, có thể dùng fetch trực tiếp

// URLs API
const INPUT_URL = "https://share.shub.edu.vn/api/intern-test/input";
const OUTPUT_URL = "https://share.shub.edu.vn/api/intern-test/output";

async function main() {
  try {
    const resp = await fetch(INPUT_URL);
    const inputData = await resp.json();
    const data = inputData.data;
    const queries = inputData.query;
    const token = inputData.token;

    const n = data.length;
    const prefixSum = new Array(n);
    prefixSum[0] = data[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + data[i];
    }

    const prefixAlt = new Array(n);
    prefixAlt[0] = data[0];
    for (let i = 1; i < n; i++) {
      prefixAlt[i] = prefixAlt[i - 1] + (i % 2 === 0 ? data[i] : -data[i]);
    }

    const rangeSum = (l, r) => (l === 0 ? prefixSum[r] : prefixSum[r] - prefixSum[l - 1]);
    const rangeAlt = (l, r) => (l === 0 ? prefixAlt[r] : prefixAlt[r] - prefixAlt[l - 1]);

    const result = queries.map(q => {
      const [l, r] = q.range;
      return q.type === "1" ? rangeSum(l, r) : rangeAlt(l, r);
    });

    console.log("Kết quả query:", result);

    const resp2 = await fetch(OUTPUT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(result)
    });

    const outputData = await resp2.json();
    console.log("Response từ server:", outputData);

  } catch (err) {
    console.error("Lỗi:", err);
  }
}
main();
