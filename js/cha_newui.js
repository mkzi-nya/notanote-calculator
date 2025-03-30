console.log("Updated at 2025.03.30");

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
});

/* ========== 全局变量 ========== */
let columns = 3; // 默认三列布局

/* ========== DOMContentLoaded 事件 ========== */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
});

/* ========== 常量字典 ========== */
const constants = {
  1: { constant: 5.3, category: "SY", name: "追憶" },
  2: { constant: 3.0, category: "EZ", name: "追憶" },
  3: { constant: 3.0, category: "SY", name: '"SHE"' },
  4: { constant: 4.5, category: "SY", name: "Cursed Land (Acoustic)" },
  5: { constant: 7.1, category: "SY", name: "Lockdown (Tatsunoshin VIP)" },
  6: { constant: 3.5, category: "EZ", name: "Lockdown (Tatsunoshin VIP)" },
  7: { constant: 8.6, category: "SY", name: "Eltaw" },
  8: { constant: 3.0, category: "EZ", name: "Eltaw" },
  9: { constant: 4.5, category: "TL", name: "Eltaw" },
  10: { constant: 2.5, category: "SY", name: "Summer Dream" },
  11: { constant: 7.0, category: "SY", name: "Rainbow Flavor!" },
  12: { constant: 1.5, category: "EZ", name: "Rainbow Flavor!" },
  13: { constant: 7.6, category: "SY", name: "Airy Dream" },
  14: { constant: 1.0, category: "EZ", name: "Airy Dream" },
  15: { constant: 5.0, category: "SY", name: "夏の花" },
  16: { constant: 1.5, category: "EZ", name: "夏の花" },
  17: { constant: 3.5, category: "SY", name: "梦的彼岸" },
  18: { constant: 1.0, category: "EZ", name: "梦的彼岸" },
  19: { constant: 6.0, category: "SY", name: "Brand New Day" },
  20: { constant: 5.0, category: "SY", name: "烁雨" },
  21: { constant: 9.0, category: "SY", name: "cybernetic blazar" },
  22: { constant: 9.7, category: "SY", name: "Innocent white" },
  23: { constant: 5.2, category: "EZ+", name: "Innocent white" },
  24: { constant: 2.5, category: "EZ", name: "Innocent white" },
  25: { constant: 6.7, category: "SY", name: "Vestige of Dreams" },
  26: { constant: 8.3, category: "SY", name: "Elsorhg" },
  27: { constant: 10.2, category: "SY", name: "Meltovt Necrosys" },
  28: { constant: 5.8, category: "EZ", name: "Meltovt Necrosys" },
  29: { constant: 9.6, category: "SY", name: "Broken Conviction" },
  30: { constant: 5.4, category: "EZ", name: "Broken Conviction" },
  31: { constant: 10.5, category: "SY", name: "Le Porteur d'Ombre" },
  32: { constant: 5.7, category: "EZ", name: "Le Porteur d'Ombre" },
  33: { constant: 4.5, category: "SY", name: "Star Chain" },
  34: { constant: 5.7, category: "SY", name: "Apocalyptic" },
  35: { constant: 7.7, category: "SY", name: "璃" },
  36: { constant: 6.0, category: "SY", name: "Last Season" },
  37: { constant: 8.0, category: "SY", name: "Meltovt Necrosys (UraniumW Remix)" },
  38: { constant: 3.5, category: "TL", name: "Meltovt Necrosys (UraniumW Remix)" },
  39: { constant: 9.6, category: "SY", name: "Meltovt Necrosys (Salty Salt Remix)" },
  40: { constant: 4.0, category: "EZ", name: "Meltovt Necrosys (Salty Salt Remix)" },
  41: { constant: 10.4, category: "SY", name: "Aether Ingita!" },
  42: { constant: 5.8, category: "EZ", name: "Aether Ingita!" },
  43: { constant: 6.1, category: "SY", name: "爱上想象的你" },
  44: { constant: 2.5, category: "EZ", name: "爱上想象的你" },
  45: { constant: 7.9, category: "SY", name: "今天不是明天" },
  46: { constant: 3.5, category: "EZ", name: "今天不是明天" },
  47: { constant: 6.2, category: "SY", name: "甜涩之梦" },
  48: { constant: 7.3, category: "SY", name: "恶修女——永火熔铸" },
  49: { constant: 8.1, category: "TL", name: "恶修女——永火熔铸" },
  50: { constant: 5.1, category: "SY", name: "Feeling Lonely" },
  51: { constant: 2.0, category: "TL", name: "Feeling Lonely" },
  52: { constant: 6.6, category: "SY", name: "Velocity" },
  53: { constant: 2.0, category: "EZ", name: "Velocity" },
  54: { constant: 7.1, category: "SY", name: "What U Wanna Be (Radio Edit)" },
  55: { constant: 6.8, category: "SY", name: "Enough" },
  56: { constant: -5.0, category: "SP", name: "The Fire" },
  57: { constant: 5.9, category: "SY", name: "纸上江山" },
  58: { constant: 1.5, category: "EZ", name: "纸上江山" },
  59: { constant: 7.8, category: "SY", name: "MARENOL" },
  60: { constant: 2.5, category: "TL", name: "MARENOL" },
  61: { constant: 8.2, category: "SY", name: "Altersist" },
  62: { constant: 3.0, category: "EZ", name: "Altersist" },
  63: { constant: 1.0, category: "SY", name: "Only 1 Minute" },
  64: { constant: 6.5, category: "SY", name: "End Me" },
  65: { constant: 1.5, category: "EZ", name: "End Me" },
  66: { constant: 7.4, category: "SY", name: "Heavenly Sky" },
  67: { constant: 4.0, category: "EZ", name: "Heavenly Sky" },
  68: { constant: 7.0, category: "SY", name: "Kaze" },
  69: { constant: 8.7, category: "SY", name: "YUMEND" },
  70: { constant: 3.0, category: "EZ", name: "YUMEND" },
  71: { constant: 9.1, category: "SY", name: "Chronomia" },
  72: { constant: 9.3, category: "SY", name: "Break Through Myself" },
  73: { constant: 6.6, category: "SY", name: "DayBreakers" },
  74: { constant: 7.5, category: "SY", name: "Alice in a xxxxxxxx" },
  75: { constant: 9.4, category: "SY", name: "能量过载-オーバロード-" },
  76: { constant: 5.6, category: "EZ", name: "能量过载-オーバロード-" },
  77: { constant: 7.7, category: "SY", name: "life flashes before weeb eyes" },
  78: { constant: 4.0, category: "EZ", name: "life flashes before weeb eyes" },
  79: { constant: 5.5, category: "SY", name: "浮光 (The History)" },
  80: { constant: 3.0, category: "EZ", name: "浮光 (The History)" },
  81: { constant: 10.5, category: "SY", name: "《Ж》" },
  82: { constant: 8.6, category: "TL", name: "《Ж》" },
  83: { constant: 8.7, category: "SY", name: "Random" },
  84: { constant: 8.5, category: "SY", name: "Abatement" },
  85: { constant: 3.5, category: "EZ", name: "Abatement" },
  86: { constant: 9.5, category: "SY", name: "self-dissociation" },
  87: { constant: 4.5, category: "EZ", name: "self-dissociation" },
  88: { constant: 8.3, category: "SY", name: "Nakunaru" },
  89: { constant: 8.9, category: "SY", name: "slic.hertz" },
  90: { constant: 2.0, category: "EZ", name: "弦色幻想诗" },
  91: { constant: 7.5, category: "SY", name: "弦色幻想诗" }
};

