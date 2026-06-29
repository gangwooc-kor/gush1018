/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "전강욱",
    nameEn: "Groom",
    father: "전성희",
    mother: "최유진",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "황수현",
    nameEn: "Bride",
    father: "황갑도",
    mother: "양원영",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-18",
    time: "11:00",
    venue: "더 시그너스 웨딩 수원 2층",
    hall: "경기 수원시 팔달구 권광로 178",
    address: "031-224-2030",
    교통안내: "지하철 : 수인분당선 수원시청역 9번 출구 도보 3분\n 버스 씨티은행 하차  : 13-1, 92, 92-1, 99-2, 201, 202, 3002\n 버스 수원시청역 하차 : 51, 61, 80, 81, 82-1, 85, 4000, 7002",
    mapLinks: {
      kakao: "https://place.map.kakao.com/181071736",
      naver: "https://naver.me/5R4fASYs"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 당신을 초대합니다.",
    content: "서로의 부족함을 채워주며\n예쁜 가정을 이루려 합니다.\n\n그 소중한 출발의 자리에 함께하시어\n저희의 앞날을 축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "서로의 계절이 되려고 합니다.",
    content: "어느덧 곁에 있는 것이 당연해진 저희가\n이제는 부부라는 이름으로 하나가 되려 합니다.\n\n매일 조금씩 더 닮아가는 저희 두 사람,\n앞으로도 다정하게 잘 살아가겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "전강욱", bank: "농협은행", number: "351-1047-0915-43" },
      { role: "아버지", name: "전성희", bank: "농협은행", number: "721050-52-046685" },
      { role: "어머니", name: "최유진", bank: "신한은행", number: "110-569-753996" }
    ],
    bride: [
      { role: "신부", name: "황수현", bank: "농협은행", number: "352-0707-4572-63" },
      { role: "아버지", name: "황갑도", bank: "농협은행", number: "513012-56-115547" },
      { role: "어머니", name: "양원영", bank: "농협은행", number: "302-4656-9874-01" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "전강욱 ♥ 황수현 결혼합니다",
    description: "2026년 10월 18일, 소중한 분들을 초대합니다."
  }
};
