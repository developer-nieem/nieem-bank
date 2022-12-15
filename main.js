  // Login area 
  const loginBtn= document.getElementById('login');
  loginBtn.addEventListener('click', function(){
  const submitBtn= document.getElementById('login-area');
  submitBtn.style.display='none';
  const transectionArea= document.getElementById('transection-area');
  transectionArea.style.display="block";
  })

  // amount deposit and withdraw area

  const depositAmount=document.getElementById('deposit-amount');
  depositAmount.addEventListener('click', function(){

      const addAmount= document.getElementById('add-amount').value;
      const depositNumber= parseFloat(addAmount);
 
    
      // made input velue null
      document.getElementById('add-amount').value="";

      //   Deposit added Function
      updateBlance("current-deposit",depositNumber);

      // total blance added function
      updateBlance("current-blance",depositNumber);

  })

  // Withdraw area 
  const withdrawBtn= document.getElementById("withdrawBtn");
  withdrawBtn.addEventListener('click',function(){
      // var withdrawAmount= document.getElementById("withdraw-amount").value;
      // var withdrawAmountNumber=parseFloat(withdrawAmount);

      const withdrawNumber= getInputNumber("withdraw-amount");
      
      // made input velue null
      document.getElementById("withdraw-amount").value="";

      // Withdraw blance added
      updateBlance('withdraw-number',withdrawNumber)

      // Reduce Withdraw blance from main blance 
      updateBlance('current-blance',-1*withdrawNumber)

  })
  function getInputNumber(id){
      var withdrawAmount= document.getElementById(id).value;
      var withdrawAmountNumber=parseFloat(withdrawAmount);
      return withdrawAmountNumber;
  }

  function updateBlance(id,depositNumber){
      const currentBlance= document.getElementById(id).innerText;
      const currentBlanceNumber=parseFloat(currentBlance);
      const totalBlance = currentBlanceNumber+depositNumber;
     document.getElementById(id).innerText= totalBlance;
  }
