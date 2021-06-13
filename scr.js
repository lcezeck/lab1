function myfunc() {
    const nedel2 = /[13579]/;
    const del2 = /[02468]/;  
    const digit = /[1-9]/;
    const ch = /[a-zA-Z]/;
    const m1 = (document.getElementById("m1").value).split(" ");
    const m2 = (document.getElementById("m2").value).split(" ");
    let check = 0;
    for (let i = 0; i < m1.length; i++) {
      if (m1[i].length == 4) check++;
      if (nedel2.test(m1[i][0])) check++;
      if (digit.test(m1[i][1])) check++;
      if (del2.test(m1[i][2])) check++;
      if (ch.test(m1[i][3])) check++;
      if (check == 5) check = 0;
      else {
        alert("Неверный ввод!");
        return;
      }
    }
    for (let i = 0; i < m2.length; i++) {
      if (m2[i].length == 4) check++;
      if (nedel2.test(m2[i][0])) check++;
      if (digit.test(m2[i][1])) check++;
      if (del2.test(m2[i][2])) check++;
      if (ch.test(m2[i][3])) check++;
      if (check == 5) check = 0;
      else {
        alert("Неверный ввод!");
        return;
      }
    }
    /*let check1 = 0;
    let check2 = 0;
    for (let i = 0; i < mas1.length; i++) {
      if (m1[i].length == 4) check1++;
      if (nedel2.test(m1[i][0])) check1++;
      if (digit.test(m1[i][1])) check1++;
      if (del2.test(m1[i][2])) check1++;
      if (ch.test(m1[i][3])) check1++;
      if (m2[i].length == 4) check2++;
      if (nedel2.test(m2[i][0])) check2++;
      if (digit.test(m2[i][1])) check2++;
      if (del2.test(m2[i][2])) check2++;
      if (ch.test(m2[i][3])) check2++;
      if ((check1 != 5) & (check2 != 5));
        alert("Неверный ввод!");
        return;
    }
    */
    document.getElementById("1").innerHTML = "Дополнение второго множества до первого: " +
                                                    dop((document.getElementById("m1").value).split(" "), (document.getElementById("m2").value).split(" "));
    document.getElementById("2").innerHTML = "Симметрическая разность множеств: " +
                                                    razn((document.getElementById("m1").value).split(" "), (document.getElementById("m2").value).split(" "));
    document.getElementById("3").innerHTML = "Пересечение множеств: " +
                                                    per((document.getElementById("m1").value).split(" "), (document.getElementById("m2").value).split(" "));
    document.getElementById("4").innerHTML = "Объединение множеств: " +
                                                    ob((document.getElementById("m1").value).split(" "), (document.getElementById("m2").value).split(" "));
    } 
  function dop(m1, m2) {
    let result = "";
    for (let i = 0; i < m1.length; i++) {
      for (let j = 0; j < m2.length; j++) {
        if (m1[i] == m2[j]) 
          m1[i] = "";
       }
    }
    for (let i = 0; i < m1.length; i++) {
      if (m1[i] != null)
        result += m1[i] + ' ';
    }
    return result;
  }
  function razn(m1, m2) {
    let result = "";
    for (let i = 0; i < m1.length; i++) {
      for (let j = 0; j < m2.length; j++) {
        if (m1[i] == m2[j]) {
          m1[i] = "";
          m2[j] = "";
        }
       }
    }
    for (let i = 0; i < m1.length; i++) {
      if (m1[i] != null)
        result += m1[i] + ' ';
    }
    for (let i = 0; i < m2.length; i++) {
      if (m2[i] != null)
        result += m2[i] + ' ';
    }
    return result;
  }                                                  
  function per(m1, m2) {
    let result = "";
    for (let i = 0; i < m1.length; i++) {
      for (let j = 0; j < m2.length; j++) {
        if (m1[i] == m2[j])
          result += m1[i] + ' ';
       }
    }
    return result;
  }
  function ob(m1, m2) {
    let result = "";
    for (let i = 0; i < m1.length; i++) {
      for (let j = 0; j < m2.length; j++) {
        if (m1[i] == m2[j]) 
          m2[j] = "";
       }
    }
    for (let i = 0; i < m1.length; i++) {
      result += m1[i];
    }
    for (let i = 0; i < m2.length; i++) {
      if (m2[i] != null)
        result += m2[i];
    }
    return result;
  }
  