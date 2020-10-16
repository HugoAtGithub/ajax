let n = 1;
getPage.onclick = (event) => {
  const target = event.target;
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let array = [];
        try {
          array = JSON.parse(request.response);
        } catch (error) {
          console.log(error);
        }
        array.forEach((element) => {
          const li = document.createElement("li");
          li.textContent = element.id;
          xxx.appendChild(li);
        });
        n += 1;
        // 按钮置灰
        if (n === 3) {
          getPage.setAttribute("disabled", true);
        }
      } else {
        alert("JSON 加载失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        let obj = [];
        try {
          obj = JSON.parse(request.response);
        } catch (error) {
          console.log(error);
          obj = [{ name: "no name" }];
        }
        myName.textContent = obj[0].name;
      } else {
        alert("JSON 加载失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);

        const dom = request.responseXML;
        console.log(dom.getElementsByTagName("warning")[0].textContent);
      } else {
        alert("xml 加载失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("HTML 加载失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("CSS 加载失败");
      }
    }
  };
  request.send();
};
