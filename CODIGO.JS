var accounts = {
    "CUENTA1": {
      password: "1234",
      balance: 500
    },
    "CUENTA2": {
      password: "5678",
      balance: 800
    },
    "CUENTA3": {
      password: "abcd",
      balance: 300
    }
  };

  var currentUser = "";
  
  function authenticate() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    
    if (accounts.hasOwnProperty(account) && accounts[account].password === password) {
      currentUser = account;
      document.getElementById("menu").style.display = "block";
      document.getElementById("account").value = "";
      document.getElementById("password").value = "";
    } else {
      alert("Cuenta o contraseña incorrecta. Intenta nuevamente.");
    }
  }
  
  function showBalance() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("balance").style.display = "block";
    document.getElementById("currentBalance").textContent = "Saldo actual: $" + accounts[currentUser].balance;
  }
  
  function deposit() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("deposit").style.display = "block";
    document.getElementById("depositAmount").value = "";
    document.getElementById("depositResult").textContent = "";
  }
  
  function confirmDeposit() {
    var amount = parseFloat(document.getElementById("depositAmount").value);
    
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("depositResult").textContent = "Ingrese un monto válido.";
      return;
    }
    
    var currentBalance = accounts[currentUser].balance;
    var newBalance = currentBalance + amount;
    
    if (newBalance > 990) {
      document.getElementById("depositResult").textContent = "El saldo máximo permitido es de $990.";
      return;
    }
    
    accounts[currentUser].balance = newBalance;
    document.getElementById("depositResult").textContent = "Se ingresó $" + amount + ". Nuevo saldo: $" + newBalance;
  }
  
  function withdraw() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("withdraw").style.display = "block";
    document.getElementById("withdrawAmount").value = "";
    document.getElementById("withdrawResult").textContent = "";
  }
  
  function confirmWithdraw() {
    var amount = parseFloat(document.getElementById("withdrawAmount").value);
    
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("withdrawResult").textContent = "Ingrese un monto válido.";
      return;
    }
    
    var currentBalance = accounts[currentUser].balance;
    var newBalance = currentBalance - amount;
    
    if (newBalance < 10) {
      document.getElementById("withdrawResult").textContent = "El saldo mínimo permitido es de $10.";
      return;
    }
    
    accounts[currentUser].balance = newBalance;
    document.getElementById("withdrawResult").textContent = "Se retiró $" + amount + ". Nuevo saldo: $" + newBalance;
  }
  
  function showTotal() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("total").style.display = "block";
    var total = 0;
    
    for (var account in accounts) {
      if (accounts.hasOwnProperty(account)) {
        total += accounts[account].balance;
      }
    }
    
    document.getElementById("totalBalance").textContent = "Saldo total: $" + total;
  }
  
  function backToMenu() {
    document.getElementById("balance").style.display = "none";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("total").style.display = "none";
    document.getElementById("menu").style.display = "block";
  }