fetch('Table_Input.csv')
  .then(res => res.text())
  .then(text => {
    const lines = text.trim().split('\n');
    const data = {};
    lines.slice(1).forEach(line => {
      const [idx, val] = line.split(',');
      data[idx] = +val;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx}</td><td>${val}</td>`;
      document.querySelector('#table1 tbody').appendChild(tr);
    });

    document.getElementById('alpha').textContent = data['A5'] + data['A20'];
    document.getElementById('beta').textContent = data['A15'] / data['A7'];
    document.getElementById('charlie').textContent = data['A13'] * data['A12'];
  });