/* ========== 核心流程 ========== */
function processData() {
    const rawData = document.getElementById('inputData').value;
    const lines = rawData.split('\n').map(line => line.trim()).filter(line => line !== "");
    if (lines.length === 0) {
      alert("文件为空，请检查内容！");
      return;
    }
    let username, dataStartIndex;
    if (lines[0].indexOf(",,,") === -1) {
      // 第一行为用户名
      username = lines[0];
      dataStartIndex = 1;
    } else {
      username = "UserName";
      dataStartIndex = 0;
    }

    // 存储跳过的曲目及其难度
    const skippedSongs = [];

    const items = lines.slice(dataStartIndex).map(line => {
      const item = processSong(line);
      if (item === null) {
        const parts = line.split(',,,');
        skippedSongs.push(`${parts[0]} (${parts[1]})`); // 保存曲目名称和难度
      }
      return item;
    }).filter(item => item !== null);

    if (skippedSongs.length > 0) {
        alert("以下曲目未能解析并已跳过：\n" + skippedSongs.join("\n"));
    }

    // 全局保存解析后的结果
    window.processedItems = items;
    
    // 清空输出区域，避免多次解析时内容堆叠
    document.getElementById('output').innerHTML = '';
    
    // 根据单曲 nrk 值降序排序
    items.sort((a, b) => b.singleNrkRaw - a.singleNrkRaw);
    
    // 显示用户信息（显示用户 nrk 平均值）
    drawUserInfo(username, items);
    // 绘制所有卡片
    items.forEach(drawCard);
    // 格式化写回存档（新格式：第一行用户名，其余每行一条数据）
    formatInput(username, items);
}

