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
    jsonData.entries.forEach(function(entry) {
      // 创建时间线条目的HTML元素
      var listItem = document.createElement("li");
      listItem.className = "timeline-item";
      
      // 构建时间线条目内容
      var content = "<h3>" + entry.title + "</h3>";
      content += "<p>Date: " + entry.date + "</p>";
      content += "<p>Time: " + entry.time + "</p>";

      // 将内容添加到时间线条目中
      listItem.innerHTML = content;

      // 将时间线条目添加到时间线容器中
      timelineContainer.appendChild(listItem);
    });
  }
};
xhr.send();
