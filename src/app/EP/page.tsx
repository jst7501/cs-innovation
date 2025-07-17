// EPPage.js

function EPPage() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: 20,
        fontFamily: "'Noto Sans KR', sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1>전해연마 (Electro Polishing)</h1>
      <p>
        도금의 역순으로, 피연마소재의 표면 개선 및 내식성을 높이는 표면처리
        기술입니다.
      </p>

      <h3>주요 적용 분야</h3>
      <p>스테인리스, 반도체 장비 부품, 각종 챔버류, 각종 탱크류 등</p>

      <h3>공정</h3>
      <p>
        제품 입고 → 탈지 → 수세 → 전해연마 → 수세 → 중화 → 수세 → 건조 →
        품질검사 → 출하
      </p>
    </div>
  );
}

export default EPPage;