/* ========== 核心数据处理 ========== */
function processSong(line) {
  const parts = line.split(',,,').map(s => s.trim());
  
  // 如果字段数不足4，补充"-"
  if (parts.length === 3) {
    parts.push("-");
  }

  if (parts.length >= 4) {
    const title = parts[0];
    const grade = parts[1];
    
    // 根据曲名和难度来查找定数
    const constantData = Object.values(constants).find(item => item.name === title && item.category === grade);
    
    if (!constantData) {
      // 如果无法找到该曲目的定数，跳过该数据
      return null;
    }
    
    const constantVal = constantData.constant;
    const scoreField = parts[2];
    const bestScore = scoreField === "-" ? null : (scoreField !== "" ? parseInt(scoreField, 10) : null);
    const accuracyVal = parseFloat(parts[3]);
    return calcSongData(title, grade, constantVal, bestScore, accuracyVal, scoreField);
  } else {
    alert("数据行格式错误，请检查每行至少包含：曲名, 等级, 准确率！");
    return null;
  }
}

/* ========== 计算单曲数据 ========== */
function calcSongData(title, grade, constantVal, bestScore, accuracyVal, scoreField) {
  const accFraction = accuracyVal / 100;
  const singleNrkRaw = Math.max(((Math.exp(2 * accFraction) - 1) / (Math.exp(2) - 1)) * (constantVal + 5));
  const bestLevel = (scoreField === "-")
    ? 9
    : (bestScore !== null ? calculateLevel(bestScore, accuracyVal) : 8);

  return {
    singleNrkRaw: singleNrkRaw,
    singleNrk: singleNrkRaw.toFixed(2),
    constant: constantVal,
    name: title,
    grade: grade,
    bestScore: bestScore, // 若为 null 则显示时以 "-" 替代
    bestAccuracy: accuracyVal,
    bestLevel: bestLevel
  };
}

/* ========== 计算等级 ========== */
function calculateLevel(score, acc) {
    if (score >= 1000000) {
      return acc === 100 ? 0 : 1; // X: 1000000 且 100% -> 0, 否则是 S -> 1
    } else if (score >= 990000) {
      return 2; // S
    } else if (score >= 970000) {
      return 3; // A+
    } else if (score >= 950000) {
      return 4; // A
    } else if (score >= 930000) {
      return 5; // A-
    } else if (score >= 910000) {
      return 6; // B
    } else if (score >= 880000) {
      return 7; // C
    } else {
      return 8; // F
    }
}

