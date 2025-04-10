function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const result = document.getElementById('result');
  
    if (!dobInput) {
      result.innerText = "❗ Please enter your date of birth.";
      return;
    }
  
    const birthDate = new Date(dobInput);
    const today = new Date();
  
    if (birthDate > today) {
      result.innerText = "❌ Date of birth cannot be in the future.";
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    result.innerText = `🎉 You are ${years} years, ${months} months, and ${days} days old.`;
  }
  