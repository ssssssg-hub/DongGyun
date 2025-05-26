class DatingSimulator {
  constructor() {
    this.day = 1;
    this.affection = 50;
    this.mistakes = 0;
    this.specialFlags = {
      hasGift: false,
      hasDate: false,
      hasMovie: false,
      hasTravel: false,
      hasConfession: false,
    };
    this.events = [
      {
        day: 1,
        text: "💬 [Event] 유빈이 생일이에요! 동균이는 어떻게 할까요?",
        choices: [
          {
            text: "💝 정성 가득한 편지와 선물을 준비한다",
            affection: 12,
            flag: "hasGift",
          },
          { text: "📱 카톡 이모티콘만 보낸다", affection: -5 },
          { text: "🤷‍♂️ 아무것도 하지 않는다", affection: -10 },
        ],
      },
      {
        day: 2,
        text: "💬 [Event] 동균이가 유빈이에게 밥 약속을 잡으려 해요.",
        choices: [
          {
            text: "🍽️ '이번 주말 어때? 내가 맛집 찾아볼게!'",
            affection: 10,
            flag: "hasDate",
          },
          { text: "😐 '그냥 대충 근처에서 먹자'", affection: -3 },
          { text: "📞 '언제든 시간 되면 연락해'", affection: 5 },
        ],
      },
      {
        day: 3,
        text: "💬 [Event] 유빈이가 동균이에게 영화를 보자고 해요.",
        choices: [
          {
            text: "💕 '좋아! 로맨스 영화는 어때?'",
            affection: 8,
            flag: "hasMovie",
          },
          { text: "💥 '난 액션 영화가 좋은데...'", affection: -3 },
          { text: "🤔 '네가 고르는 걸로 하자'", affection: 6 },
        ],
      },
      {
        day: 4,
        text: "💬 [Event] 유빈이가 갑자기 기분이 좋지 않아 보여요.",
        choices: [
          { text: "🤗 '무슨 일 있어? 내가 들어줄게'", affection: 10 },
          { text: "😕 '나도 오늘 컨디션이 안 좋아'", affection: -7 },
          { text: "☕ '커피 한잔 할까? 기분 전환하자'", affection: 7 },
        ],
      },
      {
        day: 5,
        text: "💬 [Event] 유빈이가 여행을 가자고 제안해요.",
        choices: [
          {
            text: "✈️ '좋아! 제주도는 어때?'",
            affection: 15,
            flag: "hasTravel",
          },
          { text: "😰 '여행은 좀 부담스러울 것 같아'", affection: -8 },
          { text: "🗓️ '계획을 세워보자'", affection: 8 },
        ],
      },
      {
        day: 6,
        text: "💬 [Event] 유빈이의 친구들이 동균이를 만나고 싶어해요.",
        choices: [
          { text: "😊 '좋아! 같이 밥 먹자'", affection: 9 },
          { text: "😬 '아직은 좀 그렇지 않을까?'", affection: -5 },
          { text: "🎉 '언제든 환영이야!'", affection: 12 },
        ],
      },
      {
        day: 7,
        text: "💬 [Event] 유빈이가 동균이의 취미에 대해 궁금해해요.",
        choices: [
          { text: "📚 '책 읽는 걸 좋아해. 너는 어때?'", affection: 8 },
          { text: "🤷‍♂️ '별로 취미 없어'", affection: -4 },
          { text: "🎮 '게임이랑 영화 보는 거 좋아해'", affection: 6 },
        ],
      },
      {
        day: 8,
        text: "💬 [Event] 유빈이가 동균이의 과거 연애 경험을 물어봐요.",
        choices: [
          { text: "😌 솔직하게 이야기한다", affection: 7 },
          { text: "😅 '그런 얘기는 좀 그렇지 않을까?'", affection: -6 },
          { text: "🤗 '너만 있으면 돼'", affection: 10 },
        ],
      },
      {
        day: 9,
        text: "💬 [Event] 유빈이가 동균이에게 진지한 고민을 털어놓아요.",
        choices: [
          { text: "🫂 진심으로 공감하고 조언한다", affection: 12 },
          { text: "😐 그냥 대충 넘긴다", affection: -10 },
          { text: "💪 '함께 해결해보자'", affection: 15 },
        ],
      },
      {
        day: 10,
        text: "💬 [Event] 분위기가 무르익었어요. 유빈이가 고백을 기다리고 있는 것 같아요.",
        choices: [
          {
            text: "💖 '너를 좋아해. 나랑 사귀자'",
            affection: 20,
            flag: "hasConfession",
          },
          { text: "😰 '아직은 좀 이른 것 같아'", affection: -12 },
          { text: "🤝 '좋은 친구로 지내자'", affection: -5 },
        ],
      },
      {
        day: 11,
        text: "💬 [Event] 유빈이의 부모님이 동균이를 만나고 싶어하세요.",
        choices: [
          { text: "😊 기꺼이 만나러 간다", affection: 12 },
          { text: "😬 '아직은 좀 부담스러워'", affection: -8 },
          { text: "🎁 '선물을 준비해서 가야겠어'", affection: 15 },
        ],
      },
      {
        day: 12,
        text: "💬 [Event] 유빈이가 동균이의 미래 계획을 물어봐요.",
        choices: [
          { text: "💼 진지하게 미래 계획을 이야기한다", affection: 10 },
          { text: "🤷‍♂️ '아직은 잘 모르겠어'", affection: -5 },
          { text: "💕 '너와 함께하는 미래를 꿈꿔'", affection: 15 },
        ],
      },
      {
        day: 13,
        text: "💬 [Event] 유빈이가 동균이에게 특별한 선물을 주려고 해요.",
        choices: [
          { text: "🎁 '고마워, 나도 너를 위한 선물이 있어'", affection: 12 },
          { text: "😅 '선물은 좀 부담스러워'", affection: -7 },
          { text: "🤗 '네 마음이 가장 소중해'", affection: 10 },
        ],
      },
      {
        day: 14,
        text: "💬 [Event] 유빈이가 동균이의 취향에 대해 더 자세히 알고 싶어해요.",
        choices: [
          { text: "📝 자세히 설명해준다", affection: 8 },
          { text: "😐 '별로 특별한 취향은 없어'", affection: -5 },
          { text: "💕 '너의 취향도 궁금해'", affection: 10 },
        ],
      },
      {
        day: 15,
        text: "💬 [Event] 유빈이가 동균이와 함께 특별한 하루를 만들고 싶어해요.",
        choices: [
          { text: "🌟 함께 특별한 추억을 만든다", affection: 18 },
          { text: "😊 평범한 데이트로 만족한다", affection: 8 },
          { text: "💖 '매일이 너와 함께라면 특별해'", affection: 20 },
        ],
      },
    ];
    this.init();
  }

  init() {
    this.updateUI();
    this.showCurrentEvent();
  }

  updateUI() {
    document.getElementById("day-info").textContent = `Day ${this.day}`;
    document.getElementById("affection").textContent = this.affection;
    document.getElementById("mistakes").textContent = this.mistakes;

    // Update progress bars
    const affectionPercent = (this.affection / 100) * 100;
    const mistakesPercent = (this.mistakes / 3) * 100;

    document.getElementById(
      "affection-fill"
    ).style.width = `${affectionPercent}%`;
    document.getElementById(
      "mistakes-fill"
    ).style.width = `${mistakesPercent}%`;
  }

  showCurrentEvent() {
    const currentEvent = this.events.find((event) => event.day === this.day);
    if (!currentEvent) {
      this.endGame();
      return;
    }

    const eventText = document.getElementById("event-text");
    const choices = document.getElementById("choices");

    eventText.textContent = currentEvent.text;
    choices.innerHTML = "";

    currentEvent.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.textContent = `${index + 1}. ${choice.text}`;
      button.onclick = () => this.makeChoice(choice);
      choices.appendChild(button);
    });
  }

  makeChoice(choice) {
    // Disable all buttons to prevent double clicks
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((btn) => (btn.disabled = true));

    setTimeout(() => {
      this.affection += choice.affection;
      this.affection = Math.max(0, Math.min(100, this.affection));

      if (choice.affection < 0) {
        this.mistakes++;
      }

      if (choice.flag) {
        this.specialFlags[choice.flag] = true;
      }

      this.day++;
      this.updateUI();

      if (this.mistakes >= 3 || this.affection <= 0) {
        this.endGame();
      } else {
        this.showCurrentEvent();
      }
    }, 500);
  }

  endGame() {
    const eventText = document.getElementById("event-text");
    const choices = document.getElementById("choices");

    let endingMessage = "";
    let endingEmoji = "";

    if (this.mistakes >= 3) {
      endingMessage =
        "실수를 너무 많이 해서 유빈이가 실망했어요... 다음엔 더 신중하게 행동해보세요!";
      endingEmoji = "❌";
    } else if (this.affection <= 0) {
      endingMessage =
        "호감도가 0이 되어 유빈이가 떠났어요... 상대방의 마음도 생각해보세요.";
      endingEmoji = "💔";
    } else if (this.affection >= 90 && this.specialFlags.hasConfession) {
      endingMessage =
        "완벽한 엔딩! 유빈이와 행복한 연애를 시작했어요! 두 사람의 미래가 기대되네요!";
      endingEmoji = "💖";
    } else if (this.affection >= 80) {
      endingMessage =
        "좋은 엔딩! 유빈이와의 관계가 더욱 깊어졌어요! 앞으로도 서로를 아끼세요.";
      endingEmoji = "💕";
    } else if (this.affection >= 60) {
      endingMessage =
        "평범한 엔딩! 유빈이와 좋은 친구로 남았어요. 우정도 소중한 관계랍니다.";
      endingEmoji = "💝";
    } else {
      endingMessage =
        "아쉬운 엔딩... 유빈이와의 관계가 소원해졌어요. 다시 시도해보세요!";
      endingEmoji = "😢";
    }

    eventText.innerHTML = `
          <div class="ending-container">
              <div class="ending-text">${endingEmoji} ${endingMessage}</div>
              <div style="margin: 1rem 0; font-size: 1.1rem;">
                  최종 호감도: ${this.affection}/100<br>
                  실수 횟수: ${this.mistakes}/3<br>
                  진행한 날: ${this.day - 1}일
              </div>
          </div>
      `;

    choices.innerHTML =
      '<button class="restart-btn" onclick="location.reload()">🔄 다시 시작하기</button>';
  }
}

// 게임 시작
window.onload = () => {
  new DatingSimulator();
};