/* ========== 格式化输入 ========== */
function formatInput(username, items) {
  const formattedItems = items.map(item => 
    `${item.name},,,${item.grade},,,${item.bestScore !== null ? item.bestScore : "-"},,,${item.bestAccuracy}`
  ).join('\n');
  
  document.getElementById('inputData').value = username + '\n' + formattedItems;
}


/* ========== 显示用户信息 ========== */
function calculateAverageReality(results) {
  const sorted = results
    .filter(item => item.singleNrkRaw > 0)
    .sort((a, b) => b.singleNrkRaw - a.singleNrkRaw)
    .slice(0, 26);

  let rank_m_weight_sum = 0;
  let weight_sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    const weight = 1 - 0.02 * i; // ω_i = 100% - 2%(i - 1)
    rank_m_weight_sum += sorted[i].singleNrkRaw * weight;
    weight_sum += weight;
  }

  // 计算并返回最终的 Nrk，四舍五入到 4 位小数
  const nrk = rank_m_weight_sum / weight_sum;
  return weight_sum > 0 ? nrk.toFixed(4) : '0.0000';
}


function drawUserInfo(username, results) {
  const userInfoDiv = document.getElementById('userInfo');
  const usercontainer = document.getElementById('usercontainer');
  usercontainer.style.display = 'block';
  const avg = calculateAverageReality(results);
  userInfoDiv.innerHTML = `${username} ${avg}`;
  window.username = username;
  window.average = avg;
}

/* ========== 绘制单张卡片 ========== */
function drawCard(result, index) {
    const outputDiv = document.getElementById('output');
    const card = document.createElement('div');
    card.classList.add('card');

    // 背景色设置（目前 bestLevel 固定为 0，可根据 grade 后续调整）
    card.style.background = result.bestLevel === 0
        ? 'linear-gradient(135deg, #8400C3,#3030B0,#2e61ef)'
        : 'linear-gradient(45deg, #4028d7, #8839fe)';
    card.style.color = '#DDA0DD';

    // 计算基础字号
    let baseFontSize = (window.innerWidth * window.innerHeight) / 50000;
    if (baseFontSize >= 10) {
      baseFontSize = 10;
    }
    let fontSize = (baseFontSize * 4) / columns;
    const marginBottom = (baseFontSize * 4) / columns;

    // 标题
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = result.name;
    card.appendChild(title);

    const maxCardWidth = card.offsetWidth * 0.7;
    title.style.fontSize = `${fontSize * 1.3}px`;
    title.style.whiteSpace = 'nowrap';
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';

    // 若标题过长则减小字号
    while (title.offsetWidth > maxCardWidth && fontSize > 2) {
      fontSize--;
      title.style.fontSize = `${fontSize}px`;
    }

    // 信息行：显示等级、定数与单曲 nrk
    const info = document.createElement('div');
    info.classList.add('info');
    Object.assign(info.style, {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      overflow: 'visible',
      textOverflow: 'ellipsis',
      fontSize: `${fontSize}px`,
      marginBottom: `${marginBottom}px`
    });

    const constantText = `${parseFloat(result.constant).toFixed(1)} -> `;
    const rankSpan = document.createElement('span');
    rankSpan.innerHTML = result.singleNrk;
    rankSpan.style.color = '#ffffff';

    info.innerHTML = `${result.grade} ${constantText}`;
    info.appendChild(rankSpan);

    // 显示准确率（自动添加百分号）
    const accuracySpan = document.createElement('span');
    accuracySpan.classList.add('accuracy');
    accuracySpan.innerHTML = `   ${result.bestAccuracy}%`;
    Object.assign(accuracySpan.style, {
      marginLeft: 'auto',
      whiteSpace: 'nowrap',
      overflow: 'visible'
    });
    info.appendChild(accuracySpan);

    card.appendChild(info);

    // 分数显示：若未填写游玩分数则显示 "-"
    const score = document.createElement('div');
    score.classList.add('score');
    score.innerText = result.bestScore !== null ? result.bestScore : "-";
    score.style.fontSize = `${fontSize * 2.5}px`;
    score.style.marginBottom = `${marginBottom}px`;
    score.style.whiteSpace = 'nowrap';
    score.style.overflow = 'hidden';
    Object.assign(score.style, {
        background: 'linear-gradient(to right, #12a9fb, #ee80ff)',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text'
    });
    card.appendChild(score);

    // 序号显示
    const indexElem = document.createElement('div');
    indexElem.classList.add('index');
    indexElem.innerText = `#${index + 1}`;
    Object.assign(indexElem.style, {
      fontSize: `${fontSize}px`,
      marginBottom: `${marginBottom}px`,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    });
    card.appendChild(indexElem);

    outputDiv.appendChild(card);
}

