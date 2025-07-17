// about.js

function AboutPage() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 20,
        fontFamily: "'Noto Sans KR', sans-serif",
        lineHeight: 1.6,
      }}
    >
      {/* 회사명 + 슬로건 */}
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>㈜씨에스이노베이션</h1>
        <p style={{ fontSize: 18, color: "#555" }}>
          최고의 기술과 품질로 고객에게 신뢰를 드립니다.
        </p>
      </header>

      {/* CEO 인사말 */}
      <section style={{ marginBottom: 40 }}>
        <h2>CEO 인사말</h2>
        <p>
          고객 여러분 안녕하십니까? 고객님들의 변함없는 사랑과 믿음에
          보답하겠습니다.
        </p>
        <p>
          당사는 전해연마(EP)와 산 세정(PICKLING) 전문업체로서 화학 플랜트,
          반도체 장비, 진공 챔버, 의료기기, 싸이로, 열교환기, 각종 탱크류 등
          기타 산업용 스테인리스(STS) 제품을 취급하고 있습니다.
        </p>
        <p>
          언제나 고객의 소리에 귀 기울이며 끊임없는 기술개발과 철저한 품질관리로
          고객의 신뢰와 함께 커 나가는 씨에스이노베이션이 될 것을 약속 드립니다.
        </p>
        <p style={{ fontWeight: "bold", marginTop: 20 }}>
          - ㈜씨에스이노베이션 대표이사 정 현 석
        </p>
      </section>

      {/* 기업 개요 */}
      <section style={{ marginBottom: 40 }}>
        <h2>기업 개요</h2>
        <ul>
          <li>
            <strong>대표이사:</strong> 정현석
          </li>
          <li>
            <strong>설립일:</strong> 2011년 2월 8일
          </li>
          <li>
            <strong>상시 근로자:</strong> 25명
          </li>
          <li>
            <strong>소재지:</strong> 경기도 화성시 우정읍 매바위로 26-16
          </li>
          <li>
            <strong>연락처:</strong> TEL 070-4252-3689, FAX 031-351-2689
          </li>
          <li>
            <strong>홈페이지:</strong>{" "}
            <a
              href="http://www.ep-cs.co.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.ep-cs.co.kr
            </a>
          </li>
        </ul>
      </section>

      {/* 기업 연혁 */}
      <section style={{ marginBottom: 40 }}>
        <h2>기업 연혁</h2>
        <ul>
          <li>
            <strong>2011</strong> 회사 설립 (CS Tech)
          </li>
          <li>
            <strong>2013</strong> 화성시 우정읍 확장 이전, ISO 9001/14001,
            벤처기업 인증, CLEAN 사업장 인정
          </li>
          <li>
            <strong>2014</strong> ㈜씨에스이노베이션으로 법인 전환
          </li>
          <li>
            <strong>2017</strong> 기술연구소 설립 및 연구개발전담부서 인정
          </li>
        </ul>
      </section>

      {/* 조직도 */}
      <section style={{ marginBottom: 40 }}>
        <h2>조직도</h2>
        <p style={{ fontWeight: "bold", fontSize: 18 }}>대표이사</p>
        <p style={{ textAlign: "center", fontSize: 24, margin: "10px 0" }}>⬇</p>
        <ul>
          <li>경영지원부</li>
          <li>생산부 (생산1팀, 생산2팀)</li>
          <li>품질관리부</li>
          <li>영업부</li>
          <li>연구개발부</li>
        </ul>
      </section>

      {/* 보유 설비 */}
      <section style={{ marginBottom: 40 }}>
        <h2>보유 설비</h2>

        <h3>전해연마조 및 정류기</h3>
        <ul>
          <li>소형 EP조 (5,000 * 1,500 * 1,700)</li>
          <li>중형 EP조 (2,800 * 4,800 * 3,500)</li>
          <li>대형 EP조 (7,000 * 5,000 * 4,500)</li>
        </ul>

        <h3>산 세정조</h3>
        <ul>
          <li>3,000 * 6,500 * 3,500</li>
          <li>3,500 * 800 * 1,300</li>
          <li>13,000 * 800 * 1,300</li>
        </ul>

        <h3>중화조 및 건조로</h3>
        <ul>
          <li>중화조 (6,000 * 4,000 * 4,500)</li>
          <li>건조로 (6,000 * 5,000 * 4,000)</li>
        </ul>

        <h3>기타 설비</h3>
        <ul>
          <li>콤프레샤 15H</li>
          <li>크레인</li>
          <li>건조기</li>
          <li>초순수 제조 장치</li>
        </ul>
      </section>

      {/* 인증 현황 */}

      {/* 성장 동력 */}
      <section style={{ marginBottom: 40 }}>
        <h2>성장 동력</h2>
        <ul>
          <li>연구 개발</li>
          <li>공정 개발 (전해연마 자동화 공정, 전해 세정 공정)</li>
          <li>산학연 정부 지원 사업 참여</li>
          <li>구리 전극 대체 탄소나노튜브 전극 개발</li>
          <li>신 성장 동력 전해세정 약품 개발</li>
          <li>표면처리 약품 개발</li>
          <li>연구 개발 투자 및 매출액 증가</li>
        </ul>
        <p>
          2015년부터 2017년까지 매출액과 연구개발비, 연구개발 인력이 지속적으로
          증가하여 성장을 견인하고 있습니다.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
