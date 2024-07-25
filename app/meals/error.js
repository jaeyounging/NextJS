// 데이터 불러오기 실패, 데이터베이스 오프라인
"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Failed to fetch meal data. Please try again later🤯</p>
    </main>
  );
}