/* ========== 列数调整 ========== */
function changeColumns(delta) {
    columns = Math.max(1, columns + delta);
    document.querySelector('.container').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    document.getElementById('output').innerHTML = ''; 
    processData();
}

/* ========== 文件上传及处理 ========== */
function upl() {
  document.getElementById('fileupLoad').click();
}

document.getElementById('fileupLoad').addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = () => {
      handleFile(reader.result, file.name);
  };
  reader.onerror = () => alert("读取文件失败\nFailed to read the file.");
  // 无论文件类型，均按纯文本读取
  reader.readAsText(file);
});

function handleFile(content, fileName) {
  // 将所有文件内容当作纯文本解析
  document.getElementById('inputData').value = content;
  processData();
}

/* ========== 下载图片 (含背景、卡片等) ========== */
function downloadImage() {
  genPicDialog();
  console.log("opening genPicDialog");
  const canvas = document.createElement('canvas');
  canvas.width = 1200;

  // 获取用户输入的卡片数量
  const cardCount = parseInt(document.getElementById('cardCount').value, 10);
  const maxItems = Math.max(1, cardCount); // 确保至少有1个卡片

  // 获取数据中实际的卡片数量
  const items = window.processedItems || [];
  const actualCardCount = Math.min(maxItems, items.length); // 实际绘制卡片数量，不能超过数据中的数量

  // 动态调整画布高度，保持宽度不变，最小高度为当前代码中的高度
  const baseHeight = 2200;
  const newHeight = 1200+Math.ceil((actualCardCount / 3) * 125); // 每3张卡片增加125像素的高度
  canvas.height = Math.max(baseHeight, newHeight);

  const ctx = canvas.getContext('2d');

  // 获取背景图设置
  const bgImageFile = document.getElementById('bgImage').files[0];
  let bgImagePromise = Promise.resolve(null);

  // 如果选择了背景图文件，加载它
  if (bgImageFile) {
    bgImagePromise = loadImage(URL.createObjectURL(bgImageFile));
  } else {
    bgImagePromise = loadImage('./jpgs/查分图.jpg'); // 默认背景图
  }

  bgImagePromise
    .then(bgImage => {
      if (bgImage) {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.fillStyle = 'rgba(128, 128, 128, 0.3)';
      ctx.fillRect(0, 50, canvas.width, 200);

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 3;
      ctx.moveTo(550, 250);
      ctx.lineTo(650, 50);
      ctx.stroke();

      ctx.font = '25px Arial';
      ctx.fillStyle = '#ffffff'
      ctx.fillText(`Player: ${window.username}`, 660, 100);
      ctx.fillText(`Nrk: ${window.average}`, 660, 150);
      const now = new Date();
      const dateStr = `${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0]}`;
      ctx.fillText(`Date: ${dateStr}`, 660, 200);

      ctx.font = '50px Arial';
      ctx.fillText('Nrk-calculator', 100, 130);
      ctx.font = '30px Arial';
      ctx.fillText('---', 100, 180);

      preloadImages(ctx, canvas, actualCardCount);
    });

  function preloadImages(ctx, canvas, actualCardCount) {
    const items = window.processedItems || [];
    const imagePromises = [];

    for (let i = 0; i < actualCardCount; i++) {
      const encodedName = encodeURIComponent(items[i].name);
      const imgPath = `./jpgs/${encodedName}.jpg`;
      const rankImgPath = `./jpgs/${items[i].bestLevel}.png`;
      
      const songImgPromise = loadImage(imgPath).catch(() => loadImage('./jpgs/NYA.jpg'));
      const rankImgPromise = loadImage(rankImgPath).catch(() => null);
      
      imagePromises.push(Promise.all([songImgPromise, rankImgPromise]));
    }

    Promise.all(imagePromises).then(images => drawCards(ctx, canvas, items, images, actualCardCount));
  }

  function drawCards(ctx, canvas, items, images, actualCardCount) {
    const scale = 1.3;
    const cardWidth = 250 * scale; // 设置卡片宽度为240
    const cardHeight = 100 * scale;
    const imgSize = 80 * scale; // 设置图片为正方形

    const xOffset = 90;
    const yOffset = 350;
    const columnSpacing = 270 * scale; // 调整列间距
    const rowSpacing = 125 * scale;

    items.slice(0, actualCardCount).forEach((item, i) => { // 绘制实际卡片数量
      const x = xOffset + (i % 3) * columnSpacing; // 一列3个
      const y = yOffset + Math.floor(i / 3) * rowSpacing;

      ctx.fillStyle = 'rgba(128, 128, 128, 0.4)';
      ctx.fillRect(x, y, cardWidth, cardHeight);

      ctx.font = `${13 * scale}px Arial`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      ctx.fillStyle = (i < 26) ? '#FAFAFA' : '#C9C9C9';
      ctx.fillText(`#${i + 1}`, x + cardWidth - 10, y + 5 * scale);

      let strScore = item.bestScore !== null ? item.bestScore.toString().padStart(7, '0') : "-";

      let scoreColor = item.bestLevel < 2 ? 
        ctx.createLinearGradient(x, y + 40 * scale, x, y + 70 * scale) :
        (item.bestLevel === 2 ? '#90CAEF' : '#FFFFFF');
      
      if (typeof scoreColor !== 'string') {
        scoreColor.addColorStop(0, '#99C5FB');
        scoreColor.addColorStop(1, '#D8C3FA');
      }

      ctx.font = `${28 * scale}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillStyle = scoreColor;
      ctx.fillText(strScore, x + 95 * scale, y + 40 * scale);

      const maxTextWidth = 200;
      let currentFontSize = 19 * scale;
      ctx.font = `${currentFontSize}px Arial`;
      let textWidth = ctx.measureText(item.name).width;
      while (textWidth > maxTextWidth && currentFontSize > 10) {
        currentFontSize--;
        ctx.font = `${currentFontSize}px Arial`;
        textWidth = ctx.measureText(item.name).width;
      }
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(item.name, x + 98 * scale, y + 18 * scale);

      ctx.font = `${15 * scale}px Arial`;
      ctx.fillStyle = '#FFFFFF';
      const accText = `${item.bestAccuracy}%`;
      ctx.fillText(`${item.grade} ${parseFloat(item.constant).toFixed(1)} > ${item.singleNrk}   ${accText}`, x + 95 * scale, y + 75 * scale);

      ctx.drawImage(images[i][0], x + 10 * scale, y + 10 * scale, imgSize, imgSize); // 图片为正方形

      if (images[i][1]) {
        ctx.drawImage(images[i][1], x + 200 * scale, y + 26 * scale, 53 * scale, 53 * scale);
      }
    });

    exportImage(canvas);
  }

  function exportImage(canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:\-T]/g, '_').split('.')[0];
    link.download = `output_${timestamp}.png`;
    link.click();
    document.getElementById('picgen').style.display = 'none';
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
}
