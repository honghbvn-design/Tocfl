// =======================================================
// DỮ LIỆU LUYỆN THI TOCFL (data-exam.js)
// =======================================================

const examData = [
  {
    exam_id: "tocfl_bandA_test1",
    title: "Đề thi thử TOCFL Band A - Đề số 1",
    level: "TOCFL Band A",
    description: "Đề thi thử mô phỏng cấu trúc thực tế, bao gồm kỹ năng Đọc hiểu phần 1 (Nhìn hình đoán câu).",
    
    // --- PHẦN 1: ĐỌC HIỂU (閱讀) - TỪ CÂU 1 ĐẾN 15 ---
    reading_part_1: [
      {
        id: 1,
        question_zh: "1. 妹妹今天很忙，什麼地方都沒去。",
        question_vn: "1. Em gái hôm nay rất bận, không đi đâu cả.",
        type: "image_choice",
        options: [
          { label: "A", image: "images/quiz_A_correct.png" },
          { label: "B", image: "images/quiz_B_trap.png" },
          { label: "C", image: "images/quiz_C_trap.png" }
        ],
        correctAnswer: "A",
        explanation: "Giải thích: 「什麼地方都沒去」nghĩa là 'không đi bất cứ nơi đâu' (ở nhà). Hình A vẽ cảnh cô bé đang ở nhà cặm cụi học bài là phù hợp nhất."
      }
    ]
  }
];
