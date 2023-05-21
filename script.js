// 获取时间线容器
var timelineContainer = document.getElementById("timeline");

// 发起AJAX请求获取JSON数据
var xhr = new XMLHttpRequest();
xhr.open('GET', 'test.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 解析JSON数据
    var jsonData = JSON.parse(xhr.responseText);

    // 遍历JSON数据，创建时间线条目
    jsonData.entries.sort(function(a, b) {
      // 将日期和时间结合并转换为时间戳进行比较
      var dateTimeA = new Date(a.date + ' ' + a.time).getTime();
      var dateTimeB = new Date(b.date + ' ' + b.time).getTime();
      // 按时间从最新到最旧排序
      return dateTimeB - dateTimeA;
    }).forEach(function(entry) {
      // 创建时间线条目的HTML元素
      var listItem = document.createElement("li");
      listItem.className = "timeline-item";

      // 构建时间线条目内容
      var content = "<h3>" + entry.title + "</h3>";
      content += "<p>" + entry.date + " " + entry.time + "</p>";
      content += "<p>" + entry.body + "</p>"; // 添加 body 内容

      // 将内容添加到时间线条目中
      listItem.innerHTML = content;

      // 将时间线条目添加到时间线容器中
      timelineContainer.appendChild(listItem);
    });
  }
};
xhr.send();