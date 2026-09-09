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
        type: "image_choice", // Loại câu hỏi chọn ảnh
        options: [
          { label: "A", image: "quiz_A_correct.png" }, // Ảnh đúng
          { label: "B", image: "quiz_B_trap.png" },    // Ảnh bẫy đi siêu thị
          { label: "C", image: "quiz_C_trap.png" }     // Ảnh bẫy đi công viên
        ],
        correctAnswer: "A", // Đáp án đúng là A
        explanation: "Giải thích: 「什麼地方都沒去」nghĩa là 'không đi bất cứ nơi đâu' (ở nhà). Hình A vẽ cảnh cô bé đang ở nhà cặm cụi học bài là phù hợp nhất. Hình B (đi siêu thị) và Hình C (đi chơi công viên) đều là đi ra ngoài nên không đúng."
      }
      // Bạn sẽ chèn câu 2, câu 3... vào ngay bên dưới dòng này sau
    ]
  }
];
