// js/common.js

export async function loadJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('読み込み失敗');
  return await res.json();
}

export function renderBusTable(data, selector) {
  const tbody = document.querySelector(selector);
  data['前期'].forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.曜日}</td>
      <td>${item.開始時限 === item.終了時限 ? item.開始時限 : item.開始時限 + '〜' + item.終了時限}</td>
      <td>${item.往路.時刻}<br>${item.往路.出発地}→${item.往路.到着地}</td>
      <td>${item.帰路.時刻}<br>${item.帰路.出発地}→${item.帰路.到着地}</td>
      <td>${item.科目名}</td>
      <td>${item.担当者名}</td>
      <td>${item.クラス.join(', ')}</td>
      <td>${item.運航開始日}</td>
    `;
    tbody.appendChild(tr);
  });
}
