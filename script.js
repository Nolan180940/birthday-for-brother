// 正确答案（你可以改成你们的真实回忆！）
const correctAnswers = {
  1: "2007/8/22",   // 第一题答案
  2: "2006/9/15",         // 老板姓王
  3: "2007/2/1", // 电影名
  4: "2025/5/16",       // 偷偷吃香菜
  5: "各奔东西西天取经天南地北"        // 最后一次吵架因为香菜
};

// 跳转到某一关
function goToPuzzle(level) {
  document.querySelectorAll('.container').forEach(el => {
    el.style.display = 'none';
  });
  if (level === 6) {
    document.getElementById('final').style.display = 'block';
  } else {
    document.getElementById('puzzle' + level).style.display = 'block';
  }
}

// 检查答案
function checkAnswer(level) {
  const input = document.getElementById(`answer${level}`);
  const feedback = document.getElementById(`feedback${level}`);
  const value = input.value.trim();

  if (value === "") {
    feedback.textContent = "⚠️ 先写点啥呀！";
    feedback.style.color = "#ffcc00";
    return;
  }

  if (value.toLowerCase() === correctAnswers[level].toLowerCase()) {
    feedback.textContent = "✅ 正确！下一关已解锁！";
    feedback.style.color = "#00ff00";
    setTimeout(() => {
      goToPuzzle(level + 1);
    }, 1000);
  } else {
    feedback.textContent = "❌ 错了！再想想我们的黑历史！";
    feedback.style.color = "#ff3300";
  }
}

// 重新开始
function restart() {
  goToPuzzle(1);
}