// =======================================================
// DỮ LIỆU LUYỆN THI TOCFL (data-exam.js)
// =======================================================

const examData = [
  {
    exam_id: "tocfl_bandA_test1",
    title: "Đề thi thử TOCFL Band A - Đề số 1",
    level: "TOCFL Band A",
    description: "Đề thi thử mô phỏng cấu trúc thực tế, bao gồm đầy đủ 2 kỹ năng Nghe hiểu (50 câu) và Đọc hiểu (50 câu).",
    
    // --- PHẦN 2: KỸ NĂNG NGHE (聽力) ---
    listening_sections: [
      {
        part_name: "第一部分：辨識句意 (Phần 1: Nhận diện ý câu)",
        description_zh: "說明：Mỗi câu nghe 2 lần, chọn tranh đúng.",
        questions: [
          // Sau này chúng ta sẽ nhét 50 câu nghe vào đây
        ]
      }
    ],

    // --- PHẦN 1: KỸ NĂNG ĐỌC (閱讀) ---
    reading_sections: [
      {
        part_name: "第一部分：看圖辨義 (Phần 1: Nhìn hình đoán câu)",
        description_zh: "說明：在這個部分，你會看到一個句子和(A)(B)(C)三張圖片。請根據句子的意思，從三張圖片中選出與句子意思相符的圖片。",
        questions: [
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
          // Các câu hỏi đọc tiếp theo sẽ thêm vào đây
        ]
      }
    ]
  }
];
